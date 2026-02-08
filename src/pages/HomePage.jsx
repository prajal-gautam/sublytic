import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  Smartphone, Download, Star, Users, LayoutDashboard, MousePointerClick,
  PieChart, Bell, Plus, Link, LayoutGrid, AlertCircle, Ban, Wallet,
  BellRing, CheckCircle2, Calendar, ArrowRight, ArrowUpRight,
  Facebook, Twitter, Linkedin, Instagram, Menu, X, Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

/* -------------------------------------------------------------------------- */
/*                                Header Section                              */
/* -------------------------------------------------------------------------- */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Sublytic
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['What Is It?', 'Features', 'How It Works'].map((item, idx) => {
              const ids = ['what-is', 'features', 'how-it-works'];
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSection(ids[idx])}
                  className={`text-sm font-medium transition-colors ${
                    scrolled 
                      ? 'text-gray-600 hover:text-blue-600' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              )
            })}
            
            <Button 
              onClick={() => scrollToSection('download')}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Download App
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white rounded-b-xl shadow-xl mt-4"
            >
              <div className="py-4 space-y-2 px-6 text-black">
                <button
                  onClick={() => scrollToSection('what-is')}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  What Is Sublytic?
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  How It Works
                </button>
                <div className="pt-2 pb-2">
                  <Button 
                    className="w-full bg-blue-600 text-white"
                    onClick={() => scrollToSection('download')}
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

/* -------------------------------------------------------------------------- */
/*                                Hero Section                                */
/* -------------------------------------------------------------------------- */
const Hero = () => {
  const { toast } = useToast();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    scrollToSection('what-is');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1655818145332-28100d77ffaf"
          alt="Person frustrated with too many subscriptions and bills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/80 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Stop the subscription drain
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Stop Wasting Money on<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Forgotten Subscriptions
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
              Sublytic helps you manage all subscriptions in one place. See what you're paying for, cancel with one click, and save money instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-7 shadow-lg shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
                onClick={() => scrollToSection('download')}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/40 text-lg px-8 py-7 transition-all duration-300"
                onClick={handleLearnMore}
              >
                <Info className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-xs overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User avatar" />
                  </div>
                ))}
              </div>
              <p>Join 50,000+ users saving money today</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                            What Is Sublytic Section                        */
/* -------------------------------------------------------------------------- */
const WhatIsSublytic = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Save Money",
      description: "Identify and cancel forgotten subscriptions that are draining your bank account."
    },
    {
      icon: LayoutGrid,
      title: "Unified View",
      description: "Connect Netflix, Spotify, and more. See everything in one beautiful dashboard."
    },
    {
      icon: BellRing,
      title: "Never Forget",
      description: "Get smart alerts before renewals so you're never charged for things you don't use."
    },
    {
      icon: CheckCircle2,
      title: "Total Control",
      description: "Manage your digital life with ease. Cancel unwanted services with a single click."
    }
  ];

  return (
    <section id="what-is" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
              The Problem & Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What is Sublytic?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We've all been there: scanning a credit card statement only to find charges for subscriptions we forgot about months ago. 
                <span className="font-semibold text-gray-900"> Forgotten subscriptions cost the average user over $300 every year.</span>
              </p>
              <p>
                Sublytic is the solution. It's a powerful, unified dashboard that connects to your accounts to find every active subscription. 
                It brings them all into one place, giving you the power to track spending, set reminders, and cancel unwanted services instantly.
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-white shadow-md">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                               Features Section                             */
/* -------------------------------------------------------------------------- */
const Features = () => {
  const features = [
    {
      type: 'image',
      icon: LayoutDashboard,
      title: 'Unified Dashboard',
      description: 'View all subscriptions from Netflix, Spotify, Adobe, and more in one unified place. No more switching between apps or checking bank statements.',
      image: 'https://images.unsplash.com/photo-1610534005634-c469a3bacad5',
      colSpan: 'md:col-span-2'
    },
    {
      type: 'standard',
      icon: MousePointerClick,
      title: 'One-Click Cancellation',
      description: 'Cancel unwanted subscriptions directly from Sublytic without logging into each app or calling customer support.',
      colSpan: 'md:col-span-1'
    },
    {
      type: 'image',
      icon: PieChart,
      title: 'Spending Insights',
      description: 'Track exactly how much you are spending on subscriptions monthly. Visualize your expenses and identify where to cut costs.',
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0',
      colSpan: 'md:col-span-2'
    },
    {
      type: 'standard',
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Get notified 3 days before any renewal. Never get caught by a surprise annual fee again.',
      colSpan: 'md:col-span-1'
    },
    {
      type: 'standard',
      icon: Plus,
      title: 'More Integrations',
      description: 'We are constantly adding new services. Sublytic grows with your digital life.',
      colSpan: 'md:col-span-3 lg:col-span-1',
      bgClass: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to regain control over your recurring expenses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isImageCard = feature.type === 'image';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`
                  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white
                  ${feature.colSpan}
                  ${feature.bgClass ? feature.bgClass : ''}
                  flex flex-col
                `}
              >
                {isImageCard && (
                  <div className="h-48 overflow-hidden relative group">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white flex items-center gap-2">
                       <Icon size={20} className="text-white" />
                       <span className="font-semibold tracking-wide text-sm uppercase">Feature Preview</span>
                    </div>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col justify-start">
                  {!isImageCard && (
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                      <Icon size={24} />
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                              How It Works Section                          */
/* -------------------------------------------------------------------------- */
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Link,
      title: "Connect Your Accounts",
      description: "Securely link your bank account or manually add subscriptions from Netflix, Spotify, Disney+, and 1000+ other supported services."
    },
    {
      number: "02",
      icon: LayoutGrid,
      title: "View All Subscriptions",
      description: "Sublytic automatically detects recurring payments and organizes them into one unified, easy-to-read dashboard."
    },
    {
      number: "03",
      icon: AlertCircle,
      title: "Identify Unused Services",
      description: "Our AI highlights subscriptions you haven't used recently or duplicates that are costing you extra money every month."
    },
    {
      number: "04",
      icon: Ban,
      title: "Cancel or Set Reminders",
      description: "Cancel unwanted services with a single tap, or set smart reminders so you're never surprised by a renewal again."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Chaos to Control in 4 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Regaining financial peace of mind has never been this easy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 -z-10 transform translate-y-4"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-white pt-4"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-blue-50 shadow-lg flex items-center justify-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                      <Icon size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm px-4">
                    {step.description}
                  </p>
                </div>
                
                {/* Mobile Connector Arrow */}
                {index < steps.length - 1 && (
                   <div className="lg:hidden flex justify-center py-6 text-gray-200">
                     <div className="w-0.5 h-12 bg-gradient-to-b from-blue-100 to-purple-100"></div>
                   </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Download Section                              */
/* -------------------------------------------------------------------------- */
const DownloadSection = () => {
  const { toast } = useToast();

  const handleDownload = (platform) => {
    toast({
      title: `Redirecting to ${platform}`,
      description: "Sublytic is coming soon to your favorite store! 🚀",
    });
  };

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-gray-900">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Download Sublytic Today
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the community of smart savers. Take control of your financial life in minutes.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Users className="text-blue-400" size={18} />
              <span>Join <span className="text-white">50,000+</span> users</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Star className="text-yellow-400 fill-yellow-400" size={18} />
              <span>Over <span className="text-white">$2M</span> saved</span>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg h-16 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto flex items-center gap-3"
              onClick={() => handleDownload('App Store')}
            >
              <Smartphone size={24} className="text-gray-900" />
              <div className="text-left">
                <div className="text-xs font-medium text-gray-500 uppercase leading-none">Download on the</div>
                <div className="text-lg font-bold leading-none mt-1">App Store</div>
              </div>
            </Button>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-16 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto flex items-center gap-3 border border-white/10"
              onClick={() => handleDownload('Google Play')}
            >
              <Download size={24} />
              <div className="text-left">
                <div className="text-xs font-medium text-blue-100 uppercase leading-none">Get it on</div>
                <div className="text-lg font-bold leading-none mt-1">Google Play</div>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 CTA Section                                */
/* -------------------------------------------------------------------------- */
const CTASection = () => {
  const { toast } = useToast();

  const handleStartTrial = () => {
    toast({
      title: "Trial Request Received",
      description: "Redirecting to sign up page...",
    });
  };

  const handleScheduleDemo = () => {
    toast({
      title: "Demo Requested",
      description: "Our team will contact you shortly to schedule.",
    });
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img
            src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/20 text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking companies using Sublytic to make data-driven decisions. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto font-bold"
              onClick={handleStartTrial}
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 text-lg px-10 py-7 shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={handleScheduleDemo}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                               Footer Section                               */
/* -------------------------------------------------------------------------- */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Sublytic</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering businesses with intelligent data analytics. Transform your raw data into actionable growth strategies.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-sm">
              {['Features', 'Pricing', 'Integrations', 'Enterprise', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-sm">
              {['Documentation', 'API Reference', 'Community', 'Blog', 'Case Studies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-sm">
              {['About Us', 'Careers', 'Legal', 'Privacy Policy', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Sublytic Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------------------- */
/*                             Main Page Export                               */
/* -------------------------------------------------------------------------- */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sublytic - Stop Wasting Money on Forgotten Subscriptions</title>
        <meta 
          name="description" 
          content="Manage all your subscriptions in one place. See what you're paying for, cancel with one click, and save money with Sublytic." 
        />
      </Helmet>
      
      {/* 
        The Header component is fixed position (fixed top-0 left-0).
        It will overlay content below it.
      */}
      <Header />
      
      <main>
        <Hero />
        <WhatIsSublytic />
        <Features />
        <HowItWorks />
        <DownloadSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}