from dotenv import load_dotenv
import os

load_dotenv()  # загружает переменные окружения из файла .env

# Теперь переменные окружения доступны через os.getenv()
db_selection = os.getenv('DJANGO_DATABASE', 'default')
db_name = os.getenv('POSTGRES_DB', '')
db_user = os.getenv('POSTGRES_USER', '')
db_password = os.getenv('POSTGRES_PASSWORD', '')
db_host = os.getenv('POSTGRES_HOST', '')
db_port = os.getenv('POSTGRES_PORT', '')
db_engine = os.getenv('DB_ENGINE', '')