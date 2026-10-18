import { Link } from 'react-router';

import { ROUTES } from '@/app/router/routes';

export function NotFoundPage() {
  return (
    <section>
      <h1>404</h1>
      <p>Страница не найдена.</p>
      <Link to={ROUTES.home}>На главную</Link>
    </section>
  );
}
