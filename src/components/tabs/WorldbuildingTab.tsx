import { motion } from "motion/react";
import { worldbuildingData } from "../../data";
import { SectionCard, SectionCardHeader, DataSection } from "../ui/Cards";

export function WorldbuildingTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8 max-w-5xl mx-auto"
    >
      <div className="mb-8 border-b border-[#c5a059]/30 pb-4 pt-2">
        <p className="text-[10px] tracking-widest opacity-60 uppercase mb-1">01 / Introduction</p>
        <h1 className="text-3xl font-serif tracking-tight text-[#c5a059]">세계관</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {worldbuildingData.map((data) => (
          <SectionCard key={data.id} id={data.id}>
            <SectionCardHeader title={data.title} />
            <div className="bg-[#152820]/10 border-t border-[#c5a059]/10">
              {data.sections.map((section, idx) => (
                <DataSection key={idx} subtitle={section.subtitle} items={section.items} />
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
    </motion.div>
  );
}
