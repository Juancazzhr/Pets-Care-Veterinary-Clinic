## Discovery Service

This service is responsible for discovering the services that are registered with the Eureka server.

### Environment Variables

| Name                           | Description                | Default Value         |
|--------------------------------|----------------------------|-----------------------|
| MS_DISCOVERY_CONFIG_SERVER_URL | URL to Cloud Config        | http://localhost:8888 |
| MS_DISCOVERY_PROFILE_ACTIVE    | Active profile             | dev                   |
| MS_DISCOVERY_PORT              | Port to run the service on | 8761                  |


### Build

`docker build --push -t {username}/petscare-ms-discovery .`

### Push

`docker push {username}/petscare-ms-discovery`

### Run

`docker run --name ms-discovery -dp 8761:8761 {username}/petscare-ms-discovery`