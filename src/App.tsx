import Sidebar from "./component/Sidebar";
// import Header from "./header/Header";
// import Home from "./main/Home";

const App = () => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Sidebar />
      {/* <Header /> */}
      {/* <div className="hidden md:flex h-full gap-4">
        <aside className="bg-green-500 p-4 w-48">
        </aside>
        <main className="bg-blue-500 flex-1 flex flex-col">
          <Home />
          <footer className="bg-blue-700 text-white p-2">Footer</footer>
        </main>
      </div> */}
    </div>
  );
};

export default App;
