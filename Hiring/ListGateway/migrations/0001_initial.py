# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VT_Services',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=20)),
                ('image', models.TextField()),
                ('description', models.TextField()),
                ('branding', models.CharField(max_length=10)),
                ('rating', models.DecimalField(max_digits=11, decimal_places=3)),
                ('setup_fee', models.DecimalField(max_digits=11, decimal_places=3)),
                ('transaction_fees', models.TextField()),
                ('how_to_url', models.TextField()),
                ('currencies', models.TextField()),
            ],
        ),
    ]
