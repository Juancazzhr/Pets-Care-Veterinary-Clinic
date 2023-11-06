FROM maven:3.9.5-amazoncorretto-21 AS build

LABEL maintainer="Juancazzhr"
LABEL authors="C2 Team 6 PI Specialization"

RUN mkdir /project
COPY . /project
WORKDIR /project
RUN mvn clean package -DskipTests

ENV PORT=8888
ENV PROFILE=prod
ENV CLOUD_CONFIG_URI=http://localhost:8888

EXPOSE ${PORT}

FROM amazoncorretto:21-alpine3.18
RUN mkdir /app
COPY --from=build /project/target/ms-gateway-0.0.1-SNAPSHOT.jar /app/ms-gateway-0.0.1-SNAPSHOT.jar
WORKDIR /app

RUN apk update && apk add --no-cache \
    bash \
    curl \
    git

CMD ["sh", "-c", "java -jar ms-gateway-0.0.1-SNAPSHOT.jar"]