import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet/>;
}

export default ScrollToTop;
