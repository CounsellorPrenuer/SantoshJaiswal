import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';
import { Users, Award, TrendingUp, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      value: 2500,
      suffix: '+',
      label: 'Professionals Guided',
      testId: 'stat-professionals',
    },
    {
      icon: Award,
      value: 20,
      suffix: '+',
      label: 'Years Experience',
      testId: 'stat-years',
    },
    {
      icon: TrendingUp,
      value: 92,
      suffix: '%',
      label: 'Success Rate',
      testId: 'stat-success',
    },
    {
      icon: Calendar,
      value: 50,
      suffix: '+',
      label: 'Workshops Conducted',
      testId: 'stat-workshops',
    },
  ];

  return (
    <div
      ref={statsRef}
      className="py-16 bg-card border-y border-border"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover-elevate active-elevate-2 transition-transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={stat.testId}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-foreground mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
