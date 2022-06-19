# Generated by Django 4.0.5 on 2022-06-17 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0003_alter_student_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='department',
            field=models.CharField(choices=[('mechanical', 'Mechanical'), ('electrical', 'Electrical'), ('computers', 'Computers'), ('electronics', 'Electronics'), ('civil', 'Civil'), ('fill-choice', 'Fill-Choice')], default='fill-choice', max_length=50, verbose_name='Department'),
        ),
    ]