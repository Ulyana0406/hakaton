from rest_framework.routers import SimpleRouter
from django.urls import path
from .api_views import EventAPI, EventList, SubscriberManage

class OptionalslashRouter(SimpleRouter):
    def __init__(self, trailing_slash=True, use_regex_path=True):
        super().__init__(trailing_slash, use_regex_path)
        self.trailing_slash = '/?'

router = OptionalslashRouter()
router.register('list', EventList, 'Eventlist')

urlpatterns = router.urls
urlpatterns += [
    path('item/', EventAPI.as_view()),
    path('item/sub/', SubscriberManage.as_view())
]