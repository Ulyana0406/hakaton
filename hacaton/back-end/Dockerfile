# Используем базовый образ Python
FROM python:3.12

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# Устанавливаем утилиту shadow для работы с пользователями и группами
# RUN apk --no-cache add shadow

# Создаем рабочую директорию
WORKDIR /app

# Копируем файлы requirements.txt
COPY ./requirements.txt ./
# RUN apk add build-base
# Обновляем pip и устанавливаем зависимости
RUN pip install --upgrade pip
RUN pip install wheel
RUN pip install pyproject.toml
RUN pip install asyncpg
RUN pip install -r requirements.txt