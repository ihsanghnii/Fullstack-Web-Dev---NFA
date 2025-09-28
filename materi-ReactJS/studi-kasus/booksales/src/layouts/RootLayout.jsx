import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Index";
import Footer from "../components/shared/Footer/Index";

export default function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Main */}
      <main className="container flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}