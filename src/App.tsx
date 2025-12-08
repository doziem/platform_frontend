import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      {/* <Layout /> */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
