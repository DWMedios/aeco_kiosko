[Unit]
Description=Launch Chromium in kiosk mode if Docker is running
After=multi-user.target docker.service
Requires=docker.service

[Service]
Type=simple
ExecStart=/home/dw/start_kiosko.sh
Environment=DISPLAY=:0
Restart=on-failure
User=dw

[Install]
WantedBy=multi-user.target