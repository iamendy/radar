import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pancake font-inter text-base-50">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
