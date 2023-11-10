FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-gateway-0.0.1-SNAPSHOT.jar /app/ms-gateway-0.0.1-SNAPSHOT.jar
WORKDIR app

RUN apk add --no-cache bash curl jq

ENV MS_GATEWAY_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_GATEAWY_PROFILE_ACTIVE=dev
ENV MS_GATEWAY_SERVICE_URL=http://localhost:8761/eureka
ENV MS_GATEWAY_PORT=8080

EXPOSE ${MS_GATEWAY_PORT}

LABEL maintainer="Juancazzhr"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Gateway Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-gateway-0.0.1-SNAPSHOT.jar"]