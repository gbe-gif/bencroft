import { motion } from "motion/react";
import { useState } from "react";
import { HelpCircle } from "lucide-react";

export function BonusGalleryTab() {
  const baseImages = Array.from({ length: 12 }, (_, i) => `https://gbe88.uk/1/Ne/s${i + 1}.webp`);
  const allImages = [...baseImages, "https://gbe88.uk/1/Ne/c.webp"];

  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleReveal = (index: number) => {
    setRevealed(prev => ({ ...prev, [index]: true }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8 max-w-5xl mx-auto pb-24"
    >
      <div className="mb-8 border-b border-[#c5a059]/30 pb-4 pt-2">
        <p className="text-[10px] tracking-widest opacity-60 uppercase mb-1">06 / Bonus</p>
        <h1 className="text-3xl font-serif tracking-tight text-[#c5a059]">미수록 이미지 (보너스)</h1>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {allImages.map((src, index) => {
          const isProtected = index >= 6; // s7 is index 6
          const isRevealed = revealed[index];

          return (
            <div key={index} className="break-inside-avoid border border-[#c5a059]/30 bg-[#152820]/40 p-4 w-full relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c5a059]/40 -mr-[1px] -mt-[1px] transition-opacity opacity-50 group-hover:opacity-100 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#c5a059]/40 -ml-[1px] -mb-[1px] transition-opacity opacity-50 group-hover:opacity-100 pointer-events-none"></div>
               <div className="w-full h-full flex justify-center items-center min-h-[200px]">
                 {isProtected && !isRevealed ? (
                   <button 
                     onClick={() => toggleReveal(index)}
                     className="w-full h-full flex flex-col items-center justify-center py-16 hover:bg-[#c5a059]/10 transition-colors cursor-pointer"
                   >
                     <HelpCircle className="w-16 h-16 text-[#c5a059] opacity-60 mb-4" />
                     <span className="text-sm text-[#e3dac9] opacity-70">클릭하여 이미지 열람</span>
                   </button>
                 ) : (
                   <img 
                     src={src} 
                     alt={`Bonus Image ${index + 1}`} 
                     loading="lazy"
                     className="shadow-xl w-full h-auto object-contain"
                   />
                 )}
               </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
