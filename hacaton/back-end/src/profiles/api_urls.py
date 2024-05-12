from rest_framework.routers import SimpleRouter
from django.urls import path
from .api_view import UserInfo, UserList

class OptionalslashRouter(SimpleRouter):
    def __init__(self, trailing_slash=True, use_regex_path=True):
        super().__init__(trailing_slash, use_regex_path)
        self.trailing_slash = '/?'

router = OptionalslashRouter()
router.register('profile', UserList, 'profile')

urlpatterns = router.urls
urlpatterns += [
    path('item', UserInfo.as_view())
    #универы
    #списки пользователей с фильтрацией по типу профиля
    #список специальностей
]