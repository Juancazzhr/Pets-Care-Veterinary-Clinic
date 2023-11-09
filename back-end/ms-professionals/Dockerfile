FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/employees-0.0.1-SNAPSHOT.jar /app/employees-0.0.1-SNAPSHOT.jar
WORKDIR app

ENV MS_PROFESSIONALS_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_PROFESSIONALS_PROFILE_ACTIVE=dev
ENV MS_PROFESSIONALS_SERVICE_URL=http://localhost:8761
ENV MS_PROFESSIONALS_PORT=8181

EXPOSE ${MS_PROFESSIONALS_PORT}

LABEL maintainer="AlejoG"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Professionals Service"

CMD ["java", "-jar", "employees-0.0.1-SNAPSHOT.jar"]



