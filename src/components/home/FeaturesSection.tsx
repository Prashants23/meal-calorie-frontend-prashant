"use client";

import { motion } from "framer-motion";
import { Camera, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Instant Analysis",
    description: "Enter your meal and get instant calorie breakdown in seconds.",
    color: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "USDA Verified",
    description: "All data sourced from verified USDA FoodData Central database.",
    color: "bg-teal-500",
  },
  {
    icon: Clock,
    title: "Meal History",
    description: "Keep track of all your meals with automatic history.",
    color: "bg-orange-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Everything you need to track your nutrition
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Powerful features that make calorie counting effortless and accurate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-bg-card hover:bg-bg-card-hover border-ui-border transition-all group">
                <CardContent className="p-6 justify-center items-center">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

