const HandleTheme = (useEffect, setMode) => {

  useEffect(() => {

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const dynamicTheme = (e) => {
      e.matches ? setMode("dark") : setMode("light");
    };
    mediaQuery.addEventListener("change", dynamicTheme);

    return () => {
      mediaQuery.removeEventListener("change", dynamicTheme);
    };
  }, [setMode]);

};

export default HandleTheme;
