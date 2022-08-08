#!/usr/bin/bash

apt upgrade -y
apt update -y
apt install nodejs -y
apt clean
apt install tty-clock -y
apt install sox -y
apt install jq -y
apt install mc -y
apt install figlet -y
apt install wget -y
apt install yarn
apt install ffmpeg
apt install libwebp -y
apt install nodejs -y
apt install tesseract -y
apt install imagemagick -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
yarn

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
npm start
