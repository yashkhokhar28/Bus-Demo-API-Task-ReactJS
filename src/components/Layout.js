import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
