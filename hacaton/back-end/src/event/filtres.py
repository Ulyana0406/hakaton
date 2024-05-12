from django_filters import rest_framework as filters
from django_filters.filters import DateFromToRangeFilter, NumberFilter, ChoiceFilter
from .models import Event
class EventFilters(filters.FilterSet):
    class Meta:
        model = Event
        fileds = {
            'start_event': '', 
            'end_event': '',
        }