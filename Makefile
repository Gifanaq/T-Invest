.PHONY: help \
        backend-install backend-run backend-test backend-lint backend-fmt backend-mypy \
        frontend-install frontend-build frontend-run frontend-test frontend-lint frontend-fmt frontend-typecheck

help:
	@echo "Backend:"
	@echo "  backend-install  - install dependencies"
	@echo "  backend-run      - run backend"
	@echo "  backend-test     - run tests"
	@echo "  backend-lint     - ruff check"
	@echo "  backend-fmt      - ruff format"
	@echo "  backend-mypy     - mypy src"
	@echo ""
	@echo "Frontend:"
	@echo "  frontend-install   - install dependencies"
	@echo "  frontend-build     - production build"
	@echo "  frontend-run       - run dev server"
	@echo "  frontend-test      - run tests"
	@echo "  frontend-lint      - eslint"
	@echo "  frontend-fmt       - prettier format"
	@echo "  frontend-typecheck - tsc type check"

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


frontend-install:
	cd frontend && npm ci

frontend-build:
	cd frontend && npm run build

frontend-run:
	cd frontend && npm run dev

frontend-test:
	cd frontend && npm test

frontend-lint:
	cd frontend && npm run lint

frontend-fmt:
	cd frontend && npm run fmt

frontend-typecheck:
	cd frontend && npm run typecheck
