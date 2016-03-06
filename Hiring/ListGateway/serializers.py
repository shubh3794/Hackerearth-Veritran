'''Serializers convert the db queries into python 
data structures(dictionaries) for easy json rendering'''
from rest_framework import serializers
from ListGateway.models import VT_Services

class GlobalSearchSerializer(serializers.ModelSerializer):
    '''serializes a python object into JSON serializabale format'''
    class Meta:
        '''defines the model to be serialized'''
        model = VT_Services