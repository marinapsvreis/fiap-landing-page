import CoursesSection from "./components/CoursesSection";
import FaqSection from "./components/FaqSection";
import HeaderSection from "./components/HeaderSection";
import IntroSection from "./components/IntroSection";
import WaterSection from "./components/WaterSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main className={styles.page}>
        <IntroSection />
        <WaterSection />
        <CoursesSection />
        <FaqSection />
      </main>
    </>
  );
}
