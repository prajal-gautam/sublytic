import React from 'react';
import { motion } from 'framer-motion';
import { Link, LayoutGrid, AlertCircle, Ban } from 'lucide-react';

function HowItWorks() {
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
}

export default HowItWorks;