import Navbar from "./components/Navbar/Navbar";
import GetStarted from "./components/GetStarted/GetStarted";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import Benefits from "./components/Benefits/Benefits";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <GetStarted />
      <NumberCounter />
      <Benefits />
      <Banner {...BannerData} reverse={false} />
      <Banner {...BannerData2} reverse />
    </main>
  );
};

export default App;
