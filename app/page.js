import Image from "next/image";
import { Header, Hero, What, Why, ContactForm, Footer } from "./components";

export default function Home() {
  return (
    <div>
      <Hero />
      <What />
      <Why />
      <ContactForm />
    </div>
  );
}
