"use client";
import { useState, useEffect } from "react";

export const useScroll = (offset: number = 20) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight

      setIsScrolled(scrollY > offset)
      setScrollProgress(maxScroll > 0 ? scrollY / maxScroll : 0)
    };

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [offset])

  return { isScrolled, scrollProgress }
};