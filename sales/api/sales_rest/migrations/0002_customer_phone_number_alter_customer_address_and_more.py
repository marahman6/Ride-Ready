# Generated by Django 4.0.3 on 2023-07-24 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='phone_number',
            field=models.CharField(blank=True, max_length=15),
        ),
        migrations.AlterField(
            model_name='customer',
            name='address',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='sale',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=6),
        ),
    ]
