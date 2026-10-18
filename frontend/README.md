# Frontend T-Invest

React 19 + TypeScript, Vite, React Router. Компонентная архитектура, общий layout.

## Запуск

```
make frontend-install   # npm ci
make frontend-run       # dev-сервер на http://localhost:3000
```

Переменные окружения: скопировать `.env.example` в `.env`.

## Структура `src/`

```
app/            точка сборки приложения
  App.tsx       корневой компонент
  providers/    глобальные провайдеры (тема, auth, query client)
  router/       маршруты (routes.ts) и конфиг роутера (router.tsx)
layouts/        каркасы страниц; MainLayout = Header + <Outlet /> + Footer
pages/          страницы, по одной папке на маршрут
components/
  ui/           переиспользуемые примитивы без бизнес-логики (Button, Input...)
  common/       составные компоненты приложения (Header, Footer...)
hooks/          общие хуки
services/api/   HTTP-клиент и запросы к бэкенду
config/         конфигурация (env)
types/          общие типы
utils/          вспомогательные функции
styles/         глобальные стили и CSS-переменные
```

## Правила

- Один компонент — одна папка: `Component.tsx`, `Component.module.css`,
  `Component.test.tsx`, `index.ts` (реэкспорт).
- Импорт из других слоёв через алиас `@/` и `index.ts` папки:
  `import { Button } from '@/components/ui/Button'`.
- Зависимости идут сверху вниз: `app → layouts → pages → components → hooks/services → utils/types`.
  `ui`-компоненты не импортируют `common`, `pages` и `services`.
- Стили — CSS Modules, цвета и отступы только через переменные из `styles/variables.css`.
- Новая страница: папка в `pages/`, путь в `app/router/routes.ts`, маршрут в `app/router/router.tsx`.

## Команды

| make                 | npm                 |                   |
| -------------------- | ------------------- | ----------------- |
| `frontend-test`      | `npm test`          | тесты (Vitest)    |
| `frontend-lint`      | `npm run lint`      | ESLint            |
| `frontend-fmt`       | `npm run fmt`       | Prettier          |
| `frontend-typecheck` | `npm run typecheck` | проверка типов    |
| `frontend-build`     | `npm run build`     | production-сборка |
