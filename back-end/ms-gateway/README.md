1. For build the image use the command
`docker build -t {username}/petscare-gateway:latest .`

2. For run the image use the command 
`docker run --rm -dp 8888:8888 --name  petscare-gateway {username}/petscare-gateway:latest`