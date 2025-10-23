import BestSeller from "../components/BestSeller";
import CategorySection from "../components/CategorySection";
import CTABanner from "../components/CTABanner";
import CollectionSection from "../components/CollectionSection";
import CustomerReviews from "../components/CustomerReviews";
import HeroBanner from "../components/HeroBanner";
import OurBrandValues from "../components/OurBrandValues";

const Home = () => {

  return (
    <>
      <HeroBanner />
      <CategorySection />
      <BestSeller />
      <OurBrandValues />
      <CTABanner />
      <CollectionSection />
      <CustomerReviews />
    </>
  );
};

export default Home;
