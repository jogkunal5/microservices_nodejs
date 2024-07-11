# Microservice example using node.js

Microservice architecture repo using node.js

# Requirement:

NodeJS
Docker
Mongodb
RabbitMQ

# Imp commands and notes:

# RabbitMQ (Windows): How to start and stop

C:\Program Files\RabbitMQ Server\rabbitmq_server-3.13.4\sbin>rabbitmq-service.bat start
The requested service has already been started.

More help is available by typing NET HELPMSG 2182.

C:\Program Files\RabbitMQ Server\rabbitmq_server-3.13.4\sbin>rabbitmq-service.bat stop
The RabbitMQ service is stopping..
The RabbitMQ service was stopped successfully.

# docker command:

- run docker-compose.yml file

docker-compose build && docker-compose up

- Clean Up Docker System:

docker system prune -a --volumes

- Docker Rebuild and Restart:

docker-compose build
docker-compose up
