import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-auto overflow-x-hidden">
      <Header />
      <main className="mt-9">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
