import Section1 from "@/components/Section1.jsx";
import Section2 from "@/components/Section2.jsx";
import Section3 from "@/components/Section3.jsx";
import Section4 from "@/components/Section4.jsx";
import Section5 from "@/components/Section5.jsx";

export default function Home() {
  return (
    <div className="m-0 p-0 box-border overflow-hidden select-none snap-mandatory snap-y">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
