# Utilise une image officielle Nginx légère
FROM nginx:alpine

# Copie les fichiers de l'application dans le répertoire par défaut de Nginx
COPY . /usr/share/nginx/html

# Expose le port 80 (par défaut pour Nginx)
EXPOSE 80

# Démarre Nginx en premier plan
CMD ["nginx", "-g", "daemon off;"]