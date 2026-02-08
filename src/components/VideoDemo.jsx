import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-demo" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Sublytic - Your Path to Financial Freedom
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how Sublytic is changing the way people manage their money and take control of their financial future.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
        >
          {/* Video */}
          <video
            src="/Sublytics.mp4"
            controls={isPlaying}
            autoPlay={isPlaying}
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors"
              onClick={() => setIsPlaying(true)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl"
              >
                <Play size={40} className="text-blue-600 ml-1" fill="currentColor" />
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Instant Overview",
              description: "See all your subscriptions at a glance"
            },
            {
              title: "Smart Detection",
              description: "AI identifies unused and duplicate services"
            },
            {
              title: "One-Click Cancel",
              description: "Manage subscriptions with just a tap"
            }
          ].map((feature, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default VideoDemo;
