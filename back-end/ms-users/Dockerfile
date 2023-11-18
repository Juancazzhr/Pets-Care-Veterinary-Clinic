FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-users-0.0.1-SNAPSHOT.jar /app/ms-users-0.0.1-SNAPSHOT.jar
WORKDIR app

RUN apk add --no-cache bash curl jq

ENV MS_USERS_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_USERS_PROFILE_ACTIVE=dev
ENV MS_USERS_SERVICE_URL=http://localhost:8761/eureka
ENV MS_USERS_HOSTNAME=mss-users
ENV MS_USERS_PORT=8001
ENV MS_USERS_DB=''
ENV MS_USERS_DB_USERNAME=''
ENV MS_USERS_DB_PASSWORD=''

EXPOSE ${MS_USERS_PORT}

LABEL maintainer="AlejoG"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Users Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-users-0.0.1-SNAPSHOT.jar"]