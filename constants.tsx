import React from 'react';

export const COLORS = {
  primary: '#ffffff',
  secondary: '#a1a1aa',
  background: '#000000',
  surface: 'rgba(255, 255, 255, 0.05)',
  border: 'rgba(255, 255, 255, 0.1)'
};

export const SOCIAL_LINKS = {
  whatsapp: "https://chat.whatsapp.com/EUEkJYcfSYB3aJuBSERi5N",
  telegram: "https://t.me/+G97jt_KKAtJiZWI0",
  x: "https://x.com/Web3CurrencyNG",
  email: "web3currency.info@gmail.com",
  whatsapp_number: "+2347032754611",
  testnet_group: "https://chat.whatsapp.com/CVOdqsDd9aCKVIXeHH3jCD?mode=gi_t",
  p2p_buy: "https://wa.me/2347032754611?text=I%20want%20to%20buy%20crypto",
  p2p_sell: "https://wa.me/2347032754611?text=I%20want%20to%20sell%20crypto"
};

export const BRAND = {
  name: "Web3 Currency",
  tagline: "Learn • Explore • Earn",
  founder: "Adeyemo Jibola (JAKE)",
  founder_link: "https://linktr.ee/0xjake8",
  positioning: "Web3 Currency is focused on making Web3 easy, safe, and educational, especially for beginners.",
  principles: [
    "Learn before you earn",
    "Safety over hype",
    "Community over centralization",
    "Utility over speculation"
  ]
};

// Interface for airdrop project details
export interface Airdrop {
  id: string;
  name: string;
  chain: string;
  status: 'Active' | 'Confirmed' | 'Potential';
  rewardPotential: string;
  cost: string;
  strategy: string;
}

// Verified list of airdrop opportunities
export const AIRDROPS: Airdrop[] = [
  {
    id: '1',
    name: 'Berachain',
    chain: 'Berachain',
    status: 'Active',
    rewardPotential: '$2,500 - $10,000',
    cost: 'Free (Testnet)',
    strategy: 'Engage with Artio testnet dApps like BEX and Honey daily to build proof-of-liquidity history.'
  },
  {
    id: '2',
    name: 'Linea',
    chain: 'Ethereum L2',
    status: 'Confirmed',
    rewardPotential: '$1,200 - $5,000',
    cost: 'Gas Fees',
    strategy: 'Participate in Linea Voyage tasks and maintain organic mainnet activity with consistent bridging.'
  },
  {
    id: '3',
    name: 'Monad',
    chain: 'Monad',
    status: 'Potential',
    rewardPotential: 'Institutional Grade',
    cost: 'Free',
    strategy: 'Actively participate in Discord, contribute to community projects, and await public testnet access.'
  },
  {
    id: '4',
    name: 'Hyperlane',
    chain: 'Modular',
    status: 'Active',
    rewardPotential: '$500 - $2,000',
    cost: 'Gas Fees',
    strategy: 'Utilize cross-chain messaging via Nexus or Merkly bridges to establish interoperability activity.'
  },
  {
    id: '5',
    name: 'Scroll',
    chain: 'zkEVM',
    status: 'Confirmed',
    rewardPotential: '$1,000 - $4,000',
    cost: 'Gas Fees',
    strategy: 'Accumulate Scroll Marks by bridging ETH and providing liquidity to ecosystem DEXs like Ambient.'
  }
];

