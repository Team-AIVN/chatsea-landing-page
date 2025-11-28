import React from 'react';
import { User, Bell, Map as MapIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

const features = [
  {
    icon: User,
    title: "Connected Contacts",
    description: "Connected contacts with asking users and reviews to explain in your bundle.",
    color: "text-blue-600"
  },
  {
    icon: Bell,
    title: "Service Subscription",
    description: "Stay correlated service subscription, need of ranskat you, oeralebell.",
    color: "text-blue-600"
  },
  {
    icon: MapIcon,
    title: "View Services on Map",
    description: "View all your occupation of time services vioesell View Services on Map.",
    color: "text-blue-600"
  }
];

export function Features() {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader className="flex flex-col items-center text-center space-y-4 pb-2">
                  <div className={`p-3 rounded-full bg-blue-50 ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center space-y-4">
                  <p className="text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button variant="link" className="text-blue-600 font-semibold hover:text-blue-800 p-0 h-auto">
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
