#!/bin/bash

# Archivo de logs
LOG_FILE="/home/dw/launch_kiosk.log"
echo "-----------------------------" >> "$LOG_FILE"
echo "Script iniciado: $(date)" >> "$LOG_FILE"
echo "-----------------------------" >> "$LOG_FILE"

export XDG_RUNTIME_DIR=/run/user/$(id -u)
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

# Verificar si ya hay un servidor X corriendo
if pgrep -x "X" > /dev/null; then
    echo "Un servidor X ya está corriendo en DISPLAY=:0. Usando el servidor existente." >> "$LOG_FILE"
    # Reutilizar el servidor X existente y lanzar Chromium en modo kiosko
    export DISPLAY=:0
    chromium-browser --noerrdialogs --disable-infobars --kiosk http://localhost:5173 --disable-gpu --no-sandbox --disable-dev-shm-usage --ozone-platform=x11 --disable-accelerated-video --disable-accelerated-video-decode >> "$LOG_FILE" 2>&1
    exit 0
fi

# Limpiar archivo de bloqueo si existe
if [ -f /tmp/.X0-lock ]; then
    echo "Eliminando archivo de bloqueo /tmp/.X0-lock..." >> "$LOG_FILE"
    rm -f /tmp/.X0-lock
fi

# Inicia X11 con xinit solo si no está corriendo
echo "Iniciando X11 con xinit..." >> "$LOG_FILE"
xinit >> "$LOG_FILE" 2>&1

echo "Script finalizado: $(date)" >> "$LOG_FILE"
