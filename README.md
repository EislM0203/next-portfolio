## Build and push

```sh
docker buildx create --name container-builder --driver docker-container --use --bootstrap
docker run --privileged --rm tonistiigi/binfmt --install all
docker login https://harbor.traunseenet.com
docker buildx build --platform=linux/amd64,linux/arm64 -t harbor.traunseenet.com/traunseenet/portfolio:latest --push -f ./Dockerfile .
```