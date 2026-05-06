import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    description: "Essential branding and web presence for startups.",
    monthlyPrice: "£2,500",
    annualPrice: "£24,000",
    features: [
      { name: "Brand Identity System", included: true },
      { name: "5-Page Webflow Website", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "CMS Integration", included: false },
      { name: "Monthly Analytics Report", included: false },
      { name: "Dedicated Account Manager", included: false },
    ],
    cta: "Get Started"
  },
  {
    name: "Growth",
    description: "Complete digital transformation for scaling businesses.",
    monthlyPrice: "£4,800",
    annualPrice: "£46,000",
    isPopular: true,
    features: [
      { name: "Advanced Brand Strategy", included: true },
      { name: "Custom React/Next.js Website", included: true },
      { name: "Technical SEO & Performance", included: true },
      { name: "Headless CMS Integration", included: true },
      { name: "Bi-weekly Strategy Calls", included: true },
      { name: "24/7 Priority Support", included: false },
    ],
    cta: "Scale Now"
  },
  {
    name: "Enterprise",
    description: "Dedicated design and development team for large organizations.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      { name: "Full-Service Creative Retainer", included: true },
      { name: "Enterprise Web Application", included: true },
      { name: "Global CDN & Security", included: true },
      { name: "Custom API Integrations", included: true },
      { name: "Dedicated Agile Squad", included: true },
      { name: "SLA & Priority Support", included: true },
    ],
    cta: "Contact Sales"
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Simple, transparent <br className='xs:block hidden' />
            <span className="text-gradient">pricing.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Choose the perfect plan for your business needs. No hidden fees.
          </motion.p>

          {/* Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-white/10 rounded-full p-1 relative transition-colors duration-300 hover:bg-white/20"
            >
              <motion.div
                className="w-6 h-6 bg-primary rounded-full shadow-lg"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annually <span className="text-green-400 text-xs ml-1">(Save 20%)</span>
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`relative p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' 
                  : 'bg-card border-white/10 hover:border-white/30'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                   <AnimatePresence mode="wait">
                    <motion.span
                        key={isAnnual ? "annual" : "monthly"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-4xl font-bold"
                    >
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </motion.span>
                   </AnimatePresence>
                   {plan.monthlyPrice !== "Custom" && (
                        <span className="text-gray-500 text-sm">/{isAnnual ? 'yr' : 'mo'}</span>
                   )}
                </div>
                {isAnnual && plan.monthlyPrice !== "Custom" && (
                     <span className="text-green-400 text-xs font-medium">Billed annually</span>
                )}
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${feature.included ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-600'}`}>
                        {feature.included ? <Check size={12} /> : <X size={12} />}
                    </div>
                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>{feature.name}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-white/10 text-white hover:bg-white hover:text-black'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
