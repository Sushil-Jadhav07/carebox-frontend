const useScrollRestoration = () => {
  window.history.scrollRestoration = "manual";
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });

};

export default useScrollRestoration;