'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react';

const projects = [
  {
    title: 'welcome home',
    subtitle: 'Featured Project',
    image: '/images/kitchen.JPG',
    description: 'A complete outdoor transformation featuring a resort-style pool, cabana, and lush tropical landscaping.',
    location: 'Oakville, ON',
    budget: '$750K',
    designTime: '4 months',
    installTime: '8 months',
  },
  {
    title: 'fire & water alfresco',
    subtitle: 'Featured Project',
    image: '/images/bed.JPG',
    description: 'An intimate outdoor living space combining fire features, water elements, and refined natural stone.',
    location: 'Burlington, ON',
    budget: '$580K',
    designTime: '3 months',
    installTime: '6 months',
  },
  {
    title: 'cliffside infinity',
    subtitle: 'Featured Project',
    image: '/images/beds.JPG',
    description: 'A dramatic infinity-edge pool perched on a hillside with sweeping views and architectural landscaping.',
    location: 'Ancaster, ON',
    budget: '$1.1M',
    designTime: '6 months',
    installTime: '14 months',
  },
  {
    title: 'artisan country retreat',
    subtitle: 'Featured Project',
    image: '/images/living_room.JPG',
    description: 'Tucked away from the noise of the city, this landscape features a modern farmhouse style with Craftsman touches.',
    location: 'Brant, ON',
    budget: '$1.2M',
    designTime: '5 months',
    installTime: '12 months',
  },
];

export default function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    if (isAnimating || index === currentProject) return;
    setIsAnimating(true);
    setCurrentProject(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goNext = () => goTo((currentProject + 1) % projects.length);
  const goPrev = () => goTo((currentProject - 1 + projects.length) % projects.length);
  const project = projects[currentProject];

  return (
    <section ref={sectionRef} id="projects" className="relative bg-cedar-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="font-epilogue text-cedar-gray text-[11px] tracking-[3px] uppercase block mb-4">
              {project.subtitle}
            </span>
            <h2 className="font-epilogue text-cedar-white text-3xl md:text-4xl lg:text-5xl font-light lowercase tracking-wide transition-all duration-500">
              {project.title}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={goPrev} className="w-12 h-12 border border-cedar-gray/30 flex items-center justify-center text-cedar-white hover:bg-cedar-white hover:text-cedar-dark transition-all duration-300 cursor-pointer" aria-label="Previous project">
              <ArrowLeft size={18} weight="light" />
            </button>
            <button onClick={goNext} className="w-12 h-12 border border-cedar-gray/30 flex items-center justify-center text-cedar-white hover:bg-cedar-white hover:text-cedar-dark transition-all duration-300 cursor-pointer" aria-label="Next project">
              <ArrowRight size={18} weight="light" />
            </button>
          </div>
        </div>

        {/* Project Image */}
        <div className="reveal reveal-delay-1 relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mb-10">
          {projects.map((_, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentProject ? 'opacity-100' : 'opacity-0'}`}>
              <Image src={projects[index].image} alt={projects[index].title} fill className="object-cover" sizes="100vw" />
            </div>
          ))}
          <div className="absolute bottom-6 right-6 z-10">
            <button className="btn-cedar-light btn-cedar flex items-center gap-2 !border-cedar-white/40 !text-cedar-white hover:!bg-cedar-white hover:!text-cedar-dark cursor-pointer">
              View Project <ArrowUpRight size={14} weight="bold" />
            </button>
          </div>
        </div>

        {/* Project Metadata — matches original site layout */}
        <div className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Location', value: project.location },
            { label: 'Budget', value: project.budget },
            { label: 'Design Time', value: project.designTime },
            { label: 'Installation Time', value: project.installTime },
          ].map((meta) => (
            <div key={meta.label}>
              <span className="font-epilogue text-cedar-gray text-[10px] tracking-[2px] uppercase block mb-1">{meta.label}</span>
              <span className="font-epilogue text-cedar-white text-sm font-light">{meta.value}</span>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="reveal reveal-delay-2 flex items-center gap-3 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentProject ? 'bg-cedar-white' : 'bg-cedar-gray/40 hover:bg-cedar-gray/70'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Description */}
        <div className="reveal reveal-delay-3 max-w-xl">
          <p className="font-epilogue text-cedar-gray text-sm font-light leading-relaxed transition-all duration-500">
            {project.description}
          </p>
        </div>
      </div>
    </section>
  );
}
