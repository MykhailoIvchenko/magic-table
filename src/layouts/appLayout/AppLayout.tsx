import { Outlet } from 'react-router';
import styles from './appLayout.module.css';

const AppLayout: React.FC = () => {
  return (
    <main className={styles.layout}>
      <Outlet />
    </main>
  );
};

export default AppLayout;
