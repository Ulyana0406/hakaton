from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.request import Request
from .serializers import CorpusesSerializers, AuditoriesSerializers
from event.models import Event
from .models import Corpuses, Auditories
from datetime import datetime
from django.db.models import Q

class AuditoriesList(APIView):
    def get(self, req:Request):
        start,stop = req.GET.get('start'), req.GET.get('stop')
        a_list = Auditories.objects.all()
        if start and stop:
            try:
                start = datetime.strptime(start, '%Y-%m-%dT%H:%M')
                stop = datetime.strptime(stop, '%Y-%m-%dT%H:%M')
            except:
                return Response({
                    'result': None,
                    'description': 'Неверный формат даты'
                }, 401)

            filter_start = Q(
                start_event__lte=start, 
                end_event__gte=start
            )
            filter_stop = Q(
                start_event__lte=stop,
                end_event__gte=stop
            )
            events = Event.objects.filter(filter_start|filter_stop)
            a_list = a_list.exclude(pk__in=[i.place_event_id for i in events])
        data = AuditoriesSerializers(a_list, many=True).data
        return Response({
            'result': data,
            'description': 'ok'
        })
            
            
