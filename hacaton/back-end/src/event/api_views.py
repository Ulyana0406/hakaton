from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from .models import Event, Event_Subscribers
from .serializers import EventsDetailSerializer, EventsSerializer, Event_SubcribersSerializer
from rest_framework.response import Response
from rest_framework.request import Request
from django.shortcuts import get_object_or_404

class EventList(ViewSet):
    queryset = Event.objects.all()
    serializer_class = EventsSerializer
    def list(self, request):
        data = EventsSerializer(self.queryset, many=True, context={'request':request}).data
        return Response({
            'result': data,
            'description': 'ok'
        })

class EventAPI(APIView):
    queryset = Event.objects.all()
    serializer_class = EventsDetailSerializer
    def get(self, request, pk=None):
        pk = request.GET.get('pk')
        event = get_object_or_404(Event, pk=pk)
        data = EventsDetailSerializer(event, context={'request':request}).data
        return Response({
            'result': data,
            'description': 'ok'
        })

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'result': serializer.data,
                'description': 'ok'
            })
        else:
            return Response({
                'result':serializer.errors,
                'description': 'Ошибка валидации'
                }, 401)
        
class SubscriberManage(APIView):
    def put(self, request:Request):
        '''
        Из тела запроса вытаскиваем id подписки, новый статус возвращаем результат
        '''
        id_subscriber = request.data['sub_id']
        # Получаем объект подписчика или возвращаем 404 ошибку, если не найден
        subscriber = get_object_or_404(Event_Subscribers, id=id_subscriber)
        # Обновляем статус подписчика
        new_status = request.data['status']
        subscriber.status = new_status
        # Сохраняем изменения в базе данных
        subscriber.save()
        # Возвращаем обновленные данные подписчика через сериализатор и статус "ok"
        return Response({
            'result': Event_SubcribersSerializer(subscriber).data,  # Используем объект, а не класс
            'description': 'ok'
        })
    
    def post(self, request:Request):
        '''
        post вытаскиваем id event и текущего пользователя
        создаем нового подписчика возвращаем результат
        '''
        id_event = request.data['event_id']
        event = get_object_or_404(Event, id_event)
        event_subscriber = Event_Subscribers()
        event_subscriber.event = event
        event_subscriber.user = request.user.profile
        event_subscriber.save()
        return Response({
            'result': Event_SubcribersSerializer(event_subscriber).data,
            'description': 'ok'
        })