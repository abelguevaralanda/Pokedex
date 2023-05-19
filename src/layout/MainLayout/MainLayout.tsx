import { Outlet } from 'react-router-dom';
import Header from '../../features/components/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main_container">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
