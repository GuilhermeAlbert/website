import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroHome from "../../components/hero-home";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <HeroHome />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
