"use client";

import React from "react";
import { X } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-2xl bg-[#0b091a] border border-violet-500/30 rounded-2xl shadow-2xl p-6 text-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-violet-500/20">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-violet-400 animate-pulse" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 block">
                Infocreon Internship
              </span>
              <h2 className="text-base font-semibold text-white tracking-wide">
                Product & Service Profitability Portfolio
              </h2>
            </div>
          </div>
          <button
            
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg border border-slate-800 hover:bg-slate-900 transition"
            title="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mandatory Phase 2 Architect & Developer Signature */}
        <div className="mt-4 p-3.5 rounded-xl bg-[#060510] border border-violet-500/30 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase">Architect / Developer</span>
            <span className="text-white font-bold">Shithin P S</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase">PoC ID & GitHub</span>
            <span className="text-violet-400 font-bold">POC-27 (@shithinps)</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase">Program & Batch</span>
            <span className="text-emerald-400 font-semibold">Infocreon Internship (Batch 8)</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase">Engineering Stack</span>
            <span className="text-slate-200">Next.js, FastAPI, Tailwind CSS, Recharts</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-4 space-y-4 text-xs text-slate-300 leading-relaxed max-h-[50hi] overflow-y-auto pr-2">
          <div>
            <h3 className="text-violet-400 font-mono uppercase tracking-wider text-[11px] mb-1">
              01. Executive Purpose & Margin Intelligence
            </h3>
            <p>
              Identifies high-growth star offerings, high-margin cash generators, and margin-draining contracts across enterprise product and service lines. Synthesizes gross bookings, direct COGS, and return/rework SLA leakage to determine pure Net Contribution Margins and hourly delivery yields.
            </p>
          </div>

          <div>
            <h3 className="text-violet-400 font-mono uppercase tracking-wider text-[11px] mb-2">
              02. Strategic Quadrant Decision Protocols
            </h3>
            <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
              <div className="p-2.5 rounded bg-[#060510] border border-emerald-500/30">
                <span className="text-emerald-400 font-bold block">Star Offering (Scale & Invest)</span>
                High YoY growth (≥ 20%) + High margin (≥ 45%). Prime candidates for accelerated delivery capacity.
              </div>
              <div className="p-2.5 rounded bg-[#060510] border border-blue-500/30">
                <span className="text-blue-400 font-bold block">Cash Generator (Protect Margin)</span>
                Stable growth (&lt; 20%) + High margin (≥ 45%). Maintain strict operational efficiency and protect margins.
              </div>
              <div className="p-2.5 rounded bg-[#060510] border border-amber-500/30">
                <span className="text-amber-400 font-bold block">Margin Trapped (Reprice / Automate)</span>
                High growth (≥ 20%) + Low margin (&lt; 45%). Requires renegotiated scope or automation tooling.
              </div>
              <div className="p-2.5 rounded bg-[#060510] border border-rose-500/30">
                <span className="text-rose-400 font-bold block">Drain Offering (Sunset / Redesign)</span>
                Low growth (&lt; 20%) + Negative/Low margin (&lt; 45%). Review for strategic phase-out or renegotiation.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-violet-500/20 flex justify-between items-center text-[10px] font-mono text-slate-500">
          <span>Developed by: Shithin P S | POC-27 | @shithinps</span>
          <span>Infocreon Internship</span>
        </div>
      </div>
    </div>
  );
}
