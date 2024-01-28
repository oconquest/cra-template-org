import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../scripts/InitFirebase";
import DBRequest from "../scripts/DBRequest";

const AppInit = (useEffect, navigate, location, setUser, setMode, path, drawer, setDrawer) => {
  useEffect(() => {
    const handleScroll = () => {
      const pathname = location.pathname;
      const scrollPosition = {
        left: window.pageXOffset || document.documentElement.scrollLeft,
        top: window.pageYOffset || document.documentElement.scrollTop,
      };
      sessionStorage.setItem(pathname, JSON.stringify(scrollPosition));
    };

    const savedScrollPosition = JSON.parse(sessionStorage.getItem(location.pathname));
    if (savedScrollPosition) {
      const { left, top } = savedScrollPosition;
      window.scrollTo(left, top);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (!sessionStorage.getItem('init')) {
      navigate(location.pathname);
      sessionStorage.setItem('init', true);
    }

    const handleBackButton = (event) => {
      if (drawer === true) {
        event.preventDefault();
        navigate(location.pathname);
        setDrawer(false);
      }
    };

    window.addEventListener('popstate', handleBackButton);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          photo: user.photoURL,
          name: user.displayName,
          email: user.email,
        });
      } else {
        // navigate("/login");
        setUser(null);
      }
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const dynamicTheme = (e) => {
      e.matches ? setMode("dark") : setMode("light");
    };
    mediaQuery.addEventListener("change", dynamicTheme);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
      unsubscribe();
      mediaQuery.removeEventListener("change", dynamicTheme);
    };
  }, [navigate, location.pathname, drawer, setDrawer, setUser, setMode]);

  // Rest of your code...

};

export default AppInit;
