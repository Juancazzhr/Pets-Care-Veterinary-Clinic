FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-consult-0.0.1-SNAPSHOT.jar /app/ms-consult-0.0.1-SNAPSHOT.jar
WORKDIR app

RUN apk add --no-cache bash curl jq

ENV MS_CONSULTS_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_CONSULTS_PROFILE_ACTIVE=dev
ENV MS_CONSULTS_SERVICE_URL=http://localhost:8761/eureka
ENV MS_CONSULTS_PORT=8001
ENV MS_CONSULTS_DB=''
ENV MS_CONSULTS_DB_USERNAME=''
ENV MS_CONSULTS_DB_PASSWORD=''

EXPOSE ${MS_PROFESSIONALS_PORT}

LABEL maintainer="Pablo"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Consults Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-consult-0.0.1-SNAPSHOT.jar"]



