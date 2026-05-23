import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "../styles/animate.css";
import "../styles/flaticon.css";
import "../styles/themify-icons.css";
import "../styles/sass/style.scss";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalJsonLd from "../components/seo/GlobalJsonLd";
import AnalyticsScripts from "../components/seo/AnalyticsScripts";

const Cursor = dynamic(() => import("../components/Cursor/Cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    setShowCursor(media.matches);

    const onChange = (event) => setShowCursor(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div>
      <GlobalJsonLd />
      <AnalyticsScripts />
      <Component {...pageProps} />
      {showCursor ? <Cursor /> : null}
    </div>
  );
}

export default MyApp;
