import { motion } from "motion/react";
import { useState } from "react";
import { Lock, Unlock } from "lucide-react";

export function SecretGalleryTab() {
  const unsafeImages = Array.from({ length: 9 }, (_, i) => `https://gbe88.uk/Ne/${i + 14}.webp`);

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === "3951042D") {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
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
        <p className="text-[10px] tracking-widest opacity-60 uppercase mb-1">05 / Secret</p>
        <h1 className="text-3xl font-serif tracking-tight text-[#c5a059]">시크릿 갤러리</h1>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-12 mb-12">
        {!isUnlocked ? (
          <div className="border border-[#c5a059]/30 bg-[#152820]/40 p-8 max-w-md w-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#c5a059]/40 -mr-[1px] -mt-[1px]"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#c5a059]/40 -ml-[1px] -mb-[1px]"></div>
            
            <Lock className="w-8 h-8 text-[#c5a059] mx-auto mb-4 opacity-80" />
            <h2 className="text-xl font-serif text-[#c5a059] mb-2 tracking-tight">Access Restricted</h2>
            <p className="text-[12px] text-[#e3dac9] opacity-70 mb-6 leading-relaxed">
              언세이프의 상세 정보에 표기된 비밀번호를 입력해주세요.
            </p>
            
            <form onSubmit={handleUnlock} className="flex flex-col gap-3">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className="bg-[#0d1a15] border border-[#c5a059]/40 focus:border-[#c5a059] outline-none text-center text-[#e3dac9] p-3 text-sm tracking-[0.2em] transition-colors uppercase placeholder:normal-case placeholder:tracking-normal w-full"
              />
              {error && <p className="text-red-400 text-[11px]">{error}</p>}
              <button 
                type="submit"
                className="bg-[#c5a059]/10 hover:bg-[#c5a059]/20 border border-[#c5a059]/50 text-[#c5a059] py-3 text-xs tracking-widest uppercase font-bold transition-colors w-full mt-2"
              >
                Unlock
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {unsafeImages.map((src, index) => (
                <div key={index} className="break-inside-avoid border border-[#c5a059]/30 bg-[#152820]/40 p-4 w-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c5a059]/40 -mr-[1px] -mt-[1px] transition-opacity opacity-50 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#c5a059]/40 -ml-[1px] -mb-[1px] transition-opacity opacity-50 group-hover:opacity-100"></div>
                  <div className="w-full h-full flex justify-center items-center">
                    <img 
                      src={src} 
                      alt={`Unsafe Gallery image ${index + 14}`} 
                      loading="lazy"
                      className="shadow-xl w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
