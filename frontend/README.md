# Frontend T-Invest

React 19 + TypeScript, Vite, React Router. Компонентная архитектура, общий layout.

## Quick start

Из корня репозитория:

```bash
# 1. Установить зависимости
make frontend-install

# 2. Создать файл переменных окружения
cp frontend/.env.example frontend/.env

# 3. Запустить dev-сервер на http://localhost:3000
make frontend-run
```

Шаг 2 можно пропустить: без `.env` фронтенд обращается к бэкенду на `http://localhost:8000`
(см. `src/config/env.ts`).

Остальные команды — `make help`.

### Windows

Чтобы git не подменял окончания строк на CRLF (иначе `make frontend-fmt` меняет все файлы):

```bash
git config --global core.autocrlf false
```

В репозитории окончания строк зафиксированы в `.gitattributes` (LF) и `.prettierrc.json`.

## Структура `src/`

```text
app/            точка сборки приложения
  App.tsx       корневой компонент
  providers/    глобальные провайдеры (тема, auth, query client)
  router/       конфиг роутера (router.tsx)
layouts/        каркасы страниц; MainLayout = Header + <Outlet /> + Footer
pages/          страницы, по одной папке на маршрут
components/
  ui/           переиспользуемые примитивы без бизнес-логики (Button, Input...)
  common/       составные компоненты приложения (Header, Footer...)
hooks/          общие хуки
services/api/   HTTP-клиент и запросы к бэкенду
config/         конфигурация: env, пути маршрутов (routes.ts)
types/          общие типы
utils/          вспомогательные функции
styles/         глобальные стили и CSS-переменные
```

## Правила

- Один компонент — одна папка: `Component.tsx`, `Component.module.css`,
  `Component.test.tsx`, `index.ts` (реэкспорт).
- Импорт из других слоёв через алиас `@/` и `index.ts` папки:
  `import { Button } from '@/components/ui/Button'`.
- Зависимости идут сверху вниз:
  `app → layouts → pages → components → hooks/services → config/utils/types`.
  Нижний слой не импортирует верхний: например, компоненты и страницы берут пути из
  `@/config/routes`, а не из `app/router`. `ui`-компоненты не импортируют `common`, `pages` и `services`.
- Стили — CSS Modules, цвета и отступы только через переменные из `styles/variables.css`.
- Новая страница: папка в `pages/`, путь в `config/routes.ts`, маршрут в `app/router/router.tsx`.
