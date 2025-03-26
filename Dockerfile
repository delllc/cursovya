# Базовый образ PHP с Alpine Linux
FROM php:8.2-fpm-alpine

# Установка зависимостей
RUN apk add --no-cache \
    curl \
    git \
    nodejs \
    npm \
    postgresql-dev \
    build-base \
    && docker-php-ext-install pdo_pgsql mbstring tokenizer xml ctype json

# Установка Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Создание рабочей директории
WORKDIR /var/www/html

# Копирование файлов проекта
COPY . .

# Установка прав доступа
RUN chmod -R 775 storage bootstrap/cache

# Установка PHP-зависимостей
RUN composer install --optimize-autoloader --no-dev

# Установка фронтенд-зависимостей
RUN npm install

# Сборка фронтенда
RUN npm run build

# Открытие порта
EXPOSE 80

# Запуск сервера
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]
