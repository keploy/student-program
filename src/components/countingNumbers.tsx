"use client";

import { useEffect, useState } from "react";

const formatStars = (num: number) =>
  Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num);

interface CountingNumbersProps {
  className: string;
  reverse?: boolean;
  start?: number;
  interval?: number;
  duration?: number;
}

export default function CountingNumbers({
  className,
}: CountingNumbersProps) {
  const [starsCount, setStarsCount] = useState<number>(0);

  useEffect(() => {
    const fetchStarsCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/keploy/keploy"
        );
        if (response.ok) {
          const data = await response.json();
          setStarsCount(data.stargazers_count);
        } else {
          console.error("Failed to fetch stars count", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching stars count:", error);
      }
    };

    fetchStarsCount();
  }, []);

  return <p className={className}>{formatStars(starsCount)}</p>;
}