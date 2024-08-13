import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWelectron from '../static/img/logo_welectron_black.svg';

const TopNavigation = () => {
  return (
    <div className="">
        <WelectronLogo />
        <Breadcrumbs />
        <TopMenu />
    </div>
  );
};

const WelectronLogo = () => {
    return (
      <div className="py-6 px-12 bg-sky-500">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoWelectron} className="h-6" style={{ filter: 'brightness(0) invert(1)' }} alt="Welectron logo" />
          <span></span>
        </a>
      </div>
    );
  };

const TopMenu = () => {
    const navItems = [
        { to: "/", label: "Home" },
        { to: "/brand", label: "Brand" },
        { to: "/product", label: "Product" },
        { to: "/template", label: "Template" },
      ];
    
      const linkClasses = "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
    
      return (
        <nav className="text-sm px-8 font-medium text-center text-gray-500 border-t border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClasses}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      );
    };

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex py-1 px-5 bg-slate-200">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 px-6">
        <li className="inline-flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 text-sm">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name}>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {isLast ? (
                  <span className="ml-1 text-gray-500 md:ml-2 font-medium text-sm">{name}</span>
                ) : (
                  <Link to={routeTo} className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">
                    {name}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default TopNavigation;