import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import QuickLinks from "@/components/QuickLinks";
import YearNavigation from "@/components/YearNavigation";
import YearSection from "@/components/YearSection";
import HonorsSection from "@/components/HonorsSection";
import Footer from "@/components/Footer";
import { y20Data } from "@/data/y20";
import { y21Data } from "@/data/y21";
import { y22Data } from "@/data/y22";
import { y23Data } from "@/data/y23";
import { y24Data } from "@/data/y24";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Header />
      <QuickLinks />
      <YearNavigation />
      <main className="max-w-7xl mx-auto py-8 px-4 flex-1 w-full">
        <YearSection yearData={y20Data} />
        <YearSection yearData={y21Data} />
        <YearSection yearData={y22Data} />
        <YearSection yearData={y23Data} />
        <YearSection yearData={y24Data} />
        <HonorsSection />
      </main>
      <Footer />
    </div>
  );
}
