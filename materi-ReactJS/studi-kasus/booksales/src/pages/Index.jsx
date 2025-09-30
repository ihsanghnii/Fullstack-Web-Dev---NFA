import Hero from "../components/shared/Hero/Index";
import BestSeller from "../components/shared/BestSeller/Index";
import Book from "./Book/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <Book />
    </>
  );
}