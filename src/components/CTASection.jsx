import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

function CTASection() {
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
}

export default CTASection;