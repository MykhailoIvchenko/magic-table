import { Outlet } from 'react-router';
import styles from './appLayout.module.css';
import { AppProvider } from '@/context/AppProvider';

const AppLayout: React.FC = () => {
  return (
    <AppProvider>
      <main className={styles.layout}>
        <Outlet />
      </main>
    </AppProvider>
  );
};

export default AppLayout;
