import { useState } from "react";
import { Map, Users, Settings } from "lucide-react";
import { WorldbuildingTab } from "./components/tabs/WorldbuildingTab";
import { CharactersTab } from "./components/tabs/CharactersTab";
import { SupportingTab } from "./components/tabs/SupportingTab";

type Tab = "world" | "chars" | "supporting";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("world");

  const renderTab = () => {
    switch (activeTab) {
      case "world":
        return <WorldbuildingTab />;
      case "chars":
        return <CharactersTab />;
      case "supporting":
        return <SupportingTab />;
      default:
        return <WorldbuildingTab />;
    }
  };

  return (
    <div className="min-h-screen relative font-sans bg-[#0d1a15] text-[#e3dac9] overflow-x-hidden flex flex-col">
      {/* Header Section from Editorial Aesthetic */}
      <header className="w-full border-b border-[#c5a059]/30 py-4 px-6 md:px-8 flex justify-between items-center shrink-0">
        <div className="flex flex-col">
          <h1 className="font-serif text-xl md:text-3xl tracking-tight text-[#c5a059]">BANCROFT UNIVERSITY</h1>
          <p className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase opacity-70 mt-1">Veritas et Innovatio • Est. 1768</p>
        </div>
        <div className="text-right border-l border-[#c5a059]/30 pl-4 md:pl-6 hidden sm:block">
          <span className="block text-[10px] md:text-xs font-bold">LOCATION</span>
          <span className="block text-xs md:text-sm opacity-80 font-serif italic text-[#c5a059]">Boston, Massachusetts</span>
        </div>
      </header>

      {/* Content Area */}
      <main className="w-full flex-1 overflow-y-auto pb-24">
        {renderTab()}
      </main>

      {/* Sticky Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 border-t border-[#c5a059]/40 bg-[#0a1612] flex z-50">
        <div className="w-full mx-auto grid grid-cols-3">
          <button
            onClick={() => setActiveTab("world")}
            className={`flex flex-col items-center justify-center border-r border-[#c5a059]/20 transition-colors ${
              activeTab === "world" ? "bg-[#152820]/40 text-[#c5a059]" : "text-[#e3dac9]/60 hover:bg-[#152820]/20 hover:text-[#c5a059]"
            }`}
          >
            <span className="text-[10px] tracking-widest uppercase mb-1 flex items-center gap-1 opacity-80">
              <Map className="w-3 h-3" /> 01
            </span>
            <span className="font-serif text-base md:text-lg">세계관</span>
          </button>
          
          <button
            onClick={() => setActiveTab("chars")}
            className={`flex flex-col items-center justify-center border-r border-[#c5a059]/20 transition-colors ${
              activeTab === "chars" ? "bg-[#152820]/40 text-[#c5a059]" : "text-[#e3dac9]/60 hover:bg-[#152820]/20 hover:text-[#c5a059]"
            }`}
          >
            <span className="text-[10px] tracking-widest uppercase mb-1 flex items-center gap-1 opacity-80">
              <Users className="w-3 h-3" /> 02
            </span>
            <span className="font-serif text-base md:text-lg">캐릭터</span>
          </button>
          
          <button
            onClick={() => setActiveTab("supporting")}
            className={`flex flex-col items-center justify-center transition-colors ${
              activeTab === "supporting" ? "bg-[#152820]/40 text-[#c5a059]" : "text-[#e3dac9]/60 hover:bg-[#152820]/20 hover:text-[#c5a059]"
            }`}
          >
            <span className="text-[10px] tracking-widest uppercase mb-1 flex items-center gap-1 opacity-80">
              <Users className="w-3 h-3" /> 03
            </span>
            <span className="font-serif text-base md:text-lg">조연</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

