#!/bin/bash

# Archivo de logs
LOG_FILE="/home/dw/launch_kiosk.log"
echo "-----------------------------" >> "$LOG_FILE"
echo "Script iniciado: $(date)" >> "$LOG_FILE"
echo "-----------------------------" >> "$LOG_FILE"

# Configuración del entorno gráfico
export DISPLAY=:0

# Espera hasta que Docker esté corriendo
MAX_WAIT=60  # Tiempo máximo de espera en segundos
WAITED=0

echo "Esperando a que Docker inicie..." >> "$LOG_FILE"
until docker info > /dev/null 2>&1; do
    sleep 5
    WAITED=$((WAITED + 5))
    REMAINING=$((MAX_WAIT - WAITED))
    echo "Docker aún no está listo. Tiempo restante: ${REMAINING}s" >> "$LOG_FILE"
    if [ "$WAITED" -ge "$MAX_WAIT" ]; then
        echo "Tiempo de espera agotado. Docker no inició." >> "$LOG_FILE"
        exit 1
    fi
done

echo "Docker está corriendo." >> "$LOG_FILE"

# Verifica si el contenedor está corriendo
CONTAINER_NAME="aeco-frontend"
echo "Esperando a que el contenedor $CONTAINER_NAME esté corriendo..." >> "$LOG_FILE"
until docker ps --filter "name=$CONTAINER_NAME" --filter "status=running" | grep -q "$CONTAINER_NAME"; do
    sleep 5
done

echo "Docker y el contenedor $CONTAINER_NAME están corriendo." >> "$LOG_FILE"

# Lanza Chromium en modo kiosco
echo "Lanzando Chromium en modo kiosco..." >> "$LOG_FILE"
chromium-browser --kiosk http://localhost:5173 >> "$LOG_FILE" 2>&1

echo "Script finalizado: $(date)" >> "$LOG_FILE"
