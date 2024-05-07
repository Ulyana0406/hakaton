#!/bin/sh
python src/manage.py makemigrations
python src/manage.py migrate
gunicorn -w 3 --chdir /app/src core.wsgi --bind 0.0.0.0:8000