import { Outlet } from 'react-router';

import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';

import styles from './MainLayout.module.css';

export function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
