FROM node:18

# Установите зависимости
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копируйте остальные файлы приложения
COPY . .

# Соберите приложение
RUN npm run build:linux