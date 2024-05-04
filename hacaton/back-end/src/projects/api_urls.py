from rest_framework.routers import SimpleRouter
from django.urls import  path, include
from .api_views import ProjectsViewSet, CommentViews, SubscribersViews

class OptionalslashRouter(SimpleRouter):
    def __init__(self, trailing_slash=True, use_regex_path=True):
        super().__init__(trailing_slash, use_regex_path)
        self.trailing_slash = '/?'

router = OptionalslashRouter()
router.register('project', ProjectsViewSet, 'project')

urlpatterns = router.urls
urlpatterns += [
    path('project/<int:project_id>/comments/', CommentViews.as_view({'get': 'list'}), name='project-comments'),
    path('project/<int:project_id>/subscribers/', SubscribersViews.as_view({'get': 'list'}), name='project-subscribers'),
]