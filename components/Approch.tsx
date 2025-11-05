import { GlareCard } from "@/components/ui/canvas-revel-effect";
import { approch } from "@/data";

export function Approch() {
  return (
    <div id="approach" className="w-full py-32 lg:mt-48 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-blue-950/30"></div>
        
        {/* Animated Orbs with Glow */}
        <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_20%,transparent)] opacity-30"></div>
        
        {/* Diagonal Light Rays */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 relative">
          {/* Floating Accent Elements */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block">
            My{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-500 animate-gradient">
                Approach
              </span>
              {/* Glowing Underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            A systematic process to bring your vision to life with{" "}
            <span className="text-purple-400 font-medium">precision</span> and{" "}
            <span className="text-blue-400 font-medium">innovation</span>
          </p>
        </div>
        
        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {approch.map((item, idx) => (
            <GlareCard
              key={idx}
              className="group/card relative flex flex-col h-[420px] p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-xl border border-white/5 hover:border-purple-500/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Enhanced Card Number Badge */}
              <div className="absolute -top-5 -left-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500">
                <span className="text-3xl font-black text-white">{idx + 1}</span>
                {/* Badge Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 blur-xl opacity-50 group-hover/card:opacity-75 transition-opacity"></div>
              </div>
              
              {/* Diagonal Accent Line */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[100px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content Container */}
              <div className="flex flex-col h-full pt-8 relative z-10">
                {/* Enhanced Header */}
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover/card:from-purple-300 group-hover/card:via-fuchsia-300 group-hover/card:to-blue-300 transition-all duration-500 leading-tight">
                  {item.header}
                </h3>
                
                {/* Enhanced Description */}
                <p className="text-gray-400 text-base leading-relaxed group-hover/card:text-gray-300 transition-colors duration-500 flex-grow">
                  {item.content}
                </p>
                
                {/* Animated Bottom Indicator */}
                <div className="mt-auto pt-8 relative">
                  {/* Progress Bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 rounded-full transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 ease-out shadow-lg shadow-purple-500/50"></div>
                  </div>
                  {/* Corner Accent */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-purple-500/0 group-hover/card:border-purple-500/50 rounded-br-lg transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Enhanced Hover Effects */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 via-fuchsia-600/0 to-blue-600/0 group-hover/card:from-purple-600/5 group-hover/card:via-fuchsia-600/5 group-hover/card:to-blue-600/5 transition-all duration-500"></div>
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 via-fuchsia-600/0 to-blue-600/0 group-hover/card:from-purple-600/20 group-hover/card:via-fuchsia-600/20 group-hover/card:to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-transparent rotate-45 blur-2xl"></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 via-transparent to-transparent rotate-45 blur-2xl"></div>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
              </div>
            </GlareCard>
          ))}
        </div>
      </div>
      
      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
}