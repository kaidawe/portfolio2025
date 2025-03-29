import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-[url('/castleBG.jpeg')] bg-cover bg-center h-screen flex flex-col items-center justify-center relative">
      <Header />
      <main className="">
      </main>
    </div>
  );
}
