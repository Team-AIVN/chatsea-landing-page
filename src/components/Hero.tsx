import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full bg-[#06142A] min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
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
              <Button className="bg-black hover:bg-slate-900 text-white h-14 px-6 rounded-xl flex items-center gap-3 transition-transform active:scale-95">
                <svg viewBox="0 0 384 512" fill="currentColor" className="h-8 w-8">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium opacity-80">Download on the</span>
                  <span className="text-xl font-bold">App Store</span>
                </div>
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
