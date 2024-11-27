import { Check } from 'lucide-react';

const plans = [
{
  name: "AI Agents Builder",
  price: "1499",
  description: "Build custom AI Agents for various use cases",
  features: [
    "Dedicated AI Agent Developer/s",
    "Agent performance optimization",
    "Basic training session included",
  ],
  popular: true
},
{
  name: "Full Workflow Automation",
  price: "2499",
  description: "Automate Complete workflow using AI Agents",
  features: [
    "Complete workflow automation",
    "Custom template development",
    "Custom integration development",
    "Monthly strategy sessions",
    "Team training sessions",
  ],
  popular: true
},
];

export function PricingSection() {
return (
  <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Choose the perfect plan for your needs. All plans include our core features with different levels of processing power and support.
      </p>
    </div>

    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`glass-card p-8 relative group transition-all duration-300 hover:scale-105 ${
              plan.popular ? 'border-blue-500/50 hover:border-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {plan.name}
              </h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                {plan.price !== "Custom" && <span className="text-lg">$</span>}
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-400">onwards</span>}
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);
}
