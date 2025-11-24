import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function SecuritySection() {
  return (
    <section className="w-full bg-[#06142A] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl max-w-[800px]">
            End-to-End Encrypted 1:1 Chat - Private, secure communication.
          </h2>
        </div>
        
        <div className="relative mx-auto max-w-5xl h-[500px] md:h-[600px] flex justify-center items-end">
           {/* Decorative lines/text for "Encrypted" - simplified for CSS */}
           <div className="absolute top-10 right-[10%] md:right-[20%] text-white text-right hidden md:block">
              <div className="flex flex-col items-end gap-2">
                 <span className="text-lg font-medium">Encrypted</span>
                 <span className="text-lg font-medium">Encrypted</span>
                 <div className="w-[1px] h-32 bg-slate-600 mt-2"></div>
              </div>
           </div>

           <div className="flex items-end justify-center gap-4 md:gap-8 relative z-10 translate-y-10 md:translate-y-20">
              {/* Left Phone (Main Chat) */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-[240px] md:w-[300px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden bg-slate-950 shadow-2xl shrink-0"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565268875034-d9ab0eccd6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBjaGF0JTIwYXBwJTIwbW9ja3VwJTIwZGFyayUyMGJsdWV8ZW58MXx8fHwxNzYzOTU2MjQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Secure Chat Interface"
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Right Phone (Map/Other) - Offset */}
              <motion.div 
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-[240px] md:w-[300px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden bg-slate-950 shadow-2xl shrink-0 hidden sm:block"
              >
                 <ImageWithFallback
                  src="https://images.unsplash.com/photo-1528033978085-52f315289665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtYXAlMjBpbnRlcmZhY2UlMjB3aGl0ZSUyMGNsZWFufGVufDF8fHx8MTc2Mzk1NjI0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Map Interface"
                  className="object-cover w-full h-full"
                />
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
