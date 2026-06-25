"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ──────────────────────────────────────────────────────────────────

const sections = [
  {
    id: "trading-system",
    nav: "Darkhaven Trading System",
    title: "Darkhaven Trading System",
    subtitle: "Forex and Digital Currency Trading System",
    description:
      "Darkhaven is an institutional level forex and cryptocurrency trading system designed to provide comprehensive solutions for brokers and exchanges to meet the needs of their traders. Its powerful features and reliable performance make it one of the leading trading platforms in the industry.",
    features: [
      {
        icon: "⚡",
        title: "Advanced Transaction Execution Engine",
        desc: "Provide extremely low microsecond level latency and high throughput to ensure fast and accurate transaction execution.",
      },
      {
        icon: "💧",
        title: "Deep Liquidity Aggregation",
        desc: "Connect to multiple liquidity providers to provide traders with optimal execution prices and deep liquidity.",
      },
      {
        icon: "📊",
        title: "Multi Asset Support",
        desc: "Support a wide range of foreign exchange currency pairs, precious metals, stocks, and digital currencies to meet the needs of different traders.",
      },
      {
        icon: "📋",
        title: "Flexible Order Management",
        desc: "Provide various order types, including market orders, limit orders, stop loss orders, and take profit orders, to provide traders with comprehensive order control.",
      },
      {
        icon: "🛡️",
        title: "Risk Management Tools",
        desc: "A comprehensive risk management tool that includes stop loss, take profit, and margin levels to help traders manage risk and protect capital.",
      },
      {
        icon: "🎨",
        title: "Customized Brand",
        desc: "Allow brokers and exchanges to customize platforms to match their brand identity and provide a seamless user experience.",
      },
      {
        icon: "🏛️",
        title: "Institutional Level Reliability",
        desc: "Adopting the most advanced technology and infrastructure to ensure the stability and reliability of the platform, it can operate normally even in high volatility markets.",
      },
      {
        icon: "📈",
        title: "Scalability And Flexibility",
        desc: "Highly scalable, capable of handling large trading volumes, and customizable according to the specific needs of brokers and exchanges.",
      },
      {
        icon: "🏷️",
        title: "White Label Solution",
        desc: "Provide white label solutions to enable brokers and exchanges to quickly and easily launch their own trading platforms.",
      },
      {
        icon: "🕐",
        title: "24/7 Support",
        desc: "Provide 24/7 support to ensure brokers and exchanges receive the necessary assistance and support.",
      },
    ],
  },
  {
    id: "crm-system",
    nav: "MT4/MT5 CRM System",
    title: "MT4/MT5 CRM System",
    subtitle: "Customer Relationship Management for Forex Brokers",
    description:
      "The MT4/MT5 CRM system is a comprehensive customer relationship management (CRM) system designed specifically for forex and digital currency brokers. It seamlessly integrates with popular MT4 and MT5 trading platforms, providing brokers with a powerful set of tools to manage and expand their customer base, and generates revenue through multi-level flexible commission settings and built-in investment and fund subscription models.",
    features: [
      {
        icon: "👤",
        title: "Customer Management",
        desc: "Centralize the management of customer data, including personal information, transaction history, and interaction records.",
      },
      {
        icon: "🎯",
        title: "Lead Management",
        desc: "Track and manage potential customers, and convert them into paying customers through automated processes.",
      },
      {
        icon: "📣",
        title: "Marketing Automation",
        desc: "Create and send personalized email and SMS campaigns to attract and retain customers.",
      },
      {
        icon: "💎",
        title: "Multi Level Commission Rebate",
        desc: "Set up a flexible multi-level rebate structure to incentivize existing customers to recommend new customers.",
      },
      {
        icon: "💰",
        title: "Fund Purchase",
        desc: "Cooperate with third-party fund companies to provide customers with fund subscription services and expand their sources of income.",
      },
      {
        icon: "📉",
        title: "Improve Customer Acquisition And Retention Rates",
        desc: "Through multi-level rebates and personalized marketing activities, securities firms can effectively improve customer acquisition and retention rates.",
      },
      {
        icon: "💹",
        title: "Increase Sources Of Income",
        desc: "The built-in wealth management and fund subscription functions provide securities firms with additional sources of income and improve profitability.",
      },
      {
        icon: "⚙️",
        title: "Optimize Sales Process",
        desc: "Through automation and performance tracking, securities firms can optimize their sales processes and improve efficiency.",
      },
      {
        icon: "🤝",
        title: "Enhance Customer Relationships",
        desc: "A deep understanding of customer interactions and preferences enables securities firms to establish stronger customer relationships and improve customer satisfaction.",
      },
    ],
  },
  {
    id: "copy-community",
    nav: "Cross Platform Follow-up Community",
    title: "Cross Platform Follow-Up Community",
    subtitle: "Cross-Platform Copy Trading Platform",
    description:
      "The cross platform copy following community is an innovative platform that allows traders to copy each other across platforms between MT4 and MT5 trading platforms. It provides extremely low millisecond latency and pure mobile cloud operation, without hanging up, making it easy to use.",
    features: [
      {
        icon: "🔗",
        title: "Cross Platform Follow-Up",
        desc: "Allowing traders to copy each other between MT4 and MT5 platforms breaks platform restrictions.",
      },
      {
        icon: "⚡",
        title: "Extremely Low Latency",
        desc: "Adopting advanced technology to achieve millisecond level ultra-low latency, ensuring timely execution of follow-up signals.",
      },
      {
        icon: "☁️",
        title: "Pure Mobile Cloud Operation",
        desc: "No need to install any software on the local computer, just use your phone to order anytime, anywhere.",
      },
      {
        icon: "🚫",
        title: "No Need To Hang Up",
        desc: "Using cloud servers for operation, traders do not need to hang up their local computers, freeing up their devices.",
      },
      {
        icon: "🔒",
        title: "Private Domain Deployment",
        desc: "Provide brokers with private domain deployment options to protect customer data security and customize platform features.",
      },
      {
        icon: "👥",
        title: "Broker Customer Retention",
        desc: "Brokers can attract and retain customers, increase trading volume and commission income by providing copy tracking services.",
      },
      {
        icon: "📊",
        title: "Trader Profit Opportunities",
        desc: "Traders can follow experienced traders to copy their trading strategies and increase profit opportunities.",
      },
      {
        icon: "🏠",
        title: "Convenient Trading For Retail Investors",
        desc: "Retail investors can easily participate in forex and digital currency trading through the follow-up community without the need for professional knowledge.",
      },
      {
        icon: "✅",
        title: "Easy To Use",
        desc: "Pure mobile cloud operation and extremely low latency, easy to use, and capable of tracking orders anytime, anywhere.",
      },
      {
        icon: "🛡️",
        title: "Safe And Reliable",
        desc: "Adopting advanced technology and private domain deployment options to ensure transaction security and data privacy.",
      },
    ],
    footer:
      "Cross platform copy following community is an indispensable tool for forex and digital currency traders. It breaks through platform limitations, provides extremely low latency and convenient tracking experience, helping brokers, traders, and retail investors achieve their trading goals.",
  },
  {
    id: "ai-stock-selection",
    nav: "Darkhaven AI Quant Stock Selection",
    title: "Darkhaven AI Multi Factor Investment Model Stock Selection System",
    subtitle: "AI-Powered Quantitative Stock Selection",
    description:
      "Darkhaven TechQuant is an innovative global AI multi factor investment model stock selection system designed to meet investors' demand for quantitative automatic stock selection in the global securities market. It integrates cutting-edge AI models and machine learning technologies, providing investors with unprecedented investment experience and protection.",
    features: [
      {
        icon: "🌏",
        title: "Global Securities Market Coverage",
        desc: "Covering major global securities markets, including stocks, bonds, commodities, and foreign exchange.",
      },
      {
        icon: "🤖",
        title: "AI Big Models And Machine Learning",
        desc: "Using advanced AI models and machine learning algorithms to analyze massive amounts of data and identify potential investment opportunities.",
      },
      {
        icon: "📐",
        title: "Multifactorial Model",
        desc: "Combining hundreds of quantitative factors, including financial indicators, market sentiment, and technical indicators, provides comprehensive insights for stock selection.",
      },
      {
        icon: "🔍",
        title: "Automatic Stock Selection",
        desc: "The system automatically screens and evaluates stocks, generating selected stock portfolios based on pre-defined investment strategies and risk preferences.",
      },
      {
        icon: "📡",
        title: "Real Time Monitoring And Adjustment",
        desc: "The system continuously monitors market dynamics and adjusts investment portfolios as needed to optimize returns and manage risks.",
      },
      {
        icon: "👥",
        title: "Broker Customer Retention",
        desc: "Brokers can attract and retain customers, increase trading volume and commission income by providing copy tracking services.",
      },
      {
        icon: "💡",
        title: "Enhance Investment Decision-Making",
        desc: "By providing data-driven insights and recommendations, help investors make informed investment decisions.",
      },
      {
        icon: "⏳",
        title: "Save Time And Effort",
        desc: "Automated stock selection process saves investors a lot of time and energy, allowing them to focus on other important tasks.",
      },
      {
        icon: "📈",
        title: "Improve Investment Returns",
        desc: "Verified multi factor models and AI technology can help identify stocks with high growth potential and low risk, improving investment returns.",
      },
      {
        icon: "📉",
        title: "Reduce Investment Risk",
        desc: "Reduce the overall risk of the investment portfolio through diversified investment portfolio and dynamic risk management.",
      },
      {
        icon: "🎭",
        title: "Suitable For Various Investors",
        desc: "Whether experienced professionals or beginners, Darkhaven can meet different investment needs and risk tolerance.",
      },
    ],
  },
  {
    id: "futures-arbitrage",
    nav: "Darkhaven Futures Hedge Arbitrage",
    title: "Darkhaven Futures Quantitative Hedge Arbitrage Trading System",
    subtitle: "Quantitative Hedge Arbitrage for Futures Markets",
    description:
      "Hedging arbitrage is a trading strategy that reduces risk and profits by simultaneously buying and selling related futures contracts. The Darkhaven system uses quantitative models to analyze historical data, identify extreme points of futures contract spreads, and profit from the regression or convergence of spreads. Darkhaven Futures Quantitative Hedge Arbitrage Trading System is an innovative trading system designed specifically for quantitative hedge arbitrage trading in the futures market. It combines cutting-edge quantitative technology and advanced arbitrage strategies, providing investors with stable profits and minimal risk investment opportunities.",
    features: [
      {
        icon: "📉",
        title: "Historical Extreme Value Recognition",
        desc: "The system adopts advanced statistical models and machine learning algorithms to identify the extreme points of futures contract spreads.",
      },
      {
        icon: "🔄",
        title: "Cross Period And Cross Variety Arbitrage",
        desc: "The system is not limited to cross period arbitrage of the same contract, but also supports arbitrage across different varieties, expanding profit opportunities.",
      },
      {
        icon: "🧬",
        title: "Multi Factor Quantification Model",
        desc: "The system adopts a multi factor quantification model to model and predict price differences, improving the accuracy of trading.",
      },
      {
        icon: "🤖",
        title: "Automated Trading",
        desc: "The system implements automated trading, and once an arbitrage opportunity is identified, it will automatically execute trading instructions.",
      },
      {
        icon: "⚠️",
        title: "Strict Risk Control Mechanism",
        desc: "Strict risk control mechanisms are built into the system, including position management, stop loss, and take profit strategies, to minimize risks to the greatest extent possible.",
      },
      {
        icon: "💰",
        title: "Stable Profitability",
        desc: "Hedging arbitrage strategies profit by utilizing the regression or convergence of price differences, resulting in relatively stable profits.",
      },
      {
        icon: "🎯",
        title: "Minimum Risk",
        desc: "Simultaneously buying and selling relevant contracts effectively reduces market risk and unilateral risk.",
      },
      {
        icon: "🏆",
        title: "High Winning Rate",
        desc: "Quantitative models and historical extreme value recognition have improved the winning rate of trades and reduced the likelihood of losses.",
      },
      {
        icon: "⚙️",
        title: "Automation",
        desc: "Automated trading by the system saves traders' time and energy, avoiding human errors.",
      },
      {
        icon: "🌐",
        title: "Suitable For Various Markets",
        desc: "Hedge arbitrage strategies are applicable in both volatile and stable market environments.",
      },
    ],
  },
  {
    id: "forex-ea",
    nav: "Darkhaven Forex EA Asset Management",
    title: "Darkhaven Forex EA Quantitative Asset Management System",
    subtitle: "AI-Powered Autonomous Forex Trading",
    description:
      "Darkhaven Forex EA Quantitative Asset Management System is a powerful trading system designed specifically for quantitative trading in the forex market. It combines artificial intelligence (AI) technology, deep learning, and autonomous trading, providing investors with stable profit and risk avoidance investment opportunities. The Darkhaven system utilizes advanced AI algorithms and deep learning models to analyze historical data and real-time market dynamics, and identify trading opportunities. It utilizes autonomous trading function to automatically execute trading instructions without the need for manual intervention.",
    features: [
      {
        icon: "🧠",
        title: "AI Algorithms And Deep Learning",
        desc: "The system adopts cutting-edge AI algorithms and deep learning models to learn market patterns and trends from massive amounts of data.",
      },
      {
        icon: "🤖",
        title: "Autonomous Trading",
        desc: "The system implements autonomous trading, and once a trading opportunity is identified, it will automatically execute trading instructions, freeing up traders' hands.",
      },
      {
        icon: "🗂️",
        title: "Multi Strategy Trading",
        desc: "The system supports multiple trading strategies, including trend tracking, reversal trading, and arbitrage trading, to adapt to different market conditions.",
      },
      {
        icon: "🛡️",
        title: "Strict Risk Control Mechanism",
        desc: "The system is equipped with strict risk control mechanisms, including position management, stop loss, and take profit strategies, to minimize risks to the greatest extent possible.",
      },
      {
        icon: "☁️",
        title: "Cloud Deployment",
        desc: "The system is deployed on cloud servers to ensure the stability and security of transactions.",
      },
      {
        icon: "💎",
        title: "Stable Profitability",
        desc: "AI algorithms and deep learning models have improved the accuracy of trading, providing investors with stable profit opportunities.",
      },
      {
        icon: "🔐",
        title: "Risk-Aversion",
        desc: "Strict risk control mechanisms and autonomous trading functions help investors avoid market risks and protect fund security.",
      },
      {
        icon: "⏳",
        title: "Save Time And Effort",
        desc: "Quantitative models and historical extreme value recognition have improved the winning rate of trades and reduced the likelihood of losses.",
      },
      {
        icon: "🕐",
        title: "24 * 5 All-Weather Trading",
        desc: "The system operates 24/7, seizes every profit opportunity, and achieves maximum profit.",
      },
    ],
  },
  {
    id: "ai-customer-service",
    nav: "Darkhaven AI Customer Service System",
    title: "Darkhaven AI Customer Service System",
    subtitle: "Autonomous GPT-Powered Customer Support",
    description:
      "The Darkhaven AI Customer Service System is an autonomous AI customer service system trained using GPT, designed to provide businesses with a 24/7, efficient, and low-cost customer service solution. The Darkhaven system leverages a pre-trained GPT model, utilizing natural language processing and machine learning technologies to understand various customer inquiries and generate accurate, comprehensive responses. It can autonomously handle customer inquiries in private domains, achieving automated sales and customer service.",
    features: [
      {
        icon: "🤖",
        title: "Autonomous Model Trained with GPT",
        desc: "The system uses advanced GPT models, which have strong language understanding and generation capabilities, enabling it to handle complex and diverse customer questions.",
      },
      {
        icon: "⚡",
        title: "Handle 10,000 Customers in 1 Minute",
        desc: "The system processes at extremely high speeds, handling over 10,000 customer inquiries per minute, significantly increasing customer service efficiency.",
      },
      {
        icon: "💯",
        title: "Save 80% of Staff",
        desc: "By automating customer service tasks, the system reduces significant labor costs, allowing businesses to allocate human resources to more valuable work.",
      },
      {
        icon: "❤️",
        title: "Enhance Customer Satisfaction",
        desc: "Quick and accurate responses improve customer satisfaction and enhance brand image.",
      },
      {
        icon: "🕐",
        title: "24/7 Service",
        desc: "Available 24/7, providing uninterrupted service to customers, enhancing their experience.",
      },
      {
        icon: "🌐",
        title: "Expand Service Reach",
        desc: "The system can handle customer inquiries from multiple channels, expanding the reach of a business's services.",
      },
    ],
    footer:
      "The Darkhaven AI Customer Service System is a powerful, efficient, and cost-effective customer service solution that helps businesses improve customer satisfaction, reduce operational costs, and increase efficiency. By leveraging advanced AI technology, the system can handle customer inquiries around the clock and provide comprehensive customer support for companies.",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export default function PlatformsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsScrolling(true);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <div className="pt-20 pb-10 sm:pt-28 sm:pb-12 bg-gradient-to-b from-slate-50 to-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-blue uppercase tracking-widest">Our Platforms</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4 text-text-dark">
            Technology <span className="shimmer-blue">Platforms & Systems</span>
          </h1>
          <p className="text-text-dark-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A suite of institutional-grade trading, CRM, and AI systems built for brokers, exchanges, and investors.
          </p>
        </div>
      </div>

      {/* Sticky Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex gap-8 lg:gap-12 relative">

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
            <div className="sticky top-28 rounded-2xl border border-black/[0.07] bg-white shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-slate-50 border-b border-black/[0.06]">
                <p className="text-xs font-semibold text-text-dark-3 uppercase tracking-widest">Platforms</p>
              </div>
              <nav className="py-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 border-l-2 ${
                      activeSection === s.id
                        ? "border-blue bg-blue/[0.06] text-blue font-medium"
                        : "border-transparent text-text-dark-3 hover:bg-slate-50 hover:text-text-dark"
                    }`}
                  >
                    {s.nav}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile Tabs */}
          <div className="lg:hidden w-full mb-8 -mx-4 px-4 overflow-x-auto">
            <div className="flex gap-2 pb-2 min-w-max">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    activeSection === s.id
                      ? "bg-blue text-white shadow-md shadow-blue/20"
                      : "bg-slate-100 text-text-dark-3 hover:bg-slate-200"
                  }`}
                >
                  {s.nav}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-20 sm:space-y-28">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                {/* Section Header */}
                <div className="mb-8 sm:mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/[0.08] border border-blue/15 mb-4">
                    <span className="text-xs font-semibold text-blue uppercase tracking-wide">{section.subtitle}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-dark mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-text-dark-3 text-sm sm:text-base leading-relaxed max-w-3xl">
                    {section.description}
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                  {section.features.map((feat, j) => (
                    <div
                      key={j}
                      className="group bg-light rounded-xl border border-light-2 p-5 hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue/[0.08] border border-blue/15 flex items-center justify-center mb-4 text-lg group-hover:bg-blue/[0.12] transition-colors">
                        {feat.icon}
                      </div>
                      <h3 className="text-sm sm:text-[15px] font-semibold text-text-dark mb-2 leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-text-dark-3 text-xs sm:text-sm leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Optional Footer Text */}
                {"footer" in section && section.footer && (
                  <p className="mt-8 text-text-dark-3 text-sm sm:text-base leading-relaxed border-t border-black/[0.06] pt-6">
                    {section.footer}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
