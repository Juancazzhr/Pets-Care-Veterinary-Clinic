# Config Service

This service is responsible for providing configuration to the other services.

### Environment Variables

| Name                               | Description                | Default Value |
|------------------------------------|----------------------------|---------------|
| MS_CONFIG_SERVER_GIT_URI           | URL to Git repository      |               |
| MS_CONFIG_SERVER_GIT_DEFAULT_LABEL | Default branch name        | dev           |
| MS_CONFIG_PORT                     | Port to run the service on | 8888          |

### Build Image

`docker build -t {username}/petscare-ms-config .`

### Push Image

`docker push {username}/petscare-ms-config`

### Run Container

`docker run --name ms-config -dp 8888:8888 -e MS_CONFIG_SERVER_GIT_URI=... \
-e MS_CONFIG_SERVER_GIT_DEFAULT_LABEL=... \
-e MS_CONFIG_PORT=...
`