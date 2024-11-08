# Usa la imagen oficial de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
# Esto es útil para instalar las dependencias antes de copiar todo el código
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Expone el puerto 3000 (o el puerto que uses)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
