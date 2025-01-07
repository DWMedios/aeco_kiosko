#!/bin/bash

# Ruta del archivo de log
LOG_FILE="/home/dw/launch_kiosk.log"

# Redirigir la salida estándar y de error al archivo de log
exec > "$LOG_FILE" 2>&1

echo "-----------------------------"
echo "Script iniciado: $(date)"
echo "-----------------------------"

# Espera hasta que Docker esté corriendo
MAX_WAIT=60  # Tiempo máximo de espera en segundos
WAITED=0

echo "Esperando a que Docker inicie..."
until docker info > /dev/null 2>&1; do
    sleep 5
    WAITED=$((WAITED + 5))
    echo "Docker aún no está listo. Tiempo esperado: ${WAITED}s"
    if [ "$WAITED" -ge "$MAX_WAIT" ]; then
        echo "Tiempo de espera agotado. Docker no inició."
        exit 1
    fi
done

echo "Docker está corriendo."

# Verifica si el contenedor está corriendo
CONTAINER_NAME="aeco-app-frontend"
if docker ps --filter "name=$CONTAINER_NAME" --filter "status=running" | grep -q "$CONTAINER_NAME"; then
    echo "Docker y el contenedor $CONTAINER_NAME están corriendo."
    echo "Lanzando Chromium en modo kiosco..."
    chromium-browser --kiosk http://localhost:5173
else
    echo "El contenedor $CONTAINER_NAME no está corriendo. No se lanzará Chromium."
fi

echo "Script finalizado: $(date)"
