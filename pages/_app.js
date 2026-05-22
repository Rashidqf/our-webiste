import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cursor from "../components/Cursor/Cursor";
import GlobalJsonLd from "../components/seo/GlobalJsonLd";
import AnalyticsScripts from "../components/seo/AnalyticsScripts";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalJsonLd />
      <AnalyticsScripts />
      <Component {...pageProps} />
      <Cursor />
    </div>

  )
}

export default MyApp
