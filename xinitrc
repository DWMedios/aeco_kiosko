#!/bin/bash
xset -dpms
xset s off
xset s noblank

# Rotar todas las pantallas conectadas a la derecha
for output in $(xrandr | grep " connected" | awk '{print $1}'); do
  xrandr --output "$output" --rotate right
done

# Ajustar dispositivo táctil (si aplica)
xinput set-prop "Multi touch   Multi touch overlay device" "Coordinate Transformation Matrix" 0 1 0 -1 0 1 0 0 1

# Ejecutar Chromium en modo kiosko
chromium-browser --noerrdialogs --disable-infobars --kiosk http://localhost:5173 --window-size=1080,1920 --force-device-scale-factor=0.7 --disable-gpu --no-sandbox --disable-dev-shm-usage --ozone-platform=x11 --disable-accelerated-video --disable-accelerated-video-decode

#Borrar volumen de imagenes para refresh
docker volume rm aeco-app_aeco-images 