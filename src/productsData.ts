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
    imageUrl: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=400',
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