export const SERVICES = [
  {
    title: "Free Learning Community",
    description: "A structured WhatsApp space focused on education, clarity, and long-term thinking. No hype, no financial advice, just real Web3 knowledge.",
    tag: "Education",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "P2P Liquidity Desk",
    description: "Simplified P2P desk for converting digital assets to local currency, managed directly within our trusted community environment.",
    tag: "Utility",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "Airdrop Participation",
    description: "Guided participation in high-potential Web3 protocols. We provide the research and steps; you learn how to navigate early opportunities.",
    tag: "Alpha",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    )
  },
  {
    title: "Pi Utility Application",
    description: "A dedicated utility app on the Pi Network testnet featuring a project explorer and quest hub for community engagement.",
    tag: "Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

export const TRUST_PILLARS = [
  {
    title: "Learn Before You Earn",
    description: "We prioritize education above all else. Understanding the 'why' and 'how' of Web3 is the only way to navigate the space safely and effectively.",
    icon: "LE"
  },
  {
    title: "Safety Over Hype",
    description: "Our community is a noise-free zone. We deliberately avoid hype-driven projects and focus on verified, risk-mitigated opportunities.",
    icon: "SH"
  },
  {
    title: "Community Over Centralization",
    description: "We believe in the power of a structured, helpful community. Operations are coordinated directly via WhatsApp to maintain a personal, trusted environment.",
    icon: "CC"
  },
  {
    title: "Utility Over Speculation",
    description: "Whether it's our Pi Network app or airdrop participation, we focus on functional utility and long-term value rather than short-term speculation.",
    icon: "US"
  }
];

export const PI_VISION_POINTS = [
  {
    title: "Web3Currency App",
    description: "A comprehensive utility platform featuring the W3C Explorer for project discovery and the W3C Quest for community engagement. Navigate the Pi ecosystem safely while earning XP through gamified learning."
  },
  {
    title: "W3CAI",
    description: "Your intelligent companion for navigating the Web3 Currency ecosystem. Get instant support, community guidance, and technical assistance to help you move through our apps and learning channels effectively."
  },
  {
    title: "W3C Token",
    description: "Our in-app utility token is designed for ecosystem interaction and gamification, not as an investment or speculative product."
  }
];

export const MEMBERSHIP_CRITERIA = {
  isFor: [
    "Beginners wanting clear, structured Web3 explanations without the noise.",
    "Pi Network users exploring tokens and projects in a safe environment.",
    "Learners who prefer structured guidance over unvetted public hype.",
    "People seeking a helpful, education-first community on WhatsApp."
  ],
  isNotFor: [
    "Those seeking speculative 'signals' or guaranteed financial returns.",
    "Individuals looking for high-frequency trading advice or emotional hype.",
    "Users who view the Pi App or community as an investment product.",
    "Participants who prefer unvetted public channels over structured learning."
  ]
};

export const AIRDROP_PILLARS = [
  {
    title: "Meticulous Opportunity Research",
    description: "We vet protocols based on team pedigree and technological utility, ensuring time is allocated only to high-integrity projects."
  },
  {
    title: "Collective Community Effort",
    description: "Members collaborate to document tasks and share technical steps, providing mutual support during complex participation cycles."
  },
  {
    title: "Pre-Market Strategic Entry",
    description: "We prioritize early interaction before public attention peaks, allowing for deep integration into emerging protocol ecosystems."
  },
  {
    title: "Value-Oriented Patience",
    description: "Our approach favors consistent engagement and long-term contribution over speculative or short-term thinking."
  }
];

export const P2P_BENEFITS = [
  {
    title: "Direct Access",
    description: "Transact directly within our private network without navigating external platforms.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Efficient Turnaround",
    description: "Experience rapid transaction settlement designed to value your time.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Structured Oversight",
    description: "Every exchange is coordinated within a professional framework to ensure clarity and precision.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A3.323 3.323 0 0010.605 2.02a3.323 3.323 0 00-4.589 4.589 3.323 3.323 0 00-4.016 5.618 3.323 3.323 0 004.589 4.59 3.323 3.323 0 005.617 4.015 3.323 3.323 0 004.59-4.59 3.323 3.323 0 004.015-5.617z" />
      </svg>
    )
  },
  {
    title: "Network Security",
    description: "All transactions occur within a verified peer-to-peer environment built on long-term community trust.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

export const STEPS = [
  {
    number: "01",
    title: "Join WhatsApp Community",
    description: "Access our free learning space where all education, updates, and P2P desk operations happen directly."
  },
  {
    number: "02",
    title: "Explore the Pi App",
    description: "Visit the Web3Currency app on Pi Network testnet to use the W3C Explorer and participate in the W3C Quest."
  },
  {
    number: "03",
    title: "Learn Consistently",
    description: "Engage with structured guidance and community research to build your Web3 knowledge base safely."
  },
  {
    number: "04",
    title: "Participate Responsibly",
    description: "Apply your learning to airdrop participation and ecosystem projects with a long-term mindset."
  }
];

export const TRUST_SIGNALS = [
  "Verified Community",
  "P2P Liquidity Desk",
  "Institutional Analysis",
  "Long-term Utility Focus"
];

export const FAQ_ITEMS = [
  {
    question: "Is the community really free?",
    answer: "Yes. Web3 Currency is a free WhatsApp-based learning community. We believe in providing accessible, high-quality Web3 education without subscription fees."
  },
  {
    question: "Is this financial advice?",
    answer: "No. We are an education-first community. We provide clarity, research, and structured guidance, but we never provide financial or investment advice."
  },
  {
    question: "How does the P2P desk work?",
    answer: "Liquidity is handled directly within our WhatsApp community. It's a simplified P2P desk for members to convert assets safely through community-verified channels."
  },
  {
    question: "What is the Pi Network App?",
    answer: "It's a utility application on the Pi testnet. It features a project explorer and quest hub. It is NOT a trading platform or an investment product."
  },
  {
    question: "Who is the founder?",
    answer: "Web3 Currency was founded by Adeyemo Jibola (JAKE), an educator based in Nigeria dedicated to making Web3 accessible and safe for everyone."
  }
];
