FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-professionals-0.0.1-SNAPSHOT.jar /app/ms-professionals-0.0.1-SNAPSHOT.jar
WORKDIR app

RUN apk add --no-cache bash curl jq

ENV MS_PROFESSIONALS_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_PROFESSIONALS_PROFILE_ACTIVE=dev
ENV MS_PROFESSIONALS_SERVICE_URL=http://localhost:8761/eureka
ENV MS_PROFESSIONALS_HOSTNAME=ms-professionals
ENV MS_PROFESSIONALS_PORT=8001
ENV MS_PROFESSIONALS_DB=db.ctd.academy:3306/pi21023c02_GRUPO6
ENV MS_PROFESSIONALS_DB_USERNAME=pi21023c02_GRUPO6
ENV MS_PROFESSIONALS_DB_PASSWORD=iguu3Ohg

EXPOSE ${MS_PROFESSIONALS_PORT}

LABEL maintainer="AlejoG"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Professionals Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-professionals-0.0.1-SNAPSHOT.jar"]



