import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon, ChevronDownIcon, DocumentTextIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Helmet } from 'react-helmet';

function App() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPriceDetailsOpen, setIsPriceDetailsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [solPrice, setSolPrice] = useState<number | null>(null);

  // Fetch SOL price every 30 seconds
  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await response.json();
        setSolPrice(data.solana.usd);
      } catch (error) {
        console.error('Error fetching SOL price:', error);
      }
    };

    fetchSolPrice();
    const interval = setInterval(fetchSolPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSolToUsd = (solAmount: number): string => {
    if (!solPrice) return '...';
    const usdAmount = solAmount * solPrice;
    if (usdAmount >= 1000) {
      return `$${(usdAmount / 1000).toFixed(1)}K`;
    }
    return `$${usdAmount.toFixed(2)}`;
  };

  const formatTimeRemaining = (expiryTimestamp: number) => {
    const remaining = expiryTimestamp - currentTime;
    if (remaining <= 0) return 'Expired';
    
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    return `${minutes}m`;
  };

  const offers = [
    { price: 4.0234, from: 'FkzyoR', expiryTimestamp: currentTime + (27 * 24 * 60 * 60 * 1000) },
    { price: 3.501, from: '8Gwdgu', expiryTimestamp: currentTime + (30 * 24 * 60 * 60 * 1000) },
    { price: 3.3364, from: 'FkzyoR', expiryTimestamp: currentTime + (29 * 24 * 60 * 60 * 1000) },
    { price: 2.1589, from: '2UUuP2', expiryTimestamp: currentTime + (5 * 24 * 60 * 60 * 1000) },
    { price: 1.4229, from: '3CEyWa', expiryTimestamp: currentTime + (2 * 24 * 60 * 60 * 1000) },
    { price: 1.3935, from: 'BNy21P', expiryTimestamp: currentTime + (60 * 24 * 60 * 60 * 1000) },
    { price: 0.157, from: '3CEyWa', expiryTimestamp: currentTime + (2 * 24 * 60 * 60 * 1000) },
    { price: 0.1472, from: 'BNy21P', expiryTimestamp: currentTime + (730 * 24 * 60 * 60 * 1000) },
    { price: 0.0981, from: 'Csqiv6', expiryTimestamp: currentTime + (60 * 24 * 60 * 60 * 1000) },
    { price: 0.0096, from: '47uHJz', expiryTimestamp: currentTime + (240 * 24 * 60 * 60 * 1000) },
    { price: 0.001, from: 'EwTUSx', expiryTimestamp: currentTime + (13 * 24 * 60 * 60 * 1000) },
    { price: 0.0001, from: 'EwTUSx', expiryTimestamp: currentTime + (30 * 24 * 60 * 60 * 1000) },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://magiceden.us/';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'https://magiceden.us/';
  };

  return (
    <div className="min-h-screen bg-magic-eden-primary text-white">
      <Helmet>
        <title>#2675 | Retardio Cousins | Magic Eden - NFT Marketplace</title>
        <meta name="description" content="View and trade Retardio Cousins #2675 on Magic Eden, the leading NFT marketplace on Solana." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiceden.io/item-details/4FN94SBtTiaGnvYVvGbDtsB3VpiLzN1mSVQNrGeGyJFz" />
        <meta property="og:title" content="#2675 | Retardio Cousins | Magic Eden - NFT Marketplace" />
        <meta property="og:description" content="View and trade Retardio Cousins #2675 on Magic Eden, the leading NFT marketplace on Solana." />
        <meta property="og:image" content="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2FJ2Q2j6kpSg7tq8JzueCHNTQNcyNnQkvr85RhsFnYZWeG%2Ff7ac2fd2-13c4-4ca1-85ee-962772caf73e%2F2674" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://magiceden.io/item-details/4FN94SBtTiaGnvYVvGbDtsB3VpiLzN1mSVQNrGeGyJFz" />
        <meta name="twitter:title" content="#2675 | Retardio Cousins | Magic Eden - NFT Marketplace" />
        <meta name="twitter:description" content="View and trade Retardio Cousins #2675 on Magic Eden, the leading NFT marketplace on Solana." />
        <meta name="twitter:image" content="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2FJ2Q2j6kpSg7tq8JzueCHNTQNcyNnQkvr85RhsFnYZWeG%2Ff7ac2fd2-13c4-4ca1-85ee-962772caf73e%2F2674" />
      </Helmet>

      {/* Header */}
      <header className="border-b border-magic-eden-secondary">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-8">
              <img 
                src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/271035/ME_Full_Gradient.png" 
                alt="Magic Eden" 
                className="h-8"
              />
              <div className="flex space-x-6">
                <a href="#" onClick={handleNavClick} className="font-semibold hover:text-magic-eden-accent transition-all duration-200 hover:scale-105">Trade</a>
                <a href="#" onClick={handleNavClick} className="font-semibold hover:text-magic-eden-accent transition-all duration-200 hover:scale-105">Mint</a>
                <a href="#" onClick={handleNavClick} className="font-semibold hover:text-magic-eden-accent transition-all duration-200 hover:scale-105">Create</a>
                <a href="#" onClick={handleNavClick} className="font-semibold hover:text-magic-eden-accent transition-all duration-200 hover:scale-105">Swap</a>
              </div>
            </div>
            <button className="h-[40px] py-0 px-3 inline-flex justify-center items-center rounded text-sm transition-all duration-200 bg-magic-eden-accent hover:bg-magic-eden-accent/90 active:bg-magic-eden-accent/80 text-white font-semibold hover:scale-105 open-modal">
              Log In
            </button>
          </div>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search collections on Magic Eden"
              className="w-full h-12 pl-12 pr-4 rounded-lg bg-magic-eden-secondary border border-gray-700 focus:border-magic-eden-accent focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
            />
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </form>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image and About */}
          <div className="space-y-6">
            <div className="bg-magic-eden-secondary rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
              <img 
                src="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2FJ2Q2j6kpSg7tq8JzueCHNTQNcyNnQkvr85RhsFnYZWeG%2Ff7ac2fd2-13c4-4ca1-85ee-962772caf73e%2F2674"
                alt="#2675"
                className="w-full aspect-square object-cover rounded-lg"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* About Section */}
            <div className="bg-magic-eden-secondary rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg">
              <button 
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-magic-eden-primary/50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-magic-eden-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold hover:text-magic-eden-accent transition-colors duration-200">About Retardio Cousins</span>
                </div>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://x.com/retardiolove" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-magic-eden-accent transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.retardio.xyz/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-magic-eden-accent transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 16.057V7.943L17.057 12 11 16.057z"/>
                    </svg>
                  </a>
                  <ChevronDownIcon className={`w-5 h-5 transition-all duration-200 ${isAboutOpen ? 'transform rotate-180' : ''}`} />
                </div>
              </button>
              
              {isAboutOpen && (
                <div className="px-6 py-4 space-y-4 animate-fadeIn">
                  <img 
                    src="https://img-cdn.magiceden.dev/rs:fill:250:0:0/plain/https%3A%2F%2Fwe-assets.pinit.io%2FJ2Q2j6kpSg7tq8JzueCHNTQNcyNnQkvr85RhsFnYZWeG%2Ff7ac2fd2-13c4-4ca1-85ee-962772caf73e%2F79"
                    alt="Retardio Cousins"
                    className="w-full aspect-video object-cover rounded-lg"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <p className="text-gray-400 leading-relaxed">
                    4444 Retardio Cousins on the Solami love chain.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold hover:text-magic-eden-accent transition-colors duration-200">#2675</h2>
              <div className="flex items-center space-x-2">
                <p className="text-gray-400 font-semibold hover:text-white transition-colors duration-200">Retardio Cousins</p>
                <div className="group relative">
                  <svg className="w-5 h-5 text-magic-eden-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-12S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-magic-eden-primary rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg">
                    This is a verified creator
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 border-b border-magic-eden-secondary">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-4 px-2 font-semibold transition-colors duration-200 ${
                  activeTab === 'overview'
                    ? 'text-magic-eden-accent border-b-2 border-magic-eden-accent'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('offers')}
                className={`pb-4 px-2 font-semibold transition-colors duration-200 ${
                  activeTab === 'offers'
                    ? 'text-magic-eden-accent border-b-2 border-magic-eden-accent'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Offers
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' ? (
              <>
                {/* Price Section */}
                <div className="bg-magic-eden-secondary rounded-xl p-6 space-y-6 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <span className="text-gray-400 font-semibold">Total Price</span>
                      <div className="flex items-baseline space-x-2">
                        <div className="text-2xl font-semibold hover:text-magic-eden-accent transition-colors duration-200">6.291 SOL</div>
                        <div className="text-sm text-gray-500">| {formatSolToUsd(6.291)}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 group relative">
                      <span className="cursor-help hover:text-white transition-colors duration-200">Owned by: 9NJj...uS86</span>
                      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-magic-eden-primary rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg">
                        9NJjVNBUeJMJY39HDYAykm91PESFbxPyyN3wyZkYuS86
                      </div>
                    </div>
                  </div>

                  {/* Price Details Dropdown */}
                  <div className="border-t border-gray-700 pt-4">
                    <button 
                      onClick={() => setIsPriceDetailsOpen(!isPriceDetailsOpen)}
                      className="w-full flex items-center justify-between hover:text-magic-eden-accent transition-colors duration-200"
                    >
                      <span className="font-semibold">Details</span>
                      <ChevronDownIcon className={`w-5 h-5 transition-all duration-200 ${isPriceDetailsOpen ? 'transform rotate-180' : ''}`} />
                    </button>
                    
                    {isPriceDetailsOpen && (
                      <div className="mt-4 space-y-3 animate-fadeIn">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">List Price</span>
                          <div className="text-right">
                            <div className="font-semibold">0.000 SOL</div>
                            <div className="text-sm text-gray-500">($0.00)</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Taker Fee (2%)</span>
                          <div className="text-right">
                            <div className="font-semibold">0.000 SOL</div>
                            <div className="text-sm text-gray-500">($0.00)</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Royalty (5%)</span>
                          <div className="text-right">
                            <div className="font-semibold">0.000 SOL</div>
                            <div className="text-sm text-gray-500">($0.00)</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button className="h-[48px] py-0 px-6 inline-flex justify-center items-center rounded-lg text-base transition-all duration-200 bg-magic-eden-accent hover:bg-magic-eden-accent/90 active:bg-magic-eden-accent/80 text-white font-semibold w-full hover:scale-[1.02] hover:shadow-lg open-modal">
                    Connect Wallet
                  </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-magic-eden-secondary rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                    <div className="text-gray-400 font-semibold mb-1 hover:text-white transition-colors duration-200">List Price</div>
                    <div className="text-lg font-semibold hover:text-magic-eden-accent transition-colors duration-200">6.291 SOL</div>
                    <div className="text-sm text-gray-500">{formatSolToUsd(6.291)}</div>
                  </div>
                  <div className="bg-magic-eden-secondary rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                    <div className="text-gray-400 font-semibold mb-1 hover:text-white transition-colors duration-200">Floor Price</div>
                    <div className="text-lg font-semibold hover:text-magic-eden-accent transition-colors duration-200">5.807 SOL</div>
                    <div className="text-sm text-gray-500">{formatSolToUsd(5.807)}</div>
                  </div>
                  <div className="bg-magic-eden-secondary rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                    <div className="text-gray-400 font-semibold mb-1 hover:text-white transition-colors duration-200">Floor Diff</div>
                    <div className="text-lg font-semibold hover:text-magic-eden-accent transition-colors duration-200">8.33%</div>
                  </div>
                  <div className="bg-magic-eden-secondary rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                    <div className="text-gray-400 font-semibold mb-1 hover:text-white transition-colors duration-200">Top Offer</div>
                    <div className="text-lg font-semibold hover:text-magic-eden-accent transition-colors duration-200">5.206 SOL</div>
                    <div className="text-sm text-gray-500">{formatSolToUsd(5.206)}</div>
                  </div>
                </div>

                {/* Details Dropdown */}
                <div className="bg-magic-eden-secondary rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg">
                  <button 
                    onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-magic-eden-primary/50 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <DocumentTextIcon className="w-5 h-5 text-magic-eden-accent" />
                      <span className="font-semibold hover:text-magic-eden-accent transition-colors duration-200">Details</span>
                    </div>
                    <ChevronDownIcon className={`w-5 h-5 transition-all duration-200 ${isDetailsOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {isDetailsOpen && (
                    <div className="px-6 py-4 space-y-3 animate-fadeIn">
                      <div className="flex justify-between items-center hover:bg-magic-eden-primary/30 p-2 rounded-lg transition-colors duration-200">
                        <span className="text-gray-400">Mint</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold hover:text-magic-eden-accent transition-colors duration-200">4FN9...yJFz</span>
                          <a 
                            href="https://solscan.io/token/4FN94SBtTiaGnvYVvGbDtsB3VpiLzN1mSVQNrGeGyJFz?cluster=mainnet" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-magic-eden-accent transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-between items-center hover:bg-magic-eden-primary/30 p-2 rounded-lg transition-colors duration-200">
                        <span className="text-gray-400">Owner</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold hover:text-magic-eden-accent transition-colors duration-200">9NJj...uS86</span>
                          <a 
                            href="https://solscan.io/account/9NJjVNBUeJMJY39HDYAykm91PESFbxPyyN3wyZkYuS86?cluster=mainnet" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-magic-eden-accent transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-between items-center hover:bg-magic-eden-primary/30 p-2 rounded-lg transition-colors duration-200">
                        <span className="text-gray-400">On-chain Collection</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold hover:text-magic-eden-accent transition-colors duration-200">DUX8...aXKm</span>
                          <a 
                            href="https://solscan.io/token/DUX8SZXLKigc84BBUcYjA7PuKe2SFwXFtQVgwmBsaXKm?cluster=mainnet" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-magic-eden-accent transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-between items-center hover:bg-magic-eden-primary/30 p-2 rounded-lg transition-colors duration-200">
                        <span className="text-gray-400">Token Address</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold hover:text-magic-eden-accent transition-colors duration-200">E1Fw...2MuB</span>
                          <a 
                            href="https://solscan.io/account/E1FwE3yKBF1EoxUdVofuBSPDeuKYTjzqsXAuvjbz2MuB?cluster=mainnet" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-magic-eden-accent transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-between items-center hover:bg-magic-eden-primary/30 p-2 rounded-lg transition-colors duration-200">
                        <span className="text-gray-400">Token Standard</span>
                        <span className="font-semibold hover:text-magic-eden-accent transition-colors duration-200">Programmable NFT</span>
                      </div>
                      <div className="flex justify-between items-center hover:bg-magic-eden-primary/30 p-2 rounded-lg transition-colors duration-200">
                        <span className="text-gray-400">Royalties</span>
                        <span className="font-semibold hover:text-magic-eden-accent transition-colors duration-200">5%</span>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                {offers.map((offer, index) => (
                  <div key={index} className="bg-magic-eden-secondary rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="flex items-baseline space-x-2">
                          <div className="text-lg font-semibold hover:text-magic-eden-accent transition-colors duration-200">
                            {offer.price} SOL
                          </div>
                          <div className="text-sm text-gray-500">({formatSolToUsd(offer.price)})</div>
                        </div>
                        <div className="text-sm text-gray-400">
                          From: {offer.from}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">
                        Expires in: {formatTimeRemaining(offer.expiryTimestamp)}
                      </div>
                      <button className="h-[40px] py-0 px-4 inline-flex justify-center items-center rounded-lg text-sm transition-all duration-200 bg-magic-eden-accent hover:bg-magic-eden-accent/90 active:bg-magic-eden-accent/80 text-white font-semibold hover:scale-[1.02] hover:shadow-lg open-modal">
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App; 
