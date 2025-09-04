import Navbar from "../component/navbar/navbar";
import Hero from "../component/Hero";
import Biography from "../component/Biography";
import Publications from "../component/Publication";
import Experience from "../component/Experience";
import AwardsAchievements from "../component/AwardsAchievements";

export default function Home() {
  return (
<>
      <div className="fixed top-3 inset-x-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <Biography />
      <Publications />
      <Experience />
      <AwardsAchievements />
    </>
  );
}
