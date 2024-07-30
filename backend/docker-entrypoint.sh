#!/bin/sh

echo "Esperando a que la base de datos esté disponible..."
dockerize -wait tcp://aeco-db:5432 -timeout 30s

echo "Base de datos disponible."

echo "Ejecutando migraciones..."
npm run db:migrate

echo "Ejecutando seeders..."
npm run db:seed

echo "Iniciando la aplicación..."
npm start