import About from '../widgets/AboutThePlatform/About'
import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./navigation/Navigation"



export default function Home() {
  return (
   <div>
    <Navigation/>
    <About />
   </div>
  );
}
