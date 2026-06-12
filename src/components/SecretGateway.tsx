import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Terminal, AlertTriangle } from 'lucide-react';

interface GatewayProps {
  onVerify: (phrase: string) => void;
}

export default function SecretGateway({ onVerify }: GatewayProps) {
  const [passphrase, setPassphrase] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passphrase.trim()) return;

    setIsSubmitting(true);
    setErrorVisible(false);

    // Simulate cyber authorization response
    setTimeout(() => {
      setIsSubmitting(false);
      onVerify(passphrase.trim());
    }, 1200);
  };

  return (
    <div id="secret-gateway-viewport" className="min-h-screen bg-[#050505] text-[#e0e0e0] flex items-center justify-center p-4 selection:bg-green-500 selection:text-black">
      {/* Background visual atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-950/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1510_1px,transparent_1px),linear-gradient(to_bottom,#0b1510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <motion.div
         initial={{ opacity: 0, y: 15 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="relative bg-black/80 border border-green-500/30 rounded p-6 md:p-8 max-w-lg w-full backdrop-blur-md shadow-[0_0_50px_-12px_rgba(34,197,94,0.15)]"
      >
        {/* Terminal Header Accessories */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-[#0a0a0a] border-b border-green-950 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
          </div>
          <div className="text-[10px] font-mono text-green-700 tracking-wider flex items-center gap-1.5 font-bold uppercase">
            <Terminal size={11} className="text-green-500" />
            NODE::SEC_INSPECTOR_V3 [ONLINE]
          </div>
        </div>

        <div className="mt-8 text-center">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="inline-flex p-3 bg-green-500/10 rounded-full border border-green-500/20 mb-4"
          >
            <ShieldCheck size={36} className="text-green-500" />
          </motion.div>
          
          <h1 className="text-xl md:text-2xl font-black tracking-widest text-green-500 uppercase">
            DarkWeb Access Gateway
          </h1>
          
          <p className="text-xs font-mono text-green-700 bg-green-950 px-2 py-0.5 mt-2 inline-block border border-green-900 uppercase font-bold tracking-wider">
            STRICT SECURITY PROTOCOLS IN EFFECT
          </p>
          
          <div className="mt-4 p-3 bg-red-500/5 border border-red-500/20 rounded-lg text-red-400 font-mono text-[11px] leading-relaxed text-left">
            <div className="flex items-start gap-2">
              <AlertTriangle size={14} className="mt-0.5 flex-shrink-0 text-red-500" />
              <span>
                <strong>Restricted simulation environment.</strong> Security awareness platform. Authorized traversal attempts are automatically audited.
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="auth-phrase" className="block text-xs font-mono text-green-700 uppercase font-bold">
              Authorization Passphrase
            </label>
            <div className="relative">
              <input
                id="auth-phrase"
                type="text"
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                autoComplete="off"
                placeholder="PROMPT:: Enter authorization phrase..."
                disabled={isSubmitting}
                className="w-full bg-black border border-green-900/60 focus:border-green-500 rounded px-4 py-3 text-sm font-mono text-green-400 focus:ring-1 focus:ring-green-500/35 focus:outline-none placeholder-green-950 transition"
              />
              <div className="absolute right-3 top-3 text-[10px] font-mono text-green-800 select-none">
                [UTF-8]
              </div>
            </div>
            <div className="flex justify-between items-center text-[10.5px] font-mono text-green-800 pt-1 font-semibold">
              <span>SIMULATION KEYWORD IN EFFECT</span>
              <span className="text-green-600 hover:text-green-400 transition cursor-help relative group">
                Hint
                <span className="hidden group-hover:block absolute bottom-5 right-0 w-52 bg-black border border-green-900 p-2 text-[10px] text-yellow-500 rounded shadow-xl z-20">
                  Did you read your operations instructions? Try phrase: THE_BELL_OPENS_THE_GATE
                </span>
              </span>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting || !passphrase.trim()}
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-black disabled:bg-[#070707] disabled:text-green-950 disabled:border-green-950 border border-green-500/20 disabled:-shadow-none shadow-[0_0_20px_rgba(34,197,94,0.15)] font-mono text-xs uppercase tracking-widest py-3 rounded cursor-pointer transition font-black flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                DETERMINING ROUTING DECRYPT...
              </span>
            ) : (
              "Authorize Endpoint Connection"
            )}
          </motion.button>
        </form>

        <div className="mt-8 pt-4 border-t border-green-950 flex items-center justify-between text-[10px] font-mono text-green-800 font-bold">
          <span>PORT: 3000 SSL</span>
          <span>SANDBOX STATE: DEPLOYED</span>
        </div>
      </motion.div>
    </div>
  );
}
