import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, MousePointerClick, PieChart, Bell, Plus } from 'lucide-react';

function Features() {
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
}

export default Features;