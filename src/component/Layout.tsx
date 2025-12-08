import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = {
    background: isDark ? "bg-gray-900" : "bg-white",
    text: isDark ? "text-white" : "text-gray-900",
    sidebar: isDark ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900",
    navbar: isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900",
    dropdown: isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900",
    hover: isDark ? "hover:bg-gray-700" : "hover:bg-gray-100",
    border: isDark ? "border-gray-700" : "border-gray-200",
    sidebarBorder: isDark
      ? "border-r border-gray-700"
      : "border-r border-gray-200",
    headerBorder: isDark
      ? "border-b border-gray-700"
      : "border-b border-gray-200",
  };

  return (
    <div
      className={`drawer lg:drawer-open min-h-screen ${themeClasses.background} ${themeClasses.text}`}
    >
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav
          className={`navbar flex justify-between w-full ${themeClasses.navbar} ${themeClasses.headerBorder}`}
        >
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>

            <div className="navbar">
              <div className="flex gap-2">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="User avatar"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={-1}
                    className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${themeClasses.dropdown} border ${themeClasses.border}`}
                  >
                    <li>
                      <a className={`justify-between ${themeClasses.hover}`}>
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a className={themeClasses.hover}>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div
          className={`flex justify-between min-h-full flex-col items-start is-drawer-close:w-14 is-drawer-open:w-64 ${themeClasses.sidebar} ${themeClasses.sidebarBorder}`}
        >
          <ul className="menu w-full grow">
            <li>
              <button
                onClick={() => handleNavigation("/dashboard")}
                className={`w-full text-left ${themeClasses.hover}`}
                data-tip="Dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
                <span className="is-drawer-close:hidden">Dashboard</span>
              </button>
            </li>
            <li>
              <button
                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${themeClasses.hover}`}
                data-tip="Homepage"
                onClick={() => handleNavigation("/")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Home page</span>
              </button>
            </li>

            <li>
              <button
                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${themeClasses.hover}`}
                data-tip="Store"
                onClick={() => handleNavigation("/store")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Store</span>
              </button>
            </li>

            <li>
              <button
                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${themeClasses.hover}`}
                data-tip="Product"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Product</span>
              </button>
            </li>
          </ul>
          <div className={`p-4 w-full border-t ${themeClasses.border}`}>
            <button
              className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${themeClasses.hover} w-full text-left`}
              data-tip="Settings"
              onClick={() => handleNavigation("/settings")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
              <span className="is-drawer-close:hidden ml-2">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
