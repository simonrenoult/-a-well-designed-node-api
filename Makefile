.SILENT: help
.PHONY: help
help:
	echo
	echo "Usage: make <command>"
	echo
	echo "Where <command> is one of:"
	echo
	echo "  help              print this help"
	echo "  install           install dependencies (using yarn)"
	echo "  build             build a new Docker image named api-image"
	echo "  start             start the app within a container"
	echo "  start-container   start the app within a container"
	echo "  start-app         start the nodejs app"
	echo "  restart           restart the container"
	echo "  stop              stop the container"
	echo

.SILENT: install
.PHONY: install
install:
	yarn install

.SILENT: build
.PHONY: build
build:
	./scripts/build

.SILENT: start
.PHONY: start
start:
	./scripts/start-container

.SILENT: stop
.PHONY: stop
stop:
	./scripts/stop

.SILENT: restart
.PHONY: restart
restart:
	./scripts/restart

.SILENT: start-container
.PHONY: start-container
start-container:
	./scripts/start-container

.SILENT: start-app
.PHONY: start-app
start-app:
	./scripts/start-app

.SILENT: lint
.PHONY: lint
lint:
	npm run lint
