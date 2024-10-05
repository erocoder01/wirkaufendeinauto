import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrollt zum Anfang der Seite
  }, [pathname]);

  return null; // Diese Komponente rendert nichts
}

export default ScrollToTop;
