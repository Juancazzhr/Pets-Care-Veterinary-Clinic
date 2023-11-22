FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-storage-0.0.1-SNAPSHOT.jar /app/ms-storage-0.0.1-SNAPSHOT.jar
WORKDIR app

ENV MS_STORAGE_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_STORAGE_PROFILE_ACTIVE=dev
ENV MS_STORAGE_SERVICE_URL=http://localhost:8761/eureka
ENV MS_STORAGE_HOSTNAME=mss-users
ENV MS_STORAGE_PORT=8001
ENV MS_STORAGE_AWS_ACCESS_KEY_ID=''
ENV MS_STORAGE_AWS_SECRET_ACCESS_KEY=''
ENV MS_STORAGE_AWS_REGION=aws-global
ENV MS_STORAGE_AWS_S3_BUCKET=petscare

EXPOSE ${MS_STORAGE_PORT}

LABEL maintainer="Juancazzhr"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="Storage Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-storage-0.0.1-SNAPSHOT.jar"]