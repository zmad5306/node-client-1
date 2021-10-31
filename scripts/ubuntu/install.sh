#!/bin/bash
ufw allow 8081
sudo apt update
sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
rm -rf node-client-1
git clone https://github.com/zmad5306/node-client-1.git
cd node-client-1
npm i
sudo cp ./services/ubuntu/node-cliet-1.service /etc/systemd/system/node-client-1.service
sudo systemctl enable node-client-1.service
sudo systemctl start node-client-1.service
