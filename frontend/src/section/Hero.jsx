import Header from "./Header";
import RestaurantList from "./RestaurantList";
import CallToActions from "./CallToActions";
import AboutMiam from "./AboutMiam";
import JoinUs from "./JoinUs";
import AdSpace from "./AdSpace";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white px-6 py-12 min-h-screen">
      <Header />
      <RestaurantList />
      <CallToActions />
      <AboutMiam />
      <JoinUs />
      <AdSpace />
    </section>
  );
};

export default Hero;
