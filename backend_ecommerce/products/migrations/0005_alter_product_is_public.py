# Generated by Django 4.1.13 on 2024-04-01 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_alter_product_is_public'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='is_public',
            field=models.BooleanField(),
        ),
    ]
