PROJECT?=hierarchy-metric
APP?=frontend
PORT?=4000

CONTAINER_IMAGE?=$(PROJECT)-${APP}
RELEASE?=0.0.1

container:
	docker build -t $(CONTAINER_IMAGE):$(RELEASE) .

run: container
	docker stop $(CONTAINER_IMAGE):$(RELEASE) || true && docker rm $(CONTAINER_IMAGE):$(RELEASE) || true
	docker run --name $(CONTAINER_IMAGE) -p ${PORT}:${PORT} --rm -e "PORT=${PORT}" $(CONTAINER_IMAGE):$(RELEASE)
