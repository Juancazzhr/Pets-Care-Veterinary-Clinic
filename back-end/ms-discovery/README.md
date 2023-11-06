# Discovery Service

This service is responsible for discovering the services that are registered with the Eureka server. It is a Eureka
client that can discover the services registered with the Eureka server. It can also be used as a load balancer.

#### Environment Variables

| Name                  | Description                | Default Value         |
|-----------------------|----------------------------|-----------------------|
| SPRING_PROFILE_ACTIVE | Spring profile to activate | dev                   |
| SPRING_CONFIG_URL     | Spring Cloud Config Server | http://localhost:8888 |
| PORT                  | Port to run the service on | 8761                  |