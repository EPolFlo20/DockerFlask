FROM python:3.10

WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY . .

# Instalar Flask y otras dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Exponer el puerto donde correrá Flask
EXPOSE 5000

# Definir la variable de entorno FLASK_APP
ENV FLASK_APP=init

# Ejecutar Flask en el contenedor
CMD ["flask", "run", "--host=0.0.0.0"]
