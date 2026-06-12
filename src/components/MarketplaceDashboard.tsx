import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Layers, 
  ShoppingBag, 
  BarChart3, 
  ShieldAlert, 
  User, 
  Settings, 
  Search, 
  Tag, 
  Globe, 
  Cpu, 
  Check, 
  Zap, 
  BookOpen, 
  Send, 
  Loader2, 
  Radio, 
  AlertTriangle,
  Lock,
  LockKeyhole,
  CheckCircle,
  HelpCircle,
  Code,
  Network
} from 'lucide-react';
import { Product, Review, SimulationStat, ServerLog, QuizQuestion } from '../types';
import { mockProducts, mockQuizQuestions } from '../productsData';

interface DashboardProps {
  onResetSession: () => void;
}

export default function MarketplaceDashboard({ onResetSession }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'categories' | 'products' | 'dashboard' | 'security' | 'profile' | 'admin'>('home');
  const [serverStats, setServerStats] = useState<SimulationStat>({
    visitors: 12540,
    attempts: 4320,
    alerts: 27,
    score: 94
  });
  const [serverLogs, setServerLogs] = useState<ServerLog[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Filtering and Searching products state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Checkout routing state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [checkoutLogs, setCheckoutLogs] = useState<string[]>([]);
  
  // Gemini advisor state
  const [geminiQuery, setGeminiQuery] = useState('');
  const [geminiResponse, setGeminiResponse] = useState('');
  const [isGeminiLoading, setIsGeminiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Welcome underlayer operative. I am 'Specter Engine' — your local server-side Gemini intelligence node. Submit defensive auditing questions, privacy scripts, or phishing drafts for educational analysis." }
  ]);

  // Quiz state
  const [quizScore, setQuizScore] = useState<number>(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

  // Sound and simulation alarms
  const [isAlertActive, setIsAlertActive] = useState(false);

  // Auto-fetch logs and telemetry from backend on interval
  useEffect(() => {
    fetchStats();
    fetchLogs();

    const statsInterval = setInterval(() => {
      fetchStats();
    }, 4500);

    return () => clearInterval(statsInterval);
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      setServerStats(data);
    } catch (e) {
      console.error("Telemetry failed to sync:", e);
    }
  };

  const fetchLogs = async () => {
    try {
      const res = await fetch('/api/logs');
      const data = await res.json();
      setServerLogs(data);
    } catch (e) {
      console.error("Hacker actions logs fail:", e);
    }
  };

  const triggerAdminAction = async (action: 'ddos' | 'exploit' | 'scanning' | 'defense') => {
    try {
      const res = await fetch('/api/logs/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      const data = await res.json();
      setServerLogs(data.logs);
      setServerStats(data.stats);

      // Flash an orange warning alert trigger on ddos or exploit
      if (action === 'ddos' || action === 'exploit') {
        setIsAlertActive(true);
        setTimeout(() => setIsAlertActive(false), 3000);
      }
    } catch (e) {
      console.error("Post threat action error:", e);
    }
  };

  const handleGeminiAdvisorSub = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!geminiQuery.trim() || isGeminiLoading) return;

    const userMsg = geminiQuery.trim();
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setGeminiQuery('');
    setIsGeminiLoading(true);

    try {
      const response = await fetch('/api/gemini/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMsg })
      });
      const data = await response.json();
      if (data.error) {
        setChatHistory(prev => [...prev, { role: 'model', text: `ERROR: ${data.error}` }]);
      } else {
        setChatHistory(prev => [...prev, { role: 'model', text: data.text }]);
      }
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'model', text: "Node communication error. Ensure process.env.GEMINI_API_KEY is configured." }]);
    } finally {
      setIsGeminiLoading(false);
    }
  };

  // Simulating the PGP encrypt escrow process
  const startCheckoutSimulation = (product: Product) => {
    setIsCheckingOut(true);
    setCheckoutStep(0);
    setCheckoutLogs([]);

    const steps = [
      `Initializing simulation container for routing [${product.name}]...`,
      `Pulling dynamic cryptographic payload on port 3000... success.`,
      `Stage 1: Compiling recipient public key keyrings... PGP KEY NOT FOUND.`,
      `Stage 2: Injecting high-entropy mock zero-knowledge parameters to protect client vector...`,
      `Stage 3: Depositing $${product.price.toLocaleString()} in virtual BTC/XMR mult-sig escrow wallet logs...`,
      `Stage 4: Multiplexing delivery parameters through Tor onion circuits Node.1 -> Node.2 -> Node.3`,
      `Stage 5: Simulation complete! Order generated! No actual money was transacted.`
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setCheckoutLogs(prev => [...prev, steps[currentStep]]);
        setCheckoutStep(currentStep);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
  };

  // Cybersecurity awareness trivia evaluation
  const handleAnswerSelect = (optionIdx: number) => {
    if (quizSubmitted) return;
    const updated = [...selectedAnswers];
    updated[currentQuizIndex] = optionIdx;
    setSelectedAnswers(updated);
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    mockQuizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });
    setQuizScore(correctCount);

    const badges = [];
    if (correctCount === mockQuizQuestions.length) {
      badges.push("🏆 Ultimate Awareness Master");
    } else if (correctCount > 0) {
      badges.push("🛡️ Cyber Shield Initiate");
    }
    setEarnedBadges(badges);
  };

  const resetQuiz = () => {
    setSelectedAnswers([]);
    setQuizSubmitted(false);
    setQuizScore(0);
    setCurrentQuizIndex(0);
  };

  // Simple category lookup
  const categoriesList = [
    { id: 'all', title: 'All Resources', desc: 'Browse the entire offline simulation database.' },
    { id: 'technology', title: 'Hardware Technology', desc: 'Simulate experimental gadgets and air-gap blockers.' },
    { id: 'vehicles', title: 'Concept Vehicles', desc: 'Explore cyber drone autopilot firmware structures.' },
    { id: 'household', title: 'Smart Home/Household', desc: 'Inspect biometric locks and smart automation diagnostics.' },
    { id: 'digital', title: 'Digital awareness', desc: 'Interactive OS suites and cryptographic toolkits.' },
    { id: 'restricted', title: 'Restricted Simulation Area', desc: 'Simulate forbidden sector warning nodes.' }
  ];

  const filteredProducts = mockProducts.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ? true : item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="marketplace-viewport-container" className="min-h-screen bg-[#030308] text-slate-200 font-sans relative selection:bg-emerald-500 selection:text-black">
      {/* Dynamic alert backdrop flasher */}
      <AnimatePresence>
        {isAlertActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-red-600 pointer-events-none z-30"
          />
        )}
      </AnimatePresence>

      {/* Cyber ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-rose-500 rounded-full blur-3xl" />
      </div>

      {/* Core Grid Header */}
      <header className="h-16 border-b border-green-500/30 bg-black/80 sticky top-0 z-40 flex items-center justify-between px-6 md:px-8 backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
          <div>
            <h1 className="text-lg md:text-xl font-black tracking-widest text-green-500 uppercase flex items-center gap-2">
              DarkWeb <span className="text-[9px] font-mono text-green-400 bg-green-950 px-2 py-0.5 border border-green-900 font-bold uppercase tracking-wider">SIMULATION_MODE</span>
            </h1>
          </div>
        </div>

        {/* Global Warning Text for Safety */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase font-mono text-yellow-500 bg-yellow-950/20 px-3 py-1 border border-yellow-900/35 rounded">
          <AlertTriangle size={12} className="animate-pulse" />
          <span>Educational Simulator. Fictional assets only.</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right hidden sm:block">
            <p className="text-[9px] font-mono text-green-700 leading-none font-bold uppercase">IDENTITY_MASKED</p>
            <p className="text-xs font-mono text-green-500 font-bold">USER_4492-X</p>
          </div>
          <div className="w-9 h-9 border border-green-500/30 flex items-center justify-center bg-green-500/10">
            <User size={16} className="text-green-500" />
          </div>
          <button
            onClick={onResetSession}
            className="text-[10px] font-mono font-black uppercase px-3 py-1.5 bg-red-950/40 hover:bg-red-900 border border-red-900/30 text-red-400 transition cursor-pointer"
          >
            Lock
          </button>
        </div>
      </header>

      {/* Main Layout Container */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Navigation Sidebar Drawer Panel */}
          <aside className="lg:col-span-3 bg-black/40 border-r border-green-950 p-4 space-y-6 flex flex-col min-h-[calc(100vh-4rem)]">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 font-black">
                Simulation Console Nodes
              </p>

              <nav className="flex flex-row overflow-x-auto lg:flex-col gap-1 pr-2 lg:pr-0 font-mono text-xs max-w-full">
                <button
                  onClick={() => { setActiveTab('home'); setSelectedProduct(null); }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeTab === 'home' 
                      ? 'bg-green-500/10 text-green-400 border-l-2 border-green-500 font-bold' 
                      : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <Home size={13} className={activeTab === 'home' ? 'text-green-400' : 'text-gray-600'} />
                  <span>01. Home_Directory</span>
                </button>

                <button
                  onClick={() => { setActiveTab('categories'); setSelectedProduct(null); }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeTab === 'categories' 
                      ? 'bg-green-500/10 text-green-400 border-l-2 border-green-500 font-bold' 
                      : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <Layers size={13} className={activeTab === 'categories' ? 'text-green-400' : 'text-gray-600'} />
                  <span>02. Virtual_Sectors</span>
                </button>

                <button
                  onClick={() => { setActiveTab('products'); setSelectedProduct(null); }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeTab === 'products' 
                      ? 'bg-green-500/10 text-green-400 border-l-2 border-green-500 font-bold' 
                      : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <ShoppingBag size={13} className={activeTab === 'products' ? 'text-green-400' : 'text-gray-600'} />
                  <span>03. Products_Board</span>
                </button>

                <button
                  onClick={() => { setActiveTab('dashboard'); setSelectedProduct(null); }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeTab === 'dashboard' 
                      ? 'bg-green-500/10 text-green-400 border-l-2 border-green-500 font-bold' 
                      : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <BarChart3 size={13} className={activeTab === 'dashboard' ? 'text-green-400' : 'text-gray-600'} />
                  <span>04. Telemetry_Charts</span>
                </button>

                <button
                  onClick={() => { setActiveTab('security'); setSelectedProduct(null); }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeTab === 'security' 
                      ? 'bg-green-500/10 text-green-400 border-l-2 border-green-500 font-bold' 
                      : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <BookOpen size={13} className={activeTab === 'security' ? 'text-green-400' : 'text-gray-600'} />
                  <span>05. AI_Security_Advisor</span>
                </button>

                <button
                  onClick={() => { setActiveTab('profile'); setSelectedProduct(null); }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeTab === 'profile' 
                      ? 'bg-green-500/10 text-green-400 border-l-2 border-green-500 font-bold' 
                      : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <User size={13} className={activeTab === 'profile' ? 'text-green-400' : 'text-gray-600'} />
                  <span>06. Operator_Quiz</span>
                </button>

                <button
                  onClick={() => { setActiveTab('admin'); setSelectedProduct(null); }}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeTab === 'admin' 
                      ? 'bg-green-500/10 text-green-400 border-l-2 border-green-500 font-bold' 
                      : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <Settings size={13} className={activeTab === 'admin' ? 'text-green-400' : 'text-gray-600'} />
                  <span>07. Admin_Demo_Panel</span>
                </button>
              </nav>
            </div>

            {/* Network Latency Graph style from Design */}
            <div className="mt-auto p-4 bg-red-500/5 border border-red-500/20 rounded font-mono">
              <p className="text-[9px] font-bold text-red-500 uppercase tracking-widest">Network Latency Status</p>
              <div className="flex items-end space-x-1.5 h-8 mt-2">
                <div className="w-1.5 h-4 bg-red-500/40 rounded-t"></div>
                <div className="w-1.5 h-6 bg-red-500/60 rounded-t"></div>
                <div className="w-1.5 h-3 bg-red-500/40 rounded-t"></div>
                <div className="w-1.5 h-8 bg-red-500 rounded-t animate-pulse"></div>
                <div className="w-1.5 h-5 bg-red-500/50 rounded-t"></div>
                <div className="w-1.5 h-7 bg-red-500/70 rounded-t"></div>
                <div className="w-1.5 h-2 bg-red-500/30 rounded-t"></div>
                <div className="w-1.5 h-6 bg-red-500/65 rounded-t"></div>
              </div>
              <p className="text-[10px] text-red-400 mt-2 font-black">TRACERT_ACTIVE: 89ms</p>
            </div>
          </aside>

          {/* Main Display Port */}
          <section className="lg:col-span-9 space-y-6">
            
            {/* 1. HOME TAB */}
            {activeTab === 'home' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Intro Hero with cyberpunk illustration look */}
                <div className="p-6 rounded border border-emerald-900/40 bg-gradient-to-br from-emerald-950/20 via-slate-950/40 to-indigo-950/10 relative overflow-hidden">
                  <div className="relative z-10 space-y-3">
                    <h2 className="text-2xl font-mono font-extrabold text-white uppercase tracking-tight">
                      Underground Simulation Node Active
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                      Welcome to the **DarkWeb Cybersecurity Simulation**. Operating on an architectural framework developed in React and Express, this environment allows you to study underground software categories, CAN-bus files, air-gap acoustic leakage logs, and local privacy cryptographic mechanisms in absolute safety.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                        <Cpu size={12} className="text-emerald-400" />
                        Platform: Node/Express
                      </span>
                      <button
                        onClick={() => setActiveTab('security')}
                        className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <ShieldAlert size={12} />
                        Consult AI Expert Sec Advisor
                      </button>
                    </div>
                  </div>
                </div>

                {/* Simulated Recent Incidents Dashboard Panel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div className="bg-slate-950 border border-slate-900 p-4 rounded space-y-2 relative">
                    <div className="flex items-center justify-between text-slate-400 font-mono text-xs">
                      <span>Mock Traffic Block</span>
                      <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">Telemetry</span>
                    </div>
                    <div className="text-3xl font-mono font-extrabold text-white">
                      {serverStats.visitors.toLocaleString()}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-mono">
                      Simulated proxy requests routed through layers.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-900 p-4 rounded space-y-2 relative">
                    <div className="flex items-center justify-between text-slate-400 font-mono text-xs">
                      <span>Simulated Threats Block</span>
                      <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-red-400 bg-red-950/20 border border-red-900/30 px-1.5 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                        ACTIVE
                      </div>
                    </div>
                    <div className="text-3xl font-mono font-extrabold text-red-500">
                      {serverStats.alerts}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-mono">
                      Unsanitized parameter queries currently filtered.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-900 p-4 rounded space-y-2 relative">
                    <div className="flex items-center justify-between text-slate-400 font-mono text-xs">
                      <span>Awareness Rating</span>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">Score</span>
                    </div>
                    <div className="text-3xl font-mono font-extrabold text-emerald-400">
                      {serverStats.score}%
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-mono">
                      Evaluated on sandbox quiz answers completed.
                    </p>
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className="bg-slate-950 border border-slate-900 p-4 rounded space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                    <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 flex items-center gap-2">
                      <Network size={14} className="text-emerald-400 animate-pulse" />
                      Live Network Sandbox Logs Stream
                    </span>
                    <button
                      onClick={fetchLogs}
                      className="text-[10px] font-mono text-emerald-400 hover:underline cursor-pointer"
                    >
                      Refresh Stream
                    </button>
                  </div>

                  <div className="font-mono text-xs space-y-1.5 max-h-[160px] overflow-y-auto bg-black/40 p-3 rounded border border-slate-900/50">
                    {serverLogs.map((log) => (
                      <div key={log.id} className="flex flex-col sm:flex-row justify-between sm:items-center text-slate-400 border-b border-slate-950 py-1 gap-1">
                        <div className="flex items-start sm:items-center gap-2">
                          <span className={`text-[9px] uppercase font-bold px-1.5 rounded ${
                            log.level === 'ERROR' ? 'bg-red-950 text-red-400 border border-red-900/30' :
                            log.level === 'WARN' ? 'bg-yellow-950 text-yellow-400' :
                            log.level === 'SUCCESS' ? 'bg-emerald-950 text-emerald-400' : 'bg-slate-900 text-slate-400'
                          }`}>
                            {log.level}
                          </span>
                          <span className="text-slate-300 leading-relaxed">{log.message}</span>
                        </div>
                        <div className="text-[10px] text-slate-600 self-end sm:self-auto uppercase">
                          node: {log.node || 'unknown'} • {log.timestamp}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. CATEGORIES TAB */}
            {activeTab === 'categories' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-900 pb-2">
                  <h2 className="text-xl font-mono font-extrabold text-white uppercase flex items-center gap-2">
                    <Layers size={18} className="text-emerald-400" />
                    Interactive Resource Sectors
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    Select a resource sector to view filterable simulation devices and learning assets.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoriesList.map((cat) => {
                    const isRestricted = cat.id === 'restricted';
                    return (
                      <div
                        key={cat.id}
                        className={`p-5 rounded border bg-slate-950/70 space-y-3 relative overflow-hidden transition-all duration-300 group ${
                          isRestricted 
                            ? 'border-red-950/60 shadow-[0_0_15px_-4px_rgba(220,38,38,0.1)] hover:border-red-800' 
                            : 'border-slate-900 hover:border-emerald-900/40 shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)]'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className={`text-md font-mono font-bold uppercase ${isRestricted ? 'text-red-400' : 'text-emerald-400 group-hover:text-emerald-300'}`}>
                            {cat.title}
                          </h3>
                          {isRestricted ? (
                            <LockKeyhole size={16} className="text-red-500 animate-pulse" />
                          ) : (
                            <Tag size={16} className="text-slate-600" />
                          )}
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed font-mono">
                          {cat.desc}
                        </p>

                        <div className="pt-2 flex justify-between items-center text-[11px] font-mono">
                          <span className="text-slate-600 uppercase">
                            SIMULATED MODULES: {cat.id === 'all' ? mockProducts.length : mockProducts.filter(p => p.category === cat.id).length}
                          </span>
                          
                          {isRestricted ? (
                            <button
                              onClick={() => { setSelectedCategory(cat.id); setActiveTab('products'); }}
                              className="text-red-400 hover:underline font-bold"
                            >
                              Open Restricted Sandbox
                            </button>
                          ) : (
                            <button
                              onClick={() => { setSelectedCategory(cat.id); setActiveTab('products'); }}
                              className="text-emerald-400 hover:underline font-bold"
                            >
                              Browse Sector &rarr;
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 3. PRODUCTS TAB */}
            {activeTab === 'products' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Search / Filter header controls */}
                <div className="bg-slate-950 border border-slate-900 p-4 rounded flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="relative w-full md:w-72">
                    <input
                      type="text"
                      placeholder="Search simulation index..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-[#07070f] border border-slate-800 rounded px-3 py-2 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition"
                    />
                    <Search size={14} className="absolute right-3 top-2.5 text-slate-600" />
                  </div>

                  <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
                    {categoriesList.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase border transition cursor-pointer ${
                          selectedCategory === cat.id 
                            ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400' 
                            : 'bg-[#07070f] border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {cat.id === 'all' ? 'All' : cat.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* IF RESTRICTED CATEGORY SELECTED */}
                {selectedCategory === 'restricted' ? (
                  <div className="p-8 rounded border border-red-950 bg-red-950/10 text-center space-y-4">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block p-4 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 mb-2"
                    >
                      <LockKeyhole size={36} />
                    </motion.div>
                    <h3 className="text-lg font-mono font-bold text-red-400 uppercase">
                      Restricted marketplace category simulation
                    </h3>
                    <p className="text-xs font-mono text-slate-400 max-w-xl mx-auto leading-relaxed">
                      "Restricted marketplace category simulation. This area exists only for cybersecurity awareness demonstration."
                    </p>
                    <div className="pt-4 text-xs font-mono text-red-500/80 max-w-lg mx-auto bg-black/40 p-4 border border-red-950/50 rounded text-left">
                      <strong>⚠️ Awareness Warning:</strong> Actual dark web sectors that advertise highly illegal hacking exploits, illicit commodities, and bypass tools are extremely dangerous. They frequently function as active state honey pots, exit scams, or malware distribution nodes targeting unsanitary download requests.
                    </div>
                  </div>
                ) : (
                  /* Standard Grid of Products */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProducts.map((p) => (
                      <div key={p.id} className="bg-white/5 border border-white/10 p-5 relative group flex flex-col justify-between transition hover:border-green-500/50">
                        <div className="space-y-3">
                          <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-green-500/20 text-[9px] font-mono text-green-400 border border-green-500/30 font-bold uppercase tracking-wider select-none">
                            ACTIVE_NODE
                          </div>

                          {/* Image box/holder formatted with gradient overlay */}
                          <div className="w-full h-44 bg-gradient-to-br from-green-900/10 to-black border border-green-500/10 overflow-hidden relative mb-4 flex items-center justify-center">
                            <img                     
                              src={p.imageUrl} 
                              alt={p.name} 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover opacity-40 filter brightness-90 grayscale group-hover:opacity-60 group-hover:grayscale-0 transition duration-500"
                            />
                            <div className="absolute bottom-2 left-2 bg-black border border-green-950 text-[9px] uppercase font-mono px-2 py-0.5 rounded text-green-400 font-bold">
                              {p.category}
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 border border-green-950 rounded text-[9px] font-mono text-green-500 font-bold">
                              VERIFIED: ★ {p.rating.toFixed(2)}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <h3 className="text-sm font-black tracking-wide text-white uppercase font-mono">
                              {p.name}
                            </h3>
                            <p className="text-[11px] text-gray-400 leading-relaxed font-mono h-12 overflow-hidden text-ellipsis line-clamp-2">
                              {p.description}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-white/5 flex justify-between items-center select-none">
                          <div className="font-mono">
                            <span className="text-[9px] text-gray-500 block uppercase font-bold tracking-wider">Simulated Cost</span>
                            <span className="text-lg font-mono text-green-500 font-bold tracking-tighter">${p.price.toLocaleString()}</span>
                          </div>

                          <button
                            onClick={() => setSelectedProduct(p)}
                            className="px-3 py-1.5 bg-green-600 text-black text-[10px] font-black uppercase hover:bg-green-400 transition cursor-pointer"
                          >
                            Inspect Details
                          </button>
                        </div>
                      </div>
                    ))}
                    {filteredProducts.length === 0 && (
                      <div className="col-span-full py-8 text-center text-xs font-mono text-slate-500">
                        No resources matches current search filter parameter.
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* PRODUCT DETAIL MODAL OVERLAY */}
            <AnimatePresence>
              {selectedProduct && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    className="bg-slate-950 border border-slate-900 rounded-lg max-w-2xl w-full p-6 relative shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto space-y-6"
                  >
                    {/* Header accessories */}
                    <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                      <span className="text-xs uppercase font-mono tracking-widest text-slate-500 flex items-center gap-1.5">
                        <Cpu size={14} /> INSPECTOR DECRYPT VIEW
                      </span>
                      <button
                        onClick={() => { setSelectedProduct(null); setIsCheckingOut(false); }}
                        className="text-slate-400 hover:text-white font-mono text-sm cursor-pointer border border-slate-800 rounded px-2 py-0.5 bg-slate-900"
                      >
                        [ Esc Close ]
                      </button>
                    </div>

                    {!isCheckingOut ? (
                      /* Mode A: Main Inspection details representation */
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Image display */}
                        <div className="space-y-4">
                          <div className="bg-slate-900 rounded h-56 border border-slate-950 overflow-hidden">
                            <img 
                              src={selectedProduct.imageUrl} 
                              alt={selectedProduct.name} 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover filter brightness-90 grayscale"
                            />
                          </div>
                          
                          <div className="bg-black/40 border border-slate-800 p-3 rounded font-mono text-[11px] space-y-1.5 text-slate-400">
                            <div className="flex justify-between border-b border-slate-900 pb-1">
                              <span>INDEX CODE:</span>
                              <span className="text-slate-200">{selectedProduct.id.toUpperCase()}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-900 pb-1">
                              <span>CATEGORY SEC:</span>
                              <span className="text-emerald-400 uppercase">{selectedProduct.category}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>VERIFICATION RATE:</span>
                              <span className="text-slate-200">★ {selectedProduct.rating} / 5.0</span>
                            </div>
                          </div>
                        </div>

                        {/* Text explanation and specifications */}
                        <div className="space-y-4 flex flex-col justify-between">
                          <div className="space-y-3">
                            <div>
                              <h3 className="text-md font-mono font-bold text-white uppercase">{selectedProduct.name}</h3>
                              <span className="text-[10px] font-mono text-slate-500 block uppercase">Sandbox Diagnostic Product</span>
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed font-mono">
                              {selectedProduct.details}
                            </p>

                            <div className="space-y-1.5 pt-2">
                              <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold tracking-widest">Educational Specifications:</span>
                              <ul className="text-[11px] font-mono text-slate-300 space-y-1 list-disc list-inside">
                                {selectedProduct.specs.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Interactive Buy Trigger */}
                          <div className="pt-4 border-t border-slate-900 space-y-3">
                            <div className="flex justify-between items-center font-mono">
                              <span className="text-xs text-slate-500">SIMULATED VALUE:</span>
                              <span className="text-emerald-400 font-extrabold text-lg">${selectedProduct.price.toLocaleString()}</span>
                            </div>

                            <button
                              onClick={() => startCheckoutSimulation(selectedProduct)}
                              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-black font-extrabold font-mono text-xs py-3 rounded tracking-wider uppercase transition cursor-pointer"
                            >
                              Simulate Purchase Block
                            </button>
                            <span className="block text-[8.5px] uppercase font-mono text-slate-500 text-center tracking-tighter">
                              SIMULATION ONLY • NO ACTUAL TRANSACTIONS • ABSOLUTELY FREE
                            </span>
                          </div>
                        </div>

                        {/* Customer reviews display section */}
                        <div className="col-span-full border-t border-slate-900 pt-4 space-y-3">
                          <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider font-bold">Simulated Reviews Feed ({selectedProduct.reviews.length})</h4>
                          <div className="space-y-3">
                            {selectedProduct.reviews.map((rev) => (
                              <div key={rev.id} className="p-3 bg-black/35 rounded border border-slate-900/60 font-mono text-[11px] leading-relaxed">
                                <div className="flex justify-between items-center mb-1 text-[10px]">
                                  <span className="text-emerald-400 font-bold">&lt;{rev.author}&gt;</span>
                                  <span className="text-slate-600">Rated ★{rev.rating} • {rev.date}</span>
                                </div>
                                <p className="text-slate-400 italic">"{rev.comment}"</p>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    ) : (
                      /* Mode B: Live Order Cryptographic decryption simulation walkthrough */
                      <div className="space-y-5">
                        <div className="text-center p-3 bg-emerald-950/25 border border-emerald-900/30 rounded">
                          <h3 className="text-sm font-mono text-emerald-400 font-bold uppercase tracking-wider">Simulating PGP Encrypted Escrow Order Routing...</h3>
                          <p className="text-[10px] font-mono text-slate-400">Wait as the Node Server channels your transaction anonymizers.</p>
                        </div>

                        {/* Terminal Box */}
                        <div className="bg-black/60 border border-slate-900 p-4 rounded font-mono text-xs space-y-2 max-h-[250px] overflow-y-auto">
                          {checkoutLogs.map((log, index) => (
                            <div key={index} className={`flex items-start gap-2 ${log.includes('complete') ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                              <span className="text-slate-700">[{index + 1}]</span>
                              <span>{log}</span>
                            </div>
                          ))}
                          {checkoutStep < 6 && (
                            <div className="flex items-center gap-2 text-emerald-500 font-bold text-[11px] animate-pulse">
                              <Loader2 size={12} className="animate-spin" />
                              Negotiating blockchain nodes...
                            </div>
                          )}
                        </div>

                        {/* Explanation outcome box */}
                        {checkoutStep === 6 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-slate-900 border border-emerald-900/40 rounded space-y-2 leading-relaxed"
                          >
                            <h4 className="text-xs font-mono font-bold uppercase text-emerald-400">🛡️ Educational Security Insight: How Escrows Work</h4>
                            <p className="text-[11px] font-mono text-slate-400">
                              On deepweb markets, administrators enforce Escrow systems where funds remain in marketplace storage until items arrive. While designed to prevent basic buyer fraud, in truth:
                            </p>
                            <ul className="text-[10px] font-mono list-disc list-inside text-slate-400 space-y-1">
                              <li>Operators keep full security keys, performing massive "Exit Scams" once cumulative balances peak.</li>
                              <li>Security law agencies frequently host simulated honey pots to trace key-transfers, mapping participants.</li>
                              <li>Ransomware vectors easily attach to downloads from unvetted darknet nodes.</li>
                            </ul>
                          </motion.div>
                        )}

                        <div className="flex justify-end gap-3 pt-4 border-t border-slate-900">
                          <button
                            onClick={() => { setSelectedProduct(null); setIsCheckingOut(false); }}
                            className="bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold font-mono text-xs px-4 py-2.5 rounded cursor-pointer transition uppercase"
                          >
                            Perfect, Completed [ Close ]
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 4. TELEMETRY CHARTS TAB (DASHBOARD) */}
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-900 pb-2 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-mono font-extrabold text-white uppercase flex items-center gap-2">
                      <BarChart3 size={18} className="text-emerald-400" />
                      Dynamic Telemetry Metrics
                    </h2>
                    <p className="text-xs text-slate-500 font-mono">
                      Real-time interactive monitoring of simulated access sweeps and alert statistics.
                    </p>
                  </div>
                  <button
                    onClick={fetchStats}
                    className="text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 bg-black rounded"
                  >
                    Fetch Telemetry
                  </button>
                </div>

                {/* Handcrafted Vector Cyber Diagram Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Chart A: Simulated Access Attempts Sweep */}
                  <div className="bg-slate-950 border border-slate-900 p-4 rounded space-y-3">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400 block tracking-wider">
                      Simulated Access Attempts Trend (Hourly Matrix)
                    </span>
                    <div className="h-44 bg-black/40 border border-slate-900/60 rounded flex items-end justify-between p-4 relative">
                      {/* Grid background lines */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:100%_2rem] opacity-25" />
                      
                      {/* Fake Custom rendered Bar Graphic using pure CSS */}
                      {[120, 240, 180, 310, 420, 380, serverStats.attempts % 1000].map((val, i) => {
                        const maxVal = 1000;
                        const heightPct = Math.min(100, Math.max(10, (val / maxVal) * 100));
                        return (
                          <div key={i} className="flex flex-col items-center flex-1 h-full justify-end group z-10">
                            <span className="text-[9px] font-mono text-emerald-400 font-semibold mb-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                              {val}
                            </span>
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${heightPct}%` }}
                              transition={{ duration: 0.5 }}
                              className="w-8 bg-gradient-to-t from-emerald-950 to-emerald-400 rounded-t border-t border-emerald-300/40 relative"
                            >
                              <div className="absolute inset-0 bg-emerald-400/25 animate-pulse rounded-t" />
                            </motion.div>
                            <span className="text-[10px] font-mono text-slate-600 mt-1.5 uppercase">
                              T-{6 - i}h
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[10.5px] font-mono text-slate-500 leading-relaxed text-center">
                      Hourly log attempts scanned across decentralized simulation nodes. Hover columns.
                    </p>
                  </div>

                  {/* Chart B: Live Alert Level Spikes */}
                  <div className="bg-slate-950 border border-slate-900 p-4 rounded space-y-3">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400 block tracking-wider">
                      Firewall Attack Alerts Matrix Indicator
                    </span>
                    
                    {/* SVG Line Graph representation */}
                    <div className="h-44 bg-black/40 border border-slate-900/60 rounded p-4 relative flex flex-col justify-between">
                      {/* Grid backing */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px)] bg-[size:3rem_100%] opacity-20" />
                      
                      {/* SVG line */}
                      <svg className="w-full h-full absolute inset-0 z-10 overflow-visible" preserveAspectRatio="none">
                        <motion.path
                          d={`M 0,80 L 80,42 L 160,110 L 240,30 L 320,${120 - serverStats.alerts * 1.5} L 400,${110 - serverStats.alerts * 2}`}
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                        />
                        {/* Glow filter mimicking high-end interface */}
                        <path
                          d={`M 0,80 L 80,42 L 160,110 L 240,30 L 320,${120 - serverStats.alerts * 1.5} L 400,${110 - serverStats.alerts * 2}`}
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="6"
                          className="opacity-30 blur-[2px]"
                        />
                      </svg>

                      <div className="text-[10px] font-mono text-rose-500 font-extrabold text-right z-20">
                        PEAK SPIKE VALUE Temp: {serverStats.alerts}
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 z-20 pt-24 mt-4">
                        <span>L-01 [OK]</span>
                        <span>L-02 [WARN]</span>
                        <span>L-03 [SPIKER]</span>
                        <span>L-04 [FILTERED]</span>
                      </div>
                    </div>

                    <p className="text-[10.5px] font-mono text-slate-500 leading-relaxed text-center">
                      Live indicator depicting intercepted cyber-sweeps. Deploy rate limits in the Admin Panel to reset.
                    </p>
                  </div>
                </div>

                {/* Cyber Safety Index Score representation */}
                <div className="p-5 bg-gradient-to-r from-emerald-950/20 via-slate-950 to-[#0e1713] border border-emerald-950/45 rounded space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="space-y-1 text-center sm:text-left">
                      <h3 className="font-mono text-sm uppercase text-slate-200 font-bold flex items-center gap-2">
                        <CheckCircle size={16} className="text-emerald-400" />
                        Interactive Digital Safety Score Evaluation
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400">
                        Earn reputation and increase score to ninety-nine percent by completing the Operator awareness quiz in the Profile sector.
                      </p>
                    </div>
                    <div className="text-4xl font-mono font-extrabold text-emerald-400">
                      {serverStats.score}%
                    </div>
                  </div>

                  {/* Range visual */}
                  <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full" style={{ width: `${serverStats.score}%` }} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. INTERACTIVE SECURITY CENTER COGNITIVE TAB (AI chatbot integration) */}
            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-900 pb-2">
                  <h2 className="text-xl font-mono font-extrabold text-white uppercase flex items-center gap-2">
                    <BookOpen size={18} className="text-emerald-400" />
                    AI Security Awareness Center
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    Discover digital privacy concepts, operational safety laws, and receive server-side Gemini intelligence audits.
                  </p>
                </div>

                {/* Educational Grid topics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="p-4 bg-slate-950 border border-slate-900 rounded space-y-2">
                    <h3 className="text-xs uppercase font-mono font-extrabold text-emerald-400 flex items-center gap-1.5">
                      <Lock size={13} /> 1. Operational Traps (Escrows & Coins)
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
                      Operators utilize cryptographic privacy protocols to mask transaction ledgers. This hides the lack of user protection. Major black markets inevitably complete with Exit Scams, seizing buyer escrows instantly.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-900 rounded space-y-2">
                    <h3 className="text-xs uppercase font-mono font-extrabold text-emerald-400 flex items-center gap-1.5">
                      <AlertTriangle size={13} /> 2. Cybercrime vectors (Honeypots)
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
                      Law enforcement networks globally launch simulated honey-pot nodes disguised as underground marketplaces. Interacting or sharing diagnostic credentials across these sectors immediately records real IP telemetry.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-900 rounded space-y-2">
                    <h3 className="text-xs uppercase font-mono font-extrabold text-teal-400 flex items-center gap-1.5">
                      <Globe size={13} /> 3. Data privacy (Metadata stripping)
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
                      Anonymity is fundamentally compromised by file metadata (EXIF tags, carrier records). Stripping headers from directories is more vital to privacy than Tor tunneling configuration metrics.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-900 rounded space-y-2">
                    <h3 className="text-xs uppercase font-mono font-extrabold text-teal-400 flex items-center gap-1.5">
                      <Code size={13} /> 4. Ethical hacking rules
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
                      Educational analysis requires written explicit authorization from asset owners. Scanning port bounds or testing code injection vulnerabilities without prior contracts constitutes automated trespass under computer fraud acts.
                    </p>
                  </div>
                </div>

                {/* Gemini AI Advisor Interface */}
                <div className="bg-slate-950 border border-slate-900 rounded p-4 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                    <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-300 flex items-center gap-2">
                      <Zap size={14} className="text-emerald-400 animate-pulse" />
                      Specter Security Engine - Gemini Advisor Proxy
                    </span>
                    <span className="text-[9.5px] uppercase font-mono text-slate-500">
                      Model: gemini-3.5-flash
                    </span>
                  </div>

                  {/* Chat dialog screen */}
                  <div className="h-64 overflow-y-auto bg-black/60 p-4 border border-slate-900 rounded font-mono text-xs space-y-3">
                    {chatHistory.map((chat, idx) => (
                      <div key={idx} className={`space-y-1 pb-2 border-b border-slate-950 last:border-0 ${chat.role === 'user' ? 'text-slate-300' : 'text-emerald-400 font-medium'}`}>
                        <span className="text-[10px] text-slate-500 uppercase block select-none">
                          {chat.role === 'user' ? 'operative_query@sandbox' : 'specter_ai@server_proxy'}
                        </span>
                        <div className="leading-relaxed whitespace-pre-wrap">{chat.text}</div>
                      </div>
                    ))}
                    {isGeminiLoading && (
                      <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs animate-pulse">
                        <Loader2 size={13} className="animate-spin" />
                        Decrypting AI advisor response parameters from server...
                      </div>
                    )}
                  </div>

                  {/* Mini-form targeting /api/gemini/advisor */}
                  <form onSubmit={handleGeminiAdvisorSub} className="flex gap-2">
                    <input
                      type="text"
                      value={geminiQuery}
                      onChange={(e) => setGeminiQuery(e.target.value)}
                      placeholder="Ask Specter Engine about secure coding, metadata removal, or ethical penetration boundaries..."
                      disabled={isGeminiLoading}
                      className="flex-1 bg-black border border-slate-800 rounded px-3 py-2 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition"
                    />
                    <button
                      type="submit"
                      disabled={isGeminiLoading || !geminiQuery.trim()}
                      className="bg-emerald-600 border border-emerald-500/10 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 text-black font-extrabold font-mono text-xs px-4 py-2 rounded flex items-center gap-1.5 transition cursor-pointer disabled:bg-slate-900 disabled:text-slate-600"
                    >
                      <Send size={12} />
                      Transmit
                    </button>
                  </form>
                  
                  <div className="text-[10px] font-mono text-slate-500 uppercase text-center select-none">
                    * ALL Gemini queries are proxied securely server-side. No API keys are leaked to the client browser.
                  </div>
                </div>
              </motion.div>
            )}

            {/* 6. PROFILE & INTERACTIVE TRIVIA COGNITIVE WEEK TAB */}
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-900 pb-2">
                  <h2 className="text-xl font-mono font-extrabold text-white uppercase flex items-center gap-2">
                    <User size={18} className="text-emerald-400" />
                    Agent Security profile & awareness Quiz
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    Evaluate operational cybersecurity knowledge and unlock cryptographic badges.
                  </p>
                </div>

                {/* Profile detail card */}
                <div className="bg-slate-950 border border-slate-900 p-5 rounded flex flex-col md:flex-row items-center gap-5 justify-between relative overflow-hidden">
                  <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 font-mono font-extrabold text-lg shadow-inner z-10 select-none">
                      O_PR
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <h3 className="text-md font-mono font-extrabold text-white">Guest Initiate #4321</h3>
                        <span className="text-[9px] uppercase font-mono px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-900/30 rounded font-semibold animate-pulse">
                          Active Sandbox Security Operative
                        </span>
                      </div>
                      <p className="text-xs font-mono text-slate-400">
                        IP ADDRESS TRACKED: <span className="text-slate-200">127.0.0.1 (Local host gateway monitor)</span>
                      </p>
                    </div>
                  </div>

                  {/* Accolades */}
                  <div className="flex gap-2">
                    {earnedBadges.length > 0 ? (
                      earnedBadges.map((badge, idx) => (
                        <div key={idx} className="p-2 border border-emerald-900 bg-emerald-950/20 text-emerald-400 font-mono text-[10.5px] rounded animate-bounce">
                          {badge}
                        </div>
                      ))
                    ) : (
                      <span className="text-xs font-mono text-slate-500 italic select-none">No digital badges earned yet. Complete the Quiz below.</span>
                    )}
                  </div>
                </div>

                {/* Interactive Cyber Awareness Quiz */}
                <div className="bg-slate-950 border border-slate-900 p-5 rounded space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                    <span className="text-xs uppercase font-mono tracking-widest text-slate-400 flex items-center gap-2 font-bold">
                      <HelpCircle size={14} className="text-emerald-400" />
                      Cybersecurity Awareness & Hygiene Quiz
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Question {currentQuizIndex + 1} of {mockQuizQuestions.length}
                    </span>
                  </div>

                  {!quizSubmitted ? (
                    /* Active Quiz presentation state */
                    <div className="space-y-4">
                      {/* Active Question */}
                      <p className="text-sm font-mono font-bold leading-relaxed text-slate-100">
                        {mockQuizQuestions[currentQuizIndex].question}
                      </p>

                      {/* Options Grid */}
                      <div className="space-y-2.5">
                        {mockQuizQuestions[currentQuizIndex].options.map((option, idx) => {
                          const isSelected = selectedAnswers[currentQuizIndex] === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleAnswerSelect(idx)}
                              className={`w-full text-left p-3.5 rounded text-xs font-mono leading-relaxed transition flex items-start gap-3 cursor-pointer ${
                                isSelected 
                                  ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300' 
                                  : 'bg-black/30 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              <span className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors text-[9px] font-bold ${
                                isSelected ? 'bg-emerald-500 text-black border-emerald-400' : 'border-slate-700 text-slate-600'
                              }`}>
                                {idx + 1}
                              </span>
                              <span>{option}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-slate-950 text-xs font-mono">
                        <button
                          disabled={currentQuizIndex === 0}
                          onClick={() => setCurrentQuizIndex(idx => idx - 1)}
                          className="px-4 py-2 rounded bg-[#07070f] text-slate-400 border border-slate-800 disabled:opacity-30 cursor-pointer hover:text-slate-200"
                        >
                          &larr; Prev
                        </button>

                        {currentQuizIndex === mockQuizQuestions.length - 1 ? (
                          <button
                            disabled={selectedAnswers.length < mockQuizQuestions.length}
                            onClick={submitQuiz}
                            className="px-5 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold cursor-pointer disabled:bg-slate-900 disabled:text-slate-600 disabled:border-slate-800"
                          >
                            Submit Answers Terminal &rarr;
                          </button>
                        ) : (
                          <button
                            disabled={selectedAnswers[currentQuizIndex] === undefined}
                            onClick={() => setCurrentQuizIndex(idx => idx + 1)}
                            className="px-4 py-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer"
                          >
                            Next &rarr;
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Score & Explanation View State */
                    <div className="space-y-5">
                      <div className="text-center p-4 bg-black/40 border border-slate-900 rounded space-y-2">
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">AWARENESS QUIZ RATING RESULT</p>
                        <h4 className="text-2xl font-mono font-extrabold text-[#00ff66]">
                          {quizScore} / {mockQuizQuestions.length} CORRECT
                        </h4>
                        <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                          Your overall safety awareness profile has been synchronized. Read the professional educational reviews below to harden your skills.
                        </p>
                      </div>

                      {/* Explanation loop */}
                      <div className="space-y-4 pt-3 border-t border-slate-950 font-mono text-xs">
                        {mockQuizQuestions.map((q, idx) => {
                          const userAns = selectedAnswers[idx];
                          const isCorrect = userAns === q.correctAnswer;
                          return (
                            <div key={q.id} className="p-3 bg-black/20 border border-slate-900/60 rounded space-y-2">
                              <div className="flex items-center gap-2">
                                <span className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded ${
                                  isCorrect ? 'bg-emerald-950 text-emerald-400' : 'bg-red-950 text-red-400'
                                }`}>
                                  {isCorrect ? 'Correct' : 'Incorrect'}
                                </span>
                                <span className="text-slate-300 font-semibold">{q.question}</span>
                              </div>
                              <div className="text-slate-500 leading-relaxed bg-[#06060a] p-2 rounded border border-slate-900 text-[11px]">
                                <span className="text-emerald-400 font-bold block mb-0.5 font-mono">Expert Mitigation Logic:</span>
                                {q.educationalExplanation}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex justify-end pt-3 border-t border-slate-950">
                        <button
                          onClick={resetQuiz}
                          className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-mono text-xs px-4 py-2 rounded cursor-pointer transition uppercase"
                        >
                          Recheck Awareness Parameters
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* 7. ADMIN DEMO PORT TAB */}
            {activeTab === 'admin' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-900 pb-2">
                  <h2 className="text-xl font-mono font-extrabold text-white uppercase flex items-center gap-2">
                    <Settings si={18} className="text-emerald-400" />
                    Simulation Admin Demonstration panel
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    Harness dynamic threat vectors and defense controllers to trace instant network server socket behavior.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Control interface buttons */}
                  <div className="bg-slate-950 border border-slate-900 p-5 rounded space-y-4">
                    <span className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider block border-b border-slate-900 pb-1.5">
                      Trigger Simulated Network Incidents
                    </span>

                    <p className="text-xs font-mono text-slate-400 leading-relaxed">
                      Testing server systems demands exploring active loads. Press any button to dispatch simulated queries to the Node.js Express endpoints on port 3000.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-[11px]">
                      
                      <button
                        onClick={() => triggerAdminAction('ddos')}
                        className="bg-red-950/20 hover:bg-red-950 text-red-400 border border-rose-900/40 p-3 rounded font-bold transition flex flex-col justify-between h-20 text-left hover:border-red-500 cursor-pointer"
                      >
                        <div className="flex justify-between items-center w-full">
                          <span>1. DDoS Storm</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                        </div>
                        <span className="text-[10px] font-normal text-slate-500 uppercase">Simulate high rate package loads.</span>
                      </button>

                      <button
                        onClick={() => triggerAdminAction('exploit')}
                        className="bg-yellow-950/20 hover:bg-yellow-950 text-yellow-400 border border-yellow-900/35 p-3 rounded font-bold transition flex flex-col justify-between h-20 text-left hover:border-yellow-500 cursor-pointer"
                      >
                        <div className="flex justify-between items-center w-full">
                          <span>2. Admin Exploit</span>
                          <LockKeyhole size={12} className="text-yellow-500" />
                        </div>
                        <span className="text-[10px] font-normal text-slate-500 uppercase">Simulate traversal escalation.</span>
                      </button>

                      <button
                        onClick={() => triggerAdminAction('scanning')}
                        className="bg-indigo-950/20 hover:bg-indigo-950 text-indigo-400 border border-indigo-900/35 p-3 rounded font-bold transition flex flex-col justify-between h-20 text-left hover:border-indigo-500 cursor-pointer"
                      >
                        <div className="flex justify-between items-center w-full">
                          <span>3. Gateway scan</span>
                          <Search size={12} className="text-indigo-500" />
                        </div>
                        <span className="text-[10px] font-normal text-slate-500 uppercase">Simulate route sweeps.</span>
                      </button>

                      <button
                        onClick={() => triggerAdminAction('defense')}
                        className="bg-emerald-950/30 hover:bg-emerald-950 text-emerald-400 border border-emerald-900/40 p-3 rounded font-bold transition flex flex-col justify-between h-20 text-left hover:border-emerald-500 cursor-pointer"
                      >
                        <div className="flex justify-between items-center w-full">
                          <span>4. Deploy Firewall</span>
                          <CheckCircle size={12} className="text-emerald-500" />
                        </div>
                        <span className="text-[10px] font-normal text-slate-500 uppercase">Deploy defensive rate limit scripts.</span>
                      </button>

                    </div>
                  </div>

                  {/* Informational guide */}
                  <div className="bg-slate-950 border border-slate-900 p-5 rounded space-y-4 relative flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider block border-b border-slate-900 pb-1.5">
                        Interactive Security Sandbox Architecture
                      </span>

                      <div className="space-y-2 leading-relaxed text-slate-400 font-mono text-xs">
                        <p>
                          <strong>Express Server Endpoint Rules:</strong> Under `/server.ts` controls, transactions are stored strictly in memory and mock state. Key insights:
                        </p>
                        <p>
                          • Triggering <strong>DDoS</strong> automatically prompts alert peaks.
                        </p>
                        <p>
                          • Triggering <strong>Deploy Firewall</strong> resets system indicators, lowering simulated alerts and establishing secure boundary protections dynamically.
                        </p>
                        <p>
                          • Inspect the live console logging output below to verify current server-packet triggers!
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/50 border border-slate-800 rounded font-mono text-[10.5px] text-slate-400 flex items-center gap-2">
                      <Code size={14} className="text-emerald-400" />
                      Root Cwd: "." • Run process: "tsx server.ts"
                    </div>
                  </div>
                </div>

                {/* Subsystem Live logs display block */}
                <div className="bg-slate-950 border border-slate-900 p-4 rounded space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                    <span className="text-xs uppercase font-mono font-bold text-slate-300">
                      Primary Node Consoles Logging Channel
                    </span>
                    <button
                      onClick={fetchLogs}
                      className="text-[10.5px] font-mono hover:underline text-emerald-400 cursor-pointer"
                    >
                      Clear / Refresh Nodes
                    </button>
                  </div>

                  <div className="font-mono text-xs space-y-1 bg-black/50 p-4 rounded border border-slate-900 overflow-y-auto max-h-[180px]">
                    {serverLogs.map(log => (
                      <div key={log.id} className="py-0.5 border-b border-slate-950 last:border-0 flex justify-between items-center">
                        <div>
                          <span className="text-slate-600 mr-2">[{log.timestamp}]</span>
                          <span className={`font-semibold mr-2 ${
                            log.level === 'ERROR' ? 'text-red-500' :
                            log.level === 'WARN' ? 'text-yellow-500' :
                            log.level === 'SUCCESS' ? 'text-emerald-400' : 'text-slate-400'
                          }`}>
                            [{log.level}]
                          </span>
                          <span className="text-slate-300">{log.message}</span>
                        </div>
                        <span className="text-[10px] text-slate-700">source: {log.node || 'unknown'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </section>

        </div>
      </main>

      {/* System Terminal Footer (Theme: Sleek Interface) */}
      <footer className="h-40 bg-[#0a0a0a] border-t border-green-900/50 p-4 font-mono text-[11px] flex flex-col justify-between mt-12 select-none">
        <div className="flex justify-between items-center mb-2 border-b border-green-950 pb-1">
          <span className="text-green-800 text-[9px] uppercase tracking-widest font-black flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
            Kernel_Log / Simulation_Terminal
          </span>
          <span className="text-green-500 font-bold text-[10px]">SESSION: STABLE [0x00FF2A] • PORT: 3000 SSL</span>
        </div>
        <div className="flex-1 space-y-1 opacity-80 overflow-y-auto max-h-24 text-left pr-2">
          {serverLogs.length > 0 ? (
            serverLogs.slice(0, 5).map((log, index) => {
              const isError = log.level === 'ERROR';
              const isWarning = log.level === 'WARN';
              const isSuccess = log.level === 'SUCCESS';
              const colorClass = isError ? 'text-red-400' : isWarning ? 'text-yellow-400' : isSuccess ? 'text-green-400' : 'text-green-500';
              return (
                <p key={log.id || index} className={`${colorClass} text-[11px]`}>
                  <span className="text-green-900 font-bold mr-2">[{log.timestamp}]</span>
                  <span className="opacity-90">{log.message}</span>
                </p>
              );
            })
          ) : (
            <>
              <p className="text-green-500"><span className="text-green-900 mr-2">[14:02:11]</span> SYSTEM: Initializing Secure Gateway...</p>
              <p className="text-green-500"><span className="text-green-900 mr-2">[14:02:12]</span> USER_AUTH: Phrase recognized. "THE_BELL_OPENS_THE_GATE"</p>
              <p className="text-blue-400"><span className="text-green-900 mr-2">[14:02:12]</span> BYPASS: Decrypting node clusters for visualization...</p>
              <p className="text-red-400"><span className="text-green-900 mr-2">[14:02:13]</span> WARNING: Unauthorized simulation access detected. Sandbox enforced.</p>
              <p className="text-green-500"><span className="text-green-900 mr-2">[14:02:14]</span> SUCCESS: Market simulation layer fully operational.</p>
            </>
          )}
        </div>
      </footer>
    </div>
  );
}
