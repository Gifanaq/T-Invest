.PHONY: help \
        backend-install backend-run backend-test backend-lint backend-fmt backend-mypy

help:
	@echo "Backend:"
	@echo "  backend-install  - install dependencies"
	@echo "  backend-run      - run backend"
	@echo "  backend-test     - run tests"
	@echo "  backend-lint     - ruff check"
	@echo "  backend-fmt      - ruff format"
	@echo "  backend-mypy     - mypy src"

backend-install:
	cd backend && poetry install

backend-run:
	cd backend && poetry run python -m src.main

backend-test:
	cd backend && poetry run pytest

backend-lint:
	cd backend && poetry run ruff check .

backend-fmt:
	cd backend && poetry run ruff format .

backend-mypy:
	cd backend && poetry run mypy src