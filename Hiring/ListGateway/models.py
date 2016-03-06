from django.db import models

# Create your models here.
class VT_Services(models.Model):
    '''Model to create VT_Services in mysql'''
    name = models.CharField(max_length=20)
    image = models.TextField()
    description = models.TextField()
    branding = models.CharField(max_length=10)
    rating = models.DecimalField(max_digits=11, decimal_places=3)
    setup_fee = models.DecimalField(max_digits=11, decimal_places=3)
    transaction_fees = models.TextField()
    how_to_url = models.TextField()
    currencies = models.TextField()


