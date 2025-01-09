import { GlareCard } from "@/components/ui/canvas-revel-effect";
import { approch } from "@/data";

export function Approch() {
  return (
    <div className="w-full py-16 lg:mt-48">
      <h1 className="heading text-white">
        My <span className="text-purple">approch</span>
      </h1>
    <div className="flex flex-wrap gap-12 bottom-7 my-20 rounded-lg shadow-2xl items-center justify-center lg:ml-20 sm:pl-16">
     
      {approch.map((item, idx) => (
        
         <GlareCard
          key={idx}
          className="flex flex-col items-center justify-center p-6 rounded-lg bg-opacity-80 backdrop-blur-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out "
        >
          <h3 className="text-2xl font-bold items-center text-blue-500 mb-4 uppercase tracking-wide">
            {item.header}
          </h3>
          <p className="text-sm text-gray-300 font-light text-center">
            {item.content}
          </p>
        </GlareCard>
        
      ))}
    </div>
    </div>
  );
}
