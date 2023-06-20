import Navbar from "../components/global/navbar/Navbar";
import Herosection from "../components/home/Herosection";
import "../css/home.css";

export default function Home() {

  document.title = "PetTop - Home";

  return (
    <>
      <Navbar />
      <main className="bg-default">
        <Herosection />

      </main>

    </>
  );
}
