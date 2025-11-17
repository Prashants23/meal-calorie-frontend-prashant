"use client";

import { Activity, Users, Utensils } from "lucide-react";

const stats = [
  { label: "Meals Tracked", value: "1.2M+", icon: Activity },
  { label: "Users", value: "18K+", icon: Users },
  { label: "Foods", value: "35K+", icon: Utensils },
];

export function StatsSection() {
  return (
    <section className="py-12 px-6 border-y border-ui-border bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

