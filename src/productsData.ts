import { Product, QuizQuestion } from './types';

export const mockProducts: Product[] = [
  {
    id: 'tech-1',
    name: 'Quantum Bio-Hardware Transceiver',
    description: 'A mock secure biological signal transceiver replicating encrypted mesh telemetry protocols.',
    details: 'This experimental gadget simulates the interception and encryption of neuro-metric impulses. It serves as an educational demo of military-grade mesh networks that utilize zero-knowledge proximity verifications.',
    category: 'technology',
    price: 1337,
    rating: 4.85,
    status: 'Simulation Product',
    imageUrl: '/images/quantum_bio_transceiver.jpg',
    specs: [
      'Sub-dermal proximity emitter (simulated)',
      '1024-bit physical layer asymmetric encryption',
      'Dynamic frequency hopping over 12 bands',
      'Rechargeable thermal bio-battery simulator'
    ],
    reviews: [
      {
        id: 'r1',
        author: 'ZeroCool_99',
        rating: 5,
        comment: 'Incredibly detailed simulation UI. The bio-frequency graphs helped me understand spread-spectrum concepts.',
        date: '2026-05-18'
      },
      {
        id: 'r2',
        author: 'AcidBurn_X',
        rating: 4,
        comment: 'Great demonstration of dynamic frequency hopping algorithms.',
        date: '2026-06-01'
      }
    ]
  },
  {
    id: 'tech-2',
    name: 'Encrypted Air-Gap Pulse Blocker',
    description: 'An educational RF shielding module that simulates localized electromagnetic interference protection.',
    details: 'Constructed to showcase TEMPEST shielding techniques, this simulator lets users learn how audio or radio waves can leak data from physically isolated computing systems.',
    category: 'technology',
    price: 349,
    rating: 4.5,
    status: 'Simulation Product',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400',
    specs: [
      'Simulated RF jamming radius of 1.5m',
      'White noise generator and ultrasonic blocker',
      'LED indicator spectrum mapping',
      'USB-C testing power mode'
    ],
    reviews: [
      {
        id: 'r3',
        author: 'NeoSec',
        rating: 5,
        comment: 'Excellent awareness piece. Explains electrostatic and electromagnetic air-gap leakage beautifully.',
        date: '2026-06-05'
      }
    ]
  },
  {
    id: 'vehicle-1',
    name: 'Stealth Cyberbike "Ares V2"',
    description: '3D blueprint and conceptual software package for some of the most aerodynamic electric frame concepts.',
    details: 'This virtual asset represents a futuristic cybernetic motorcycle. It includes conceptual CAN-Bus firmware mockups, allowing security students to analyze CAN frame injection vulnerabilities and spoofing controls.',
    category: 'vehicles',
    price: 24500,
    rating: 4.97,
    status: 'Simulation Product',
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400',
    specs: [
      'Aerodynamic monocrystal carbon shell',
      'CAN-bus architectural map included',
      'Simulated 180 HP electric drivetrain model',
      'Smart display firmware telemetry analysis files'
    ],
    reviews: [
      {
        id: 'r4',
        author: 'G1bson_Flyer',
        rating: 5,
        comment: 'The CAN-bus logging files included in the package are phenomenal for demonstrating automobile hacking!',
        date: '2026-05-20'
      }
    ]
  },
  {
    id: 'vehicle-2',
    name: 'Autonomous Scout Drone VNAV',
    description: 'A cybersecurity modeling sandbox representing an autonomous courier flight package with GPS spoof defense.',
    details: 'In this simulation, users study how drones make autopilot decisions. The product package contains telemetry logs representing both normal operations and active GPS spoofing interference to teach robust signal defense.',
    category: 'vehicles',
    price: 1899,
    rating: 4.7,
    status: 'Simulation Product',
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=400',
    specs: [
      'Tri-band antenna system prototype data',
      'Anti-GPS Spoofing threshold software simulator',
      'High-altitude lidar scanning telemetry maps',
      'Failsafe return-to-base script schemas'
    ],
    reviews: [
      {
        id: 'r5',
        author: 'WhisperSky',
        rating: 4,
        comment: 'The logs showing GPS spoofing vs signal recovery are extremely educational for firmware developers.',
        date: '2026-06-10'
      }
    ]
  },
  {
    id: 'house-1',
    name: 'Smart Biometric Door Sentinel',
    description: 'A physical security locking simulator utilizing multi-spectral fingerprint and iris templates.',
    details: 'Simulate physical cyber-defense by interacting with this mock lock mechanism. Demonstrates optical spoofing defense and the vulnerabilities of single-factor biometric authentications in corporate contexts.',
    category: 'household',
    price: 420,
    rating: 4.62,
    status: 'Simulation Product',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400',
    specs: [
      'Multi-spectral vein reader data models',
      'SQL injection & buffer overflow hardened firmware proof',
      'Optical fake-iris detection threshold logs',
      'Physical intrusion tamper mechanism demonstration'
    ],
    reviews: [
      {
        id: 'r6',
        author: 'Locksmith_AI',
        rating: 5,
        comment: 'The mock physical bypass logs are a fantastic resource for high-security facilities.',
        date: '2026-04-12'
      }
    ]
  },
  {
    id: 'house-2',
    name: 'Air-Gap Atmosphere Neutralizer',
    description: 'A modern air filter node demonstrating air-gapped system protection through ultrasonic particle controls.',
    details: 'This futuristic smart furniture component displays how home automation networks are bridged. Use this mock tool to explore how smart appliances can accidentally leak sound diagnostic signals representing keystrokes.',
    category: 'household',
    price: 670,
    rating: 4.4,
    status: 'Simulation Product',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400',
    specs: [
      'Hepafilter micro-laser mesh simulator',
      'Acoustic emission shielding module demo',
      'Home Assistant integration scripting tutorial',
      'Smart-home privacy risk assessment tool'
    ],
    reviews: [
      {
        id: 'r7',
        author: 'CozyHacker',
        rating: 4,
        comment: 'Never knew that some home appliances could leak acoustic keystroke diagnostics. Fascinating study.',
        date: '2026-06-03'
      }
    ]
  },
  {
    id: 'digital-1',
    name: 'Ethical Hacker OS "Specter v4"',
    description: 'An interactive virtual Linux environment mimicking specialized intelligence compilation and penetration suites.',
    details: 'A ready-to-flash simulation image of a defensive testing operating system. This is a secure awareness sandbox containing scripts, tutorials, and mock network scanning software.',
    category: 'digital',
    price: 49,
    rating: 4.96,
    status: 'Simulation Product',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=400',
    specs: [
      'Tailored terminal dashboard with customized themes',
      '50+ built-in educational interactive scenarios',
      'Comprehensive reverse-engineering sandbox tutorials',
      'Mock wireless scanner & audit training visualizers'
    ],
    reviews: [
      {
        id: 'r8',
        author: 'L33tG33k',
        rating: 5,
        comment: 'If you want to introduce students to security Linux tools in a safe, browser-based mock environment, this is unmatched.',
        date: '2026-06-09'
      }
    ]
  },
  {
    id: 'digital-2',
    name: 'Zero-Knowledge Privacy Awareness Suite',
    description: 'A bundle of interactive cyber training materials, local key managers, and privacy simulation courses.',
    details: 'This is the ultimate ethical hacker toolkit to master data privacy. Contains guided walkthroughs on cryptographic signatures, GPG keys, password hygiene, and VPN mechanics.',
    category: 'digital',
    price: 29,
    rating: 4.9,
    status: 'Simulation Product',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
    specs: [
      '12-step guided local cryptography laboratories',
      'Passphrase entropy simulator and brute-force tester',
      'Virtual mock TOR browser mechanism infographic',
      'Interactive visual guide to email headers and metadata'
    ],
    reviews: [
      {
        id: 'r9',
        author: 'PrivacyWarrior',
        rating: 5,
        comment: 'Learned so much about metadata leaks! The visual email scanner alone is worth the price.',
        date: '2026-06-02'
      }
    ]
  },
  {
    id: 'sim-1',
    name: 'Phantom Access Terminal',
    description: 'A high-performance simulated hardware console designed for secure, localized network administration.',
    details: 'This terminal simulator replicates the operating environment of a hardened secure terminal. Features an integrated mechanical deck, simulated quantum-resistant security module, and multi-layered hardware isolation simulation.',
    category: 'technology',
    price: 2499,
    rating: 4.91,
    status: 'Simulation Item',
    specs: [
      'Integrated 60% mechanical deck with customized tactical keys',
      '10-inch secure low-emission amber displays',
      'Simulated hardware TRNG for access sessions',
      'Dual physical isolation switch simulators'
    ],
    reviews: [
      {
        id: 'rev-s1-1',
        author: 'Specter_Gate',
        rating: 5,
        comment: 'Phenomenal interface representation. The mechanical terminal style feels incredibly real.',
        date: '2026-06-12'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-2',
    name: 'Shadow Network Analyzer',
    description: 'An educational diagnostic module that simulates packet tracing and sniffing metrics.',
    details: 'Replicates cybersecurity diagnostics for air-tight environment monitoring. Displays interactive mock signal analysis and packet sequence inspection charts to introduce network interception mechanics safely.',
    category: 'digital',
    price: 899,
    rating: 4.76,
    status: 'Simulation Item',
    specs: [
      'Simulated passive network interface taps',
      'Dynamic packet header telemetry simulator',
      'LED waveform signal visualizer',
      'Sub-frequency channel logging demonstrations'
    ],
    reviews: [
      {
        id: 'rev-s2-1',
        author: 'PacketSniffer_X',
        rating: 5,
        comment: 'Excellent visual representation of packet streams and sniffing indicators.',
        date: '2026-06-15'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-3',
    name: 'Quantum Encryption Device',
    description: 'A simulated hardware cryptographic accelerator with quantum-key simulation logic.',
    details: 'Simulates high-speed mathematical operations representing quantum cryptography. Educational scripts detail how modular lattices protect telemetry from future quantum supercomputers.',
    category: 'technology',
    price: 1799,
    rating: 4.95,
    status: 'Simulation Item',
    specs: [
      'Lattice-based cryptography simulation algorithms',
      'Real-time key exchange mock telemetry',
      'OLED active key status display',
      'Dynamic entropy generator verification tools'
    ],
    reviews: [
      {
        id: 'rev-s3-1',
        author: 'QuantumZero',
        rating: 5,
        comment: 'Sleek presentation of lattice cryptography concepts. Highly recommend!',
        date: '2026-06-14'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-4',
    name: 'Ghost Signal Router',
    description: 'A hardware router mockup that highlights dynamic proxying, VPN routing, and signal masking.',
    details: 'This model showcases layered multi-hop routing techniques. It simulates local proxy chain configurations and highlights how digital telemetry gets stripped across nested node hops.',
    category: 'technology',
    price: 649,
    rating: 4.68,
    status: 'Simulation Item',
    specs: [
      'Nested multi-hop proxy routing simulations',
      'MAC address spoofing automation simulator',
      'Passive heatsink design for dark deployments',
      'Visualized pathing node logs'
    ],
    reviews: [
      {
        id: 'rev-s4-1',
        author: 'ProxyChains_Fan',
        rating: 4,
        comment: 'Perfect simulation for explaining multi-node packet hops.',
        date: '2026-06-11'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-5',
    name: 'CyberVault Secure Storage Unit',
    description: 'A sturdy, smart electromagnetic secure locker simulation focusing on physical bypass drills.',
    details: 'Shows dual-layer security concepts for home storage protection. Features simulation models for thermal vault protection, anti-tampering acoustic sensors, and electromagnetic deadbolts.',
    category: 'household',
    price: 1299,
    rating: 4.88,
    status: 'Simulation Item',
    specs: [
      'Physical electromagnetic bypass alert systems',
      'Simulated biometric deadbolt locks',
      'Acoustic tamper sensor triggers',
      'Emergency recovery key-generation dashboard'
    ],
    reviews: [
      {
        id: 'rev-s5-1',
        author: 'VaultCracker',
        rating: 5,
        comment: 'Stunning industrial design! Safe tamper tests are brilliant.',
        date: '2026-06-03'
      }
    ],
    imageUrl: '/images/cybervault_secure_storage.jpg'
  },
  {
    id: 'sim-6',
    name: 'DarkNode Communication Hub',
    description: 'A multi-channel mock radio terminal demonstrating peer-to-peer encrypted chat protocols.',
    details: 'Constructed to demonstrate emergency offline communications. It simulates direct radio meshes using frequency hopping and packetized data streams over unlicensed bands.',
    category: 'technology',
    price: 749,
    rating: 4.79,
    status: 'Simulation Item',
    specs: [
      'Peer-to-peer chat logs simulation template',
      '915 MHz spread spectrum emulation logic',
      'Integrated status display for offline network state',
      'Emergency power backup simulation metrics'
    ],
    reviews: [
      {
        id: 'rev-s6-1',
        author: 'RadioOffgrid',
        rating: 4,
        comment: 'Very nice offline transport layer simulation. Interactive meshes look great.',
        date: '2026-06-13'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-7',
    name: 'Specter Data Archive',
    description: 'A simulated high-capacity cold-storage backup array with automated zero-knowledge partitioning.',
    details: 'This visual simulation represents a high-density, heavily isolated backup array. Teaches concepts of sharding, metadata stripping, and background verification cascades.',
    category: 'digital',
    price: 2099,
    rating: 4.93,
    status: 'Simulation Item',
    specs: [
      'Metadata scrubbing automation configurations',
      'Simulated RAID-Z zero-knowledge sharding maps',
      'Write-Once-Read-Many (WORM) hardware simulator',
      'Encrypted file extraction simulator'
    ],
    reviews: [
      {
        id: 'rev-s7-1',
        author: 'ColdStorage_Pro',
        rating: 5,
        comment: 'Sharding visualizer teaches raid structures so easily!',
        date: '2026-06-10'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-8',
    name: 'Neon Security Console',
    description: 'A tactile control interface designed for monitoring firewall anomalies and honeypot triggers.',
    details: 'A sleek mock console engineered to demonstrate defense orchestration. Gives security engineers interactive knobs and sliders (simulated) to adjust network bypass routing and filtering rules.',
    category: 'technology',
    price: 999,
    rating: 4.82,
    status: 'Simulation Item',
    specs: [
      'Firewall threshold sliders (simulation variables)',
      'Tactile mechanical emergency power button',
      'Compact rackmount layout',
      'RGB indicator matrix for honeypot alarms'
    ],
    reviews: [
      {
        id: 'rev-s8-1',
        author: 'HoneypotCapt',
        rating: 5,
        comment: 'Looks amazing on my workspace display. Excellent visual triggers.',
        date: '2026-06-16'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-9',
    name: 'Eclipse Privacy Workstation',
    description: 'An ultra-low-emission custom desktop workstation simulation for air-gapped operations.',
    details: 'Represents a high-end hardware testing workstation completely protected from electromagnetic footprint analysis. Includes simulation data of cooling, air filtration, and secure BIOS structures.',
    category: 'technology',
    price: 3499,
    rating: 4.98,
    status: 'Simulation Item',
    specs: [
      'Faraday cage structural isolation casing',
      'Custom open-source coreboot BIOS emulator logs',
      'Fiber-optic interface card configuration list',
      'Simulated electromagnetic emission spectrum mapping'
    ],
    reviews: [
      {
        id: 'rev-s9-1',
        author: 'AirGap_Enthusiast',
        rating: 5,
        comment: 'The BIOS and faraday emissions spectrum simulator charts are stunning.',
        date: '2026-06-17'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-10',
    name: 'BlackGrid Operations Center',
    description: 'A full visual security center package including active node maps and intrusion response dashboards.',
    details: 'A sophisticated simulation suite mimicking a multi-monitor corporate security operations center. Displays interactive telemetry flows, alerts, maps, and automated containment scenarios.',
    category: 'digital',
    price: 4999,
    rating: 4.92,
    status: 'Simulation Item',
    specs: [
      'Multiple security screen visualization feeds',
      'Global threat map mapping (simulated packets)',
      'Interactive containment scripting triggers',
      'Automated containment logging modules'
    ],
    reviews: [
      {
        id: 'rev-s10-1',
        author: 'SOC_Lead_Delta',
        rating: 5,
        comment: 'By far the best layout for teaching cyber crisis command and response.',
        date: '2026-06-08'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-11',
    name: 'ZeroTrace Monitoring Hub',
    description: 'A hardware controller and interface tracking network traversal footprints and secure logs.',
    details: 'Helps cybersecurity students learn how operational security (OPSEC) audits are run. Generates simulated alerts when digital actions leak metadata such as local timestamps or geolocation details.',
    category: 'digital',
    price: 1899,
    rating: 4.71,
    status: 'Simulation Item',
    specs: [
      'OPSEC audit alert generator simulations',
      'Metadata logging analysis tools',
      'Automatic data purging simulation scripts',
      'Hardware footprint telemetry visualizers'
    ],
    reviews: [
      {
        id: 'rev-s11-1',
        author: 'OPSEC_Guru',
        rating: 5,
        comment: 'Extremely good educational reminder about metadata hygiene.',
        date: '2026-06-15'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-12',
    name: 'NightCipher Processing Unit',
    description: 'A liquid-cooled cryptoprocessor template simulating fast modular multiplication and decryption blocks.',
    details: 'Simulates extreme computing blocks used in asymmetric key cracking research. Includes interactive charts modeling hardware temperatures, clock speeds, and cryptographic search logs.',
    category: 'technology',
    price: 2299,
    rating: 4.87,
    status: 'Simulation Item',
    specs: [
      'Decrypted data block metrics simulator',
      'Modular multiplication math engine models',
      'Supercooled thermal simulation configurations',
      'Hardware cracking search progress visualizers'
    ],
    reviews: [
      {
        id: 'rev-s12-1',
        author: 'Asym_Cracker',
        rating: 4,
        comment: 'Thermally balanced processing models helper. Five stars!',
        date: '2026-06-14'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-13',
    name: 'Obsidian Secure Server',
    description: 'A heavy-duty rack server model highlighting trusted execution environments and secure enclaves.',
    details: 'Replicates enterprise-grade architectural defense. Demonstrates hardware enclaves (like SGX/SEV) that encrypt memory in transit, preventing direct physical memory reading attacks.',
    category: 'technology',
    price: 5499,
    rating: 4.99,
    status: 'Simulation Item',
    specs: [
      'Trusted Execution Environment (TEE) sandbox model',
      'Encrypted runtime RAM allocation simulator',
      'Glossy obsidian carbon isolation chassis',
      'Hot-swappable cryptographic vault metrics'
    ],
    reviews: [
      {
        id: 'rev-s13-1',
        author: 'Enclave_Dev',
        rating: 5,
        comment: 'Flawless demonstration of memory isolation vectors and cold boot protection.',
        date: '2026-06-16'
      }
    ],
    imageUrl: '/images/obsidian_secure_server.jpg'
  },
  {
    id: 'sim-14',
    name: 'Phantom Relay Station',
    description: 'A tactical transmission relay antenna simulation with dynamic packet routing parameters.',
    details: 'Engineered to display how secure remote relays operate in isolated terrains. Simulates telemetry link handshakes, packet forwarding protocols, and directional signal shielding.',
    category: 'technology',
    price: 1499,
    rating: 4.65,
    status: 'Simulation Item',
    specs: [
      'Tactical link handshake simulation variables',
      'Automated failover route telemetry maps',
      'Directional radio sector beamforming models',
      'Solar micro-grid power configurations'
    ],
    reviews: [
      {
        id: 'rev-s14-1',
        author: 'RF_Relay_Op',
        rating: 5,
        comment: 'The beamforming antenna diagram variables are exceptionally precise.',
        date: '2026-06-02'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sim-15',
    name: 'Nexus Intelligence Console',
    description: 'A futuristic unified control console designed for security architecture simulation feeds.',
    details: 'Shows high-level unified interface models. Replicates deep threat analysis mapping, AI-guided response scenarios, and complex decryption orchestration panels.',
    category: 'technology',
    price: 2799,
    rating: 4.89,
    status: 'Simulation Item',
    specs: [
      'Unified security node network dashboards',
      'Decryption algorithm timing analyzers',
      'Modular sensor expansion ports simulated',
      'Hardware key-vault cryptographic controllers'
    ],
    reviews: [
      {
        id: 'rev-s15-1',
        author: 'Nexus_Commander',
        rating: 5,
        comment: 'Utterly perfect. Integrated seamlessly with my training dashboards.',
        date: '2026-06-17'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400'
  }
];

export const mockQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary indicator of a phishing email, and what is the best first defense?',
    options: [
      'An unfamiliar attachment extension; double-click it in a secure terminal.',
      'Slight domain typos (e.g. paypa1-security.com) and urgency; verify through official official channels.',
      'The absence of professional graphics; flag it for your friends to inspect.',
      'Having low-resolution logos; respond with a mock credit card to trace the author.'
    ],
    correctAnswer: 1,
    educationalExplanation: 'Phishing techniques often utilize look-alike domains and artificial urgency to trigger emotional responses. Always check the exact address headers and log in directly through secure, bookmarked paths.'
  },
  {
    id: 'q2',
    question: 'How do reputable actors securely communicate in standard cryptographic interfaces under iframe environments?',
    options: [
      'Using window.location.hash directly without event sandboxes.',
      'Relying on cleartext cookies to manage user state.',
      'Employing window.postMessage with rigorous origin validation and secure origin cookies.',
      'Opening open websockets connected to arbitrary ports like 5173.'
    ],
    correctAnswer: 2,
    educationalExplanation: 'Secure cross-origin communication requires postMessage with strict origin checking. Broadly broadcasting to wildcard origins ("*") allows adversaries in competing iframes to wiretap messages.'
  },
  {
    id: 'q3',
    question: 'What makes underground escrow marketplaces susceptible to exit scams?',
    options: [
      'They utilize decentralized algorithms that automatically deposit coins back.',
      'Administrative actors hold private multi-sig keys on centralised wallets, allowing them to vanish with funds at any peak.',
      'Adversaries use standard bank credit cards to perform chargebacks.',
      'The servers are run entirely in local mock environments like port 3000.'
    ],
    correctAnswer: 1,
    educationalExplanation: 'Hidden market operators utilize escrow balances to hold active transaction funds. Since there are no legal protections, administrators frequently disable withdrawals during massive market peaks, taking millions of dollars in a maneuver known as an exit scam.'
  }
];
