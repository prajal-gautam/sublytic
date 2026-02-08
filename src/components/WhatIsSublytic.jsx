import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, BellRing, LayoutGrid, CheckCircle2 } from 'lucide-react';

function WhatIsSublytic() {
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
}

export default WhatIsSublytic;