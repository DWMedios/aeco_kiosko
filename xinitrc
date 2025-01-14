#!/bin/bash
xset -dpms      # Deshabilitar el apagado de pantalla
xset s off      # Deshabilitar el protector de pantalla
xset s noblank  # Prevenir pantalla en negro

# Configurar la rotación de la pantalla
xrandr --output $(xrandr | grep " connected" | awk '{print $1}') --rotate left

# Esperar a que Docker y el contenedor estén listos
chromium-browser --noerrdialogs --disable-infobars --kiosk http://localhost:5173 --window-size=1080,1920 --force-device-scale-factor=0.65 --disable-gpu --no-sandbox --disable-dev-shm-usage --ozone-platform=x11 --disable-accelerated-video --disable-accelerated-video-decode