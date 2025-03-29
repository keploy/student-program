"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("You've been subscribed to our newsletter.", {
        description: `We'll send updates to ${email}`,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F7FF] to-[#FFF0E6]"></div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9F6B] opacity-20 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9F6B] opacity-15 rounded-full -ml-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-[#FF9F6B] rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
            Stay in the <span className="text-[#FF7F50]">loop</span>
          </h2>
          
          <p className="text-[#4A5568] mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest updates on APIs, Keploy features, 
            and community events.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto bg-white/70 p-2 rounded-full backdrop-blur-sm border border-[#FF9F6B]/30"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-transparent border-transparent text-[#2C3E50] placeholder:text-[#718096] focus:ring-0 focus:border-transparent focus:outline-none md:pl-4"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-[#FF7F50] hover:bg-[#E67348] text-white rounded-full px-6 py-2 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
          
          <p className="text-[#718096] text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FF7F50] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}