import { motion } from "motion/react";
import { supportingCharacters } from "../../data";
import { DataSection } from "../ui/Cards";

export function SupportingTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8 max-w-5xl mx-auto pb-24"
    >
      <div className="mb-8 border-b border-[#c5a059]/30 pb-4 pt-2">
        <p className="text-[10px] tracking-widest opacity-60 uppercase mb-1">03 / Supporting</p>
        <h1 className="text-3xl font-serif tracking-tight text-[#c5a059]">조연 인물</h1>
      </div>

      <div className="space-y-10">
        {supportingCharacters.map((char) => (
          <div key={char.id} className="border border-[#c5a059]/30 flex flex-col md:flex-row bg-[#152820]/40 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c5a059]/40 -mr-[1px] -mt-[1px] hidden md:block"></div>
            
            <div className="md:w-[40%] flex flex-col border-b md:border-b-0 md:border-r border-[#c5a059]/30 bg-[#1a2e26]">
              <div className="aspect-[2/3] w-full relative flex items-center justify-center overflow-hidden border-b border-[#c5a059]/20">
                <img 
                  src={char.avatar} 
                  alt={char.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 text-4xl drop-shadow-md z-20">
                  {char.icon}
                </div>
              </div>
              <div className="p-6 bg-[#1a2e26] flex-1">
                <p className="font-serif italic text-2xl text-[#c5a059] leading-none mb-1 text-center">{char.enName}</p>
                <div className="flex justify-center items-baseline mb-6">
                  <h3 className="font-serif text-xl tracking-tight text-[#e3dac9]">{char.name}</h3>
                </div>
                
                <div className="flex justify-between text-[11px] uppercase tracking-widest opacity-80 border-t border-[#c5a059]/20 pt-4">
                  <div className="text-center flex-1 border-r border-[#c5a059]/20">
                    <span className="block text-[#c5a059] mb-1">Age</span>
                    <span>{char.age || "-"}</span>
                  </div>
                  <div className="text-center flex-1 border-r border-[#c5a059]/20">
                    <span className="block text-[#c5a059] mb-1">Height</span>
                    <span>{char.height ? `${char.height}cm` : "-"}</span>
                  </div>
                  <div className="text-center flex-1">
                    <span className="block text-[#c5a059] mb-1">MBTI</span>
                    <span>{char.mbti || "-"}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-[60%] bg-transparent flex flex-col pt-2 h-full justify-start">
              {char.sections.map((section, idx) => (
                <DataSection key={idx} subtitle={section.subtitle} items={section.items} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
