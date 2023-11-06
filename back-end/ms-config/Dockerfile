FROM amazoncorretto:21-alpine3.18

ENV APP_NAME=ms-config
ENV PORT=8888
ENV PROFILE=local
ENV CLOUD_CONFIG_URI=http://localhost:8888

EXPOSE $PORT

RUN apk update && apk add --no-cache \
    bash \
    curl \
    git \

WORKDIR /app
COPY ./target/ms-config-0.0.1-SNAPSHOT.jar /app/${APP_NAME}.jar

LABEL maintainer="Juancazzhr"
LABEL authors="C2 Team 6 PI Specialization"

CMD ["sh", "-c", "java -jar ${APP_NAME}.jar"]