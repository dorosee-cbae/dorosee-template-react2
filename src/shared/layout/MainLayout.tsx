import { Outlet, useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex min-h-dvh flex-col">
        <main className="flex flex-1">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '100px',
            }}
          >
            <button
              onClick={() => navigate('/user')}
              style={{ backgroundColor: 'red', color: 'white', width: '100%' }}
            >
              유저 페이지
            </button>
            <button
              onClick={() => navigate('/')}
              style={{ backgroundColor: 'blue', color: 'white', width: '100%' }}
            >
              홈 페이지
            </button>
          </div>
          <section className="w-full p-4">
            <article className="flex flex-col gap-4">
              <Outlet />
            </article>
          </section>
        </main>
      </div>
    </div>
  );
};
export default MainLayout;
