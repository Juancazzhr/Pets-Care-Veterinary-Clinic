## Gateway Service

This service is the gateway of the application, it is the entry point of the application.

### Environment Variables

| Name                         | Description                | Default Value         |
|------------------------------|----------------------------|-----------------------|
| MS_GATEWAY_CONFIG_SERVER_URL | URL to Cloud Config        | http://localhost:8888 |
| MS_GATEWAY_PROFILE_ACTIVE    | Active profile             | dev                   |
| MS_GATEWAY_PORT              | Port to run the service on | 8080                  |
| MS_GATEWAY_SERVICE_URL       | URL to Eureka server       | http://localhost:8761 |

### Build

`docker build -t {username}/petscare-ms-gateway .`

### Push

`docker push {username}/petscare-ms-gateway`

### Run

`docker run --name ms-gateway -dp 8080:8080 {username}/petscare-ms-gateway
-e MS_GATEWAY_CONFIG_SERVER_URL=... \
-e MS_GATEWAY_PROFILE_ACTIVE=... \
-e MS_GATEWAY_PORT=... \
-e MS_GATEWAY_SERVICE_URL=... \`