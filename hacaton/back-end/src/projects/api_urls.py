from rest_framework.routers import SimpleRouter
from django.urls import  path, include
#from .api_views import ProjectsViewSet, CommentViews, SubscribersViews, TypeProjectsViewSet
from .api_views import ProjectsList, ProjectApi, CommentsManage, SubscriberManage, TypeProjectList
class OptionalslashRouter(SimpleRouter):
    def __init__(self, trailing_slash=True, use_regex_path=True):
        super().__init__(trailing_slash, use_regex_path)
        self.trailing_slash = '/?'

router = OptionalslashRouter()
router.register('list', ProjectsList, 'list')
router.register('typelist', TypeProjectList, 'typelist')
# router.register('type', TypeProjectsViewSet, 'type')
# router.register('project', ProjectsViewSet, 'project')

urlpatterns = router.urls
urlpatterns += [
    path('item/', ProjectApi.as_view()),
    path('item/comment_create', CommentsManage.as_view()),
    path('item/sub_create', SubscriberManage.as_view()),
    # path('type/<int:name_type>/project', ProjectsViewSet.as_view({'get': 'list', 'put':'update'}), name='project'),
    # path('project/<int:project_id>/comments/', CommentViews.as_view({'get': 'list'}), name='project-comments'),
    # path('project/<int:project_id>/subscribers/', SubscribersViews.as_view({'get': 'list'}), name='project-subscribers'),
    # path('type/<int:name_type>/', TypeProjectsViewSet.as_view({'get': 'list'}), name='type_id')
]