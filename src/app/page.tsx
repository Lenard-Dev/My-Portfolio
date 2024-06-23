
import Hero from "../components/main/hero";
import Encryption from "../components/main/Encryption";
import Footer from "../components/main/Footer";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[820px] gap-20'>
        <Hero />
        <div className="my-4 border-t border-[#7042f88b] border-[1px] backdrop-blur-1"></div>
      </div>
    </main>
  );
}
