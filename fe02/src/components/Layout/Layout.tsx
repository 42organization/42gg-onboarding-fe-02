import styles from '@/styles/Layout/Layout.module.scss';
import Footer from './Footer';
import Header from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
