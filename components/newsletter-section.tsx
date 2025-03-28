"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
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
    <section className="py-16 bg-[#FF914D]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Sign-up for the newsletter!
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-2 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white/20 border-transparent text-white placeholder:text-white/70 focus:ring-0 focus:border-white/50"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-[#FF914D] hover:bg-white/90 rounded-full p-2 aspect-square"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
