FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-discovery-0.0.1-SNAPSHOT.jar /app/ms-discovery-0.0.1-SNAPSHOT.jar
WORKDIR app

ENV MS_DISCOVERY_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_DISCOVERY_PROFILE_ACTIVE=dev
ENV MS_DISCOVERY_PORT=8761

EXPOSE ${MS_DISCOVERY_PORT}

LABEL maintainer="Juancazzhr"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Discovery Service"

CMD ["java", "-jar", "ms-discovery-0.0.1-SNAPSHOT.jar"]