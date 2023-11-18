FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests -B

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-clients-0.0.1-SNAPSHOT.jar /app/ms-clients-0.0.1-SNAPSHOT.jar
WORKDIR app

RUN apk add --no-cache bash curl jq

ENV MS_CLIENTS_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_CLIENTS_PROFILE_ACTIVE=dev
ENV MS_CLIENTS_SERVICE_URL=http://localhost:8761/eureka
ENV MS_CLIENTS_HOSTNAME=ms-clients
ENV MS_CLIENTS_PORT=8001
ENV MS_CLIENTS_DB=''
ENV MS_CLIENTS_DB_USERNAME=''
ENV MS_CLIENTS_DB_PASSWORD=''

EXPOSE ${MS_CLIENTS_PORT}

LABEL maintainer="Pablo"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Clients Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-clients-0.0.1-SNAPSHOT.jar"]
