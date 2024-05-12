from django_filters import rest_framework as filters
from django_filters.filters import DateFromToRangeFilter, NumberFilter, ChoiceFilter
from .models import Projects, TypeProjects

class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')
    # status = filters.CharFilter(field_name='status', lookup_expr='exact')
    # start_date = DateFromToRangeFilter()
    # end_date = DateFromToRangeFilter()
    # budget_min = NumberFilter(field_name='budget', lookup_expr='gte')
    # budget_max = NumberFilter(field_name='budget', lookup_expr='lte')

    class Meta:
        model = Projects
        fields = ['name',]
class TypeProjectsFilter(filters.FilterSet):
    class Meta:
        model = TypeProjects
        fields = {
            'title': ['exact', 'in'],  # позволяет фильтровать по точному значению или списку значений
        }