import { motion } from "motion/react";

export function GalleryTab() {
  const safeImages = Array.from({ length: 13 }, (_, i) => `https://gbe88.uk/Ne/${i + 1}.webp`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8 max-w-5xl mx-auto pb-24"
    >
      <div className="mb-8 border-b border-[#c5a059]/30 pb-4 pt-2">
        <p className="text-[10px] tracking-widest opacity-60 uppercase mb-1">04 / Gallery</p>
        <h1 className="text-3xl font-serif tracking-tight text-[#c5a059]">수록 이미지 모음</h1>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {safeImages.map((src, index) => (
          <div key={index} className="break-inside-avoid border border-[#c5a059]/30 bg-[#152820]/40 p-4 w-full relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c5a059]/40 -mr-[1px] -mt-[1px] transition-opacity opacity-50 group-hover:opacity-100"></div>
             <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#c5a059]/40 -ml-[1px] -mb-[1px] transition-opacity opacity-50 group-hover:opacity-100"></div>
             <div className="w-full h-full flex justify-center items-center">
               <img 
                 src={src} 
                 alt={`Gallery image ${index + 1}`} 
                 loading="lazy"
                 className="shadow-xl"
               />
             </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
