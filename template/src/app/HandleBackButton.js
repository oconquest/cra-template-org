const HandleBackButton = (useEffect, navigate, location, drawer, setDrawer) => {

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


    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };

  }, [navigate, location.pathname, drawer]);


};

export default HandleBackButton;
