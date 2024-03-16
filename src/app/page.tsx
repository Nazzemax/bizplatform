import Image from "next/image";
import styles from "./page.module.css";
import { Button } from '../shared/ui/button'
import { Price } from "@/widgets/Price";

export default function Home() {
  return (
    <main className={styles.main}>
      <Price />
    </main>
  );
}
