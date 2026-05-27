import { ReactNode } from "react";

export function SectionCard({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <div 
      id={id}
      className="border border-[#c5a059]/30 relative bg-[#152820]/40 overflow-hidden mb-6"
    >
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c5a059]/40 w-16 h-16 -mr-[1px] -mt-[1px]"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#c5a059]/40 w-16 h-16 -ml-[1px] -mb-[1px]"></div>
      {children}
    </div>
  );
}

export function SectionCardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="p-5 md:p-6 pb-2 md:pb-2 border-b border-[#c5a059]/10 bg-[#152820]/20">
      <h2 className="font-serif text-xl text-[#c5a059]">{title}</h2>
      {subtitle && <p className="text-[#c5a059] opacity-80 mt-1 text-[10px] tracking-widest uppercase">{subtitle}</p>}
    </div>
  );
}

export function DataSection({ subtitle, items }: { subtitle: string; items: string[] }) {
  return (
    <div className="mb-6 last:mb-0 p-5 pt-4">
      <h3 className="text-[10px] tracking-widest uppercase text-[#c5a059] mb-3 opacity-80">
        {subtitle}
      </h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex text-[13px] leading-relaxed opacity-90 text-[#e3dac9]">
            <span className="mr-2 text-[#c5a059] shrink-0">-</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
