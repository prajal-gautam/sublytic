import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Info } from 'lucide-react';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sublytic - Stop Wasting Money on Forgotten Subscriptions</title>
        <meta 
          name="description" 
          content="Manage all your subscriptions in one place. See what you're paying for, cancel with one click, and save money with Sublytic." 
        />
      </Helmet>
      
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1655818145332-28100d77ffaf"
            alt="Person frustrated with too many subscriptions and bills"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/80 to-blue-900/40"></div>
          
          {/* Subtle animated mesh gradient */}
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
                  Download App
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/40 text-lg px-8 py-7 transition-all duration-300"
                  onClick={() => scrollToSection('what-is')}
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
    </>
  );
}

export default Hero;