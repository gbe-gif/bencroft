import { motion } from "motion/react";
import { mainCharacter } from "../../data";
import { SectionCard, SectionCardHeader, DataSection } from "../ui/Cards";

export function CharactersTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8 max-w-5xl mx-auto"
    >
      <div className="mb-8 border-b border-[#c5a059]/30 pb-4 pt-2">
        <p className="text-[10px] tracking-widest opacity-60 uppercase mb-1">02 / Profiles</p>
        <h1 className="text-3xl font-serif tracking-tight text-[#c5a059]">캐릭터</h1>
      </div>

      {/* Main Character */}
      <div className="mb-12">
        <h2 className="text-[10px] font-bold tracking-widest uppercase mb-4 opacity-70 text-[#c5a059]">Main Profile</h2>
        
        <div id={mainCharacter.id} className="border border-[#c5a059]/30 flex flex-col md:flex-row bg-[#152820]/40 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c5a059]/40 -mr-[1px] -mt-[1px] hidden md:block"></div>
          
          <div className="md:w-[40%] flex flex-col border-b md:border-b-0 md:border-r border-[#c5a059]/30 bg-[#1a2e26]">
            <div className="aspect-[2/3] w-full relative flex items-center justify-center overflow-hidden border-b border-[#c5a059]/20 bg-[#152820]">
              <img 
                src={mainCharacter.avatar} 
                alt={mainCharacter.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[#1a2e26]">
              <p className="font-serif italic text-3xl text-[#c5a059] leading-none mb-1 text-center">{mainCharacter.enName}</p>
              <div className="flex justify-center items-center gap-3 mb-6">
                <h3 className="font-serif text-2xl text-[#c5a059]">{mainCharacter.name}</h3>
              </div>
              
              <p className="text-[11px] leading-relaxed opacity-80 text-[#e3dac9] text-center mb-6">
                컴퓨터공학과 4학년 / 머신러닝 전공<br/>
                본가: 버지니아 주 맥린
              </p>
              
              <div className="flex justify-between text-[11px] uppercase tracking-widest opacity-80 border-t border-[#c5a059]/20 pt-4 mb-2">
                <div className="text-center flex-1 border-r border-[#c5a059]/20">
                  <span className="block text-[#c5a059] mb-1">Age</span>
                  <span>{mainCharacter.age || "-"}</span>
                </div>
                <div className="text-center flex-1 border-r border-[#c5a059]/20">
                  <span className="block text-[#c5a059] mb-1">Height</span>
                  <span>194cm</span>
                </div>
                <div className="text-center flex-1">
                  <span className="block text-[#c5a059] mb-1">MBTI</span>
                  <span>ISTP</span>
                </div>
              </div>
              
              <div className="hidden md:block mt-6 pt-6 border-t border-[#c5a059]/20">
                {mainCharacter.sections
                  .filter(s => s.subtitle === "[TMI]")
                  .map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-[10px] tracking-widest uppercase text-[#c5a059] mb-3 opacity-80 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#c5a059] inline-block mr-2 rounded-full opacity-60" />
                      {section.subtitle}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex text-[12px] leading-relaxed opacity-90 text-[#e3dac9]">
                          <span className="mr-2 text-[#c5a059] shrink-0">-</span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-[60%] bg-transparent flex flex-col pt-2">
            {mainCharacter.sections.map((section, idx) => (
              <div key={idx} className={section.subtitle === "[TMI]" ? "block md:hidden" : "block"}>
                <DataSection subtitle={section.subtitle} items={section.items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
