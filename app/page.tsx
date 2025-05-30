import CoursesSection from "./components/CoursesSection";
import FaqSection from "./components/FaqSection";
import HeaderSection from "./components/HeaderSection";
import IntroSection from "./components/IntroSection";
import WaterSection from "./components/WaterSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderSection />
      <IntroSection />      
      <WaterSection />
      <CoursesSection />
      <FaqSection />
    </div>
  );
}
