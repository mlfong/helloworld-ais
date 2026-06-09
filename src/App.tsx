/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 sm:p-12 selection:bg-neutral-800 selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl flex flex-col items-center"
      >
        <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] shadow-2xl p-16 sm:p-24 w-full flex flex-col items-center justify-center relative overflow-hidden">
          {/* Subtle background gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent mb-8" />
          
          <h1 className="text-5xl sm:text-7xl font-display font-medium tracking-tighter text-neutral-100 text-center leading-tight">
            Hello, World.
          </h1>
          
          <p className="mt-6 text-neutral-400 font-sans tracking-[0.2em] text-xs uppercase text-center">
            Welcome to the beginning
          </p>
          
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent mt-8" />
        </div>
      </motion.div>
    </main>
  );
}
