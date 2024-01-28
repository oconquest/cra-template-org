const HandleScroll = (useEffect, location) => {

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

};

export default HandleScroll;
