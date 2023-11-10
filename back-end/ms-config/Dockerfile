FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-config-0.0.1-SNAPSHOT.jar /app/ms-config-0.0.1-SNAPSHOT.jar
WORKDIR app

RUN apk add --no-cache bash curl jq

ENV MS_CONFIG_SERVER_GIT_URI=https://github.com/Juancazzhr/Pets-Care.git
ENV MS_CONFIG_SERVER_GIT_DEFAULT_LABEL=dev
ENV MS_CONFIG_PORT=8888

EXPOSE ${MS_CONFIG_PORT}

LABEL maintainer="Juancazzhr"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Config Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-config-0.0.1-SNAPSHOT.jar"]
