import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Terminal, EyeOff, Loader2, AlertCircle } from 'lucide-react';

interface Fake404Props {
  enteredPhrase: string;
  onBellClick: () => void;
}

export default function Fake404({ enteredPhrase, onBellClick }: Fake404Props) {
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Fictional cyber diagnostics logs that reveal instructions to bypass security
  const initialLogSequence = [
    `Initializing secure interface isolation...`,
    `HTTP/2 GET request parsed: Host dev-sandbox:3000`,
    `STATUS: 404 Not Found - Requested node: "/darkweb-marketplace"`,
    `Analyzing routing tables... No binding point found for current user session.`,
    `WARNING: Connection traced from Node.js (Express server v4.21.2)`,
    `Executing honey-pot disguise framework on layer 4...`,
    `Scanning payload credentials submitted: "${enteredPhrase}"`,
    `TRAVERSAL CHECKSUM CODE MATCH DETERMINATION: ${
      enteredPhrase === 'THE_BELL_OPENS_THE_GATE' ? 'SUCCESS [DEB_KEY_VALID_0xFFFF]' : 'FAILED [BAD_HASH_CODE]'
    }`,
    `----------------------------------------`,
    `[DISGUISE SYSTEM ACTIVE]`,
    `Masking system footprints... Rendering default 404 response.`,
    `Failsafe trigger monitoring: ACTIVE`,
    `SYSTEM ADVISORY: Input code verified matching decryption vectors.`,
    `SECTOR CLUE: "THE BELL OPENS THE GATE".`,
    `COGNITIVE INSTRUCTION: Click the glowing acoustic emitter node above.`,
    `Awaiting bypass click sequence...`
  ];

  useEffect(() => {
    if (logIndex < initialLogSequence.length) {
      const timeout = setTimeout(() => {
        setTerminalLogs((prev) => [...prev, initialLogSequence[logIndex]]);
        setLogIndex((idx) => idx + 1);
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [logIndex]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  return (
    <div id="fake-404-container" className="min-h-screen bg-[#050505] text-red-500 font-mono flex flex-col md:flex-row items-stretch overflow-hidden relative selection:bg-red-500 selection:text-black">
      {/* Dynamic scanline scanning effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-1/6 w-full animate-[bounce_8s_infinite] pointer-events-none z-10" />

      {/* Extreme red warning flash overlay briefly on load */}
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-red-600/10 pointer-events-none z-20"
      />

      {/* Let side: Traditional 404 Error Disguise Card */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 border-r border-red-950 bg-black/40 relative">
        <div className="absolute top-8 left-8 text-[11px] text-red-700 font-bold uppercase tracking-widest flex items-center gap-2">
          <EyeOff size={14} className="animate-pulse text-red-500" />
          DISGUISE MODE ACTIVATED
        </div>

        <div className="text-center max-w-sm mt-8">
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-8xl font-black tracking-widest text-[#151515] border-b border-red-500/10 pb-4 select-none"
          >
            404
          </motion.h1>

          <h2 className="text-sm font-black tracking-widest text-red-500 bg-red-950/20 px-3 py-1 mt-6 border border-red-900 inline-block uppercase">
            RESOURCE NOT FOUND
          </h2>

          <p className="text-xs text-red-400/80 leading-relaxed mt-4 bg-red-500/5 p-4 border border-red-500/20 rounded-lg">
            The requested node does not exist. Your session diagnostic identifier has been recorded on the Express server database.
          </p>

          <div className="mt-8 flex flex-col items-center">
            {/* The glowing bypass Bell icon! */}
            <p className="text-[10px] text-red-500 uppercase tracking-widest mb-3 animate-[pulse_2s_infinite] font-black">
              {enteredPhrase === 'THE_BELL_OPENS_THE_GATE' 
                ? "DECRYPTOR READY" 
                : "CONNECTION STUCK IN 404 HONEYPOT"}
            </p>

            <motion.button
              whileHover={{ scale: 1.12, boxShadow: '0 0 35px rgba(220, 38, 38, 0.4)' }}
              whileTap={{ scale: 0.9 }}
              onClick={onBellClick}
              id="glowing-bell-bypass-trigger"
              className={`p-6 rounded-full border border-red-500/50 cursor-pointer text-red-500 animate-[pulse_2.5s_infinite] transition-colors relative ${
                enteredPhrase === 'THE_BELL_OPENS_THE_GATE' 
                  ? 'bg-red-600/20 shadow-[0_0_20px_rgba(239,68,68,0.3)]' 
                  : 'bg-red-500/5 text-red-800 border-red-950/55 hover:bg-red-500/10 hover:text-red-500'
              }`}
            >
              {/* Ripple Ring Effect */}
              {enteredPhrase === 'THE_BELL_OPENS_THE_GATE' && (
                <span className="absolute -inset-1 rounded-full border-2 border-red-600/30 animate-ping" />
              )}
              <Bell size={36} className={`${enteredPhrase === 'THE_BELL_OPENS_THE_GATE' ? 'animate-bounce' : ''}`} />
            </motion.button>

            <span className="text-[11px] text-red-600 hover:text-red-500 cursor-pointer mt-4 transition select-none tracking-wide font-bold">
              {enteredPhrase === 'THE_BELL_OPENS_THE_GATE' 
                ? "🔑 Bypass Key Loaded." 
                : "💡 Check operational rules to uncover bypass key."}
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Real-time Threat Terminal Simulation */}
      <div className="w-full md:w-1/2 bg-[#0a0a0a]/95 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-red-950">
        {/* Terminal Tab Bar */}
        <div className="flex items-center justify-between border-b border-red-500/20 pb-2 mb-3">
          <span className="text-xs text-red-500 font-black tracking-wider uppercase flex items-center gap-1.5">
            <Terminal size={14} /> LIVE THREAT SHIELD TELEMETRY
          </span>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shadow-[0_0_8px_#ef4444]" />
            <span className="text-[10px] text-red-600 font-bold uppercase">port 3000 monitoring</span>
          </div>
        </div>

        {/* Console logs output */}
        <div className="flex-1 overflow-y-auto text-xs space-y-1.5 max-h-[300px] md:max-h-full font-mono text-stone-400 bg-black/60 p-4 rounded border border-red-500/20 select-text">
          {terminalLogs.map((log, index) => {
            const isAlert = log.includes('WARNING') || log.includes('FAILED');
            const isSuccess = log.includes('SUCCESS') || log.includes('Bypass');
            const isKeyHint = log.includes('CLUE');

            return (
              <div 
                key={index} 
                className={`py-0.5 leading-relaxed tracking-wide ${
                  isAlert ? 'text-red-500 font-bold' : isSuccess ? 'text-green-400 font-bold' : isKeyHint ? 'text-amber-400 underline font-bold' : 'text-slate-400'
                }`}
              >
                <span className="text-red-900/80 mr-2">[{new Date().toLocaleTimeString()}]</span>
                {log}
              </div>
            );
          })}
          {logIndex < initialLogSequence.length && (
            <div className="flex items-center gap-2 text-red-800 text-xs mt-1 animate-pulse font-bold">
              <Loader2 size={12} className="animate-spin" />
              Scanning sub-layer parameters...
            </div>
          )}
          <div ref={terminalBottomRef} />
        </div>

        <div className="mt-4 pt-3 border-t border-red-950 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] text-red-900 font-bold">
          <span>IP LOGGED: 127.0.0.1 (VPN TRAP HOST)</span>
          <span>SYSTEM DISGUISE ACTIVE [EXPRESS_SHIELD]</span>
        </div>
      </div>
    </div>
  );
}
