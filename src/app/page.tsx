import About from '../widgets/AboutThePlatform/About'
import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./navigation/Navigation"
import { Button } from '../shared/ui/button'
import { Price } from "@/widgets/Price";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation/>
      <About />
      <Price />
    </main>
  );
}
