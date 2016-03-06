from rest_framework.views import APIView
from rest_framework.response import Response
from ListGateway.models import VT_Services
from ListGateway.serializers import GlobalSearchSerializer
from django.db.models import Q
# Create your views here.

##search view, full text search on name and case-insensitive search on currency
##django supports full text search using __search but field has to be indexed manually
##command to maually index  field for full text is 
## '''alter table add fulltext search(field)''';

class GlobalSearchList(APIView):
    '''creates serializer of the queryset'''
    def get(self, request):
        '''Handles get request'''
        ##Get the query param
        query = request.query_params.get('query', None)
        ##search
        result = VT_Services.objects.filter(
                    Q(name__search=query)|Q(currencies__icontains=query)|Q(name__icontains=query)
                    )
        ##serialize into json
        result = GlobalSearchSerializer(result, many=True)


        ##return JSON
        return Response(result.data)

    def post(self, request):
        '''Handles post request'''
        ##Get the Post param
        query = request.POST.get('query', False)

        ##search
        result = VT_Services.objects.filter(
                    Q(name__search=query)|Q(currencies__icontains=query)|Q(name__icontains=query)
                    )

        ##return JSON
        result = GlobalSearchSerializer(result, many=True)
        return Response(result.data)


##List view
class GlobalList(APIView):
    '''Lists all the portals as JSON'''

    def get(self, request):
        '''Get request'''
        result = VT_Services.objects.all()
        result = GlobalSearchSerializer(result, many=True)
        return Response(result.data)

    def post(self, request):
        '''Post request'''
        result = VT_Services.objects.all()
        result = GlobalSearchSerializer(result, many=True)
        return Response(result.data)
