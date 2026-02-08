import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Smartphone, Download, Star, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

function DownloadSection() {
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
}

export default DownloadSection;