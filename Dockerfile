# Use an official lightweight PHP runtime as a parent image
FROM php:8.1-fpm-alpine

# Set the working directory in the container
WORKDIR /var/www/html

# Install system dependencies
RUN apk add --update \
    curl \
    git \
    nodejs \
    npm \
    && docker-php-ext-install pdo_mysql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy application code to the container
COPY . .

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev

# Install frontend dependencies
RUN npm install

# Build frontend
RUN npm run build

# Expose port 80
EXPOSE 80

# Start the web server
CMD ["php", "-S", "0.0.0.0:80"]
