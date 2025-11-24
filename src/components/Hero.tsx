import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full bg-[#06142A] py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4 text-center lg:text-left"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Stay connected. Stay safe.
              </h1>
              <p className="max-w-[600px] text-slate-300 md:text-xl mx-auto lg:mx-0">
                End-to-End Encrypted 1:1 Chat - Private, secure communication.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-lg rounded-md">
                Get the app now
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto lg:mx-0 flex justify-center lg:justify-end relative"
          >
             <div className="relative w-[280px] md:w-[320px] lg:w-[350px] aspect-[9/19] rounded-[3rem] border-[8px] border-slate-800 overflow-hidden bg-slate-950 shadow-2xl">
                {/* Status Bar Simulation */}
                <div className="absolute top-0 w-full h-6 bg-slate-900 z-10 flex justify-between px-4 items-center text-[10px] text-white">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                        <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                    </div>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565268875034-d9ab0eccd6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBjaGF0JTIwYXBwJTIwbW9ja3VwJTIwZGFyayUyMGJsdWV8ZW58MXx8fHwxNzYzOTU2MjQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="App Screenshot"
                  className="object-cover w-full h-full"
                />
             </div>
             {/* Second phone behind/offset */}
             <div className="absolute -right-12 top-12 w-[280px] md:w-[320px] lg:w-[350px] aspect-[9/19] rounded-[3rem] border-[8px] border-slate-800 overflow-hidden bg-slate-950 shadow-xl -z-10 hidden md:block opacity-60">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1528033978085-52f315289665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtYXAlMjBpbnRlcmZhY2UlMjB3aGl0ZSUyMGNsZWFufGVufDF8fHx8MTc2Mzk1NjI0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="App Screenshot 2"
                  className="object-cover w-full h-full opacity-50"
                />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
