import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    "Advanced analytics",
    "24/7 customer support",
    "Custom integrations",
    "Unlimited users",
  ];

  const plans = [
    { name: 'Basic', price: '$9', features: features.slice(0, 2) },
    { name: 'Pro', price: '$29', features: features.slice(0, 3) },
    { name: 'Enterprise', price: '$99', features: features },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Supercharge Your Workflow
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Our SaaS platform helps teams collaborate, manage projects, and deliver results faster than ever before.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`${selectedPlan === plan.name.toLowerCase() ? 'border-blue-500 border-2' : ''}`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-3xl font-bold">{plan.price}/mo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={selectedPlan === plan.name.toLowerCase() ? 'default' : 'outline'}
                  onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                >
                  {selectedPlan === plan.name.toLowerCase() ? 'Current Plan' : 'Select Plan'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers and take your productivity to the next level.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">Start Your Free Trial</Button>
      </section>
    </div>
  );
};

export default Index;
