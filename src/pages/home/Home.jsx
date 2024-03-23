import Banner from "../../components/banner/Banner";
import Category from "../../components/categorySection/Category";

const Home = () => {
  return (
    <div className="min-h-[100vh]">
        <Banner></Banner>
        <section className="max-w-7xl mx-auto mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-12">
          <Category></Category>
        </section>

      home
    </div>
  );
};

export default Home;