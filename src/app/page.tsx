import  { About } from '../widgets/AboutThePlatform/About'
import styles from "./page.module.css";
import { Price } from "@/widgets/Price";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Price />
    </main>
  );
}
