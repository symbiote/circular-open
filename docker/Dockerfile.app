FROM php:7.4-apache

RUN usermod -u 1000 www-data

RUN apt-get update \
	&& apt-get install -my gnupg \
	&& apt-get install -y --allow-unauthenticated \
      default-mysql-client \
      libzip-dev \
      libtidy-dev \
      libpng-dev \
      libjpeg62-turbo-dev \
      libfreetype6-dev \
      libmcrypt-dev \
      libicu-dev \
      libxslt1-dev \
      libxslt1.1 \
      msmtp \
  && rm -rf /var/lib/apt/lists/* 

RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install \
			sockets \
      gd \
      mysqli \
      tidy \
    #   mbstring \
      opcache \
      xsl \
      pdo_mysql \
      intl \
      zip \
      soap \
    && pecl install redis-4.0.2 \
    # && pecl install mcrypt-1.0.2 \
    && pecl install xdebug \
    && docker-php-ext-enable redis 
    # && docker-php-ext-enable mcrypt 



# Tideways xhprof.
RUN xhprof_ext_ver="5.0.2"; \
    mkdir -p /usr/src/php/ext/tideways_xhprof; \
    xhprof_url="https://github.com/tideways/php-xhprof-extension/archive/v${xhprof_ext_ver}.tar.gz"; \
    curl -sL "${xhprof_url}" | tar xz --strip-components=1 -C /usr/src/php/ext/tideways_xhprof; \
    docker-php-ext-install tideways_xhprof

ENV TZ=Australia/Melbourne

RUN echo '[Date]\ndate.timezone = "Australia/Melbourne"' >> /usr/local/etc/php/conf.d/timezone.ini \
    && echo "account default\nhost mailhog\nport 1025\ntls off\nfrom noreply@symbiote.io" > /etc/msmtprc \
    && echo "sendmail_path = /usr/bin/msmtp -t" > /usr/local/etc/php/conf.d/sendmail.ini \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone \
    && mkdir -p /var/log/php \
    && chown www-data /var/log/php

COPY php.ini /usr/local/etc/php/php.ini
COPY xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini


RUN a2enmod rewrite \
    && a2enmod headers \
    && a2enmod vhost_alias \
    && a2enmod expires \
    && a2enmod proxy \
    && a2enmod proxy_fcgi \
    && a2enmod ssl


RUN mkdir /opt/certs && \
    openssl genrsa -des3 -passout pass:gsahdg -out /opt/certs/server.pass.key 2048 && \
    openssl rsa -passin pass:gsahdg -in /opt/certs/server.pass.key -out /opt/certs/server.key && \
    rm /opt/certs/server.pass.key && \
    openssl req -new -key /opt/certs/server.key -out /opt/certs/server.csr -subj "/C=AU/ST=Victoria/L=Melbourne/O=Symbiote/OU=Devops/CN=*.symlocal" && \
    openssl x509 -req -days 365 -in /opt/certs/server.csr -signkey /opt/certs/server.key -out /opt/certs/server.crt

RUN rm /etc/apache2/sites-available/000-default.conf && rm /etc/apache2/sites-enabled/000-default.conf
ADD project.conf /etc/apache2/sites-available/100-default.conf
RUN ln -s /etc/apache2/sites-available/100-default.conf /etc/apache2/sites-enabled/100-default.conf

CMD ["apache2-foreground"]