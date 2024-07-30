#!/bin/sh

# Espera a que la base de datos esté disponible
echo "Esperando a que la base de datos esté disponible..."
dockerize -wait tcp://aeco-db:5432 -timeout 30s

echo "Base de datos disponible."

# Ejecuta las migraciones
echo "Ejecutando migraciones..."
npm run db:migrate

#Ejecuta los seeders
echo "Ejecutando seeders..."
npm run db:seed

# Inicia la aplicación
echo "Iniciando la aplicación..."
npm start