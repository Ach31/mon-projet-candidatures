# Utilise une image Nginx légère
FROM nginx:alpine

# Copie tous les fichiers de l'application dans le répertoire de Nginx
COPY . /usr/share/nginx/html/

# Copie une configuration Nginx personnalisée pour éviter les problèmes de CORS
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose le port 80
EXPOSE 80

# Démarre Nginx en premier plan
CMD ["nginx", "-g", "daemon off;"]