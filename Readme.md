docker build -t your-image-name .
docker run -p 8080:8080 your-image-name
docker-compose up


Host: mysql
Port: 3306
User: root


docker exec -it fiprojecta-mysql-1 mysql -u root -p