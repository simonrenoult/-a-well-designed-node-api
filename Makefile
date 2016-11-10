.SILENT: help
.PHONY: help
help:
	echo
	echo "Usage: make <command>"
	echo
	echo "Application lifecycle management command list."
	echo
	echo "Commands:"
	echo
	echo "  help              print this help"
	echo
	echo "  > Using docker (recommended):"
	echo
	echo "  build             build a new Docker image named api-image"
	echo "  test              run linter, unit and integration tests"
	echo "  test-unit         run unit tests"
	echo "  test-integ        run integration tests"
	echo "  start             shortcut for start-container"
	echo "  start-container   start the app within a container"
	echo "  restart           restart the container"
	echo "  stop              stop the container"
	echo
	echo "  > Using host:"
	echo
	echo "  install           install dependencies (using yarn)"
	echo "  start-app         start the nodejs app"
	echo "  lint              run the linter"
	echo "  watch             start the nodejs app and watch changes"
	echo "  test-integ        run the integration tests"
	echo "  test-unit         run test unit tests"
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
	./scripts/start

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

.SILENT: watch
.PHONY: watch
watch:
	npm run watch

.SILENT: test
.PHONY: test
test:
	./scripts/test

.SILENT: test-integ
.PHONY: test-integ
test-integ:
	./scripts/test-integ

.SILENT: test-unit
.PHONY: test-unit
test-unit:
	./scripts/test-unit
