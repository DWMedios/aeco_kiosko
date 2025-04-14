FROM node:18-bookworm
WORKDIR /app

COPY package.json package-lock.json ./

# Instalar dependencias del sistema necesarias para compilar módulos nativos
RUN apt-get update && apt-get install -y \
    build-essential \
    libudev-dev \
    python3 \
    curl \
    udev \
    wget \
    gawk \
    bison \
    && apt-get clean && rm -rf /var/lib/apt/lists/*


# Descargar e instalar dockerize
RUN curl -sSL https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar xz -C /usr/local/bin

# Instalar dependencias de Node.js con --legacy-peer-deps
RUN npm install --legacy-peer-deps



# RUN apk update && apk add udev
# RUN npm install --legacy-peer-deps
# RUN apk add --no-cache curl && \
#     curl -sSL https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar xz -C /usr/local/bin

COPY . .

RUN npm install -g sequelize-cli
RUN npm install -g dotenv


EXPOSE 3333

COPY ./docker-entrypoint.sh /docker-entrypoint.sh


RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]