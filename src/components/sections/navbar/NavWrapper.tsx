"use client";

import { useState, useEffect } from "react";

export default function NavWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtTop = scrollY === 0;
      const isAtBottom = scrollY + windowHeight >= documentHeight;

      const scrollDiff = scrollY - lastScrollY;
      const isScrollingDown = scrollDiff > 0;
      const isScrollingUp = scrollDiff < 0;

      if (isAtTop || isAtBottom) {
        setIsVisible(true);
      } else if (isScrollingDown && scrollY > 20) {
        setIsVisible(false);
      } else if (isScrollingUp && scrollDiff < -5) {
        setIsVisible(true);
      }

      if (scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`CUSTOM-SECTION sticky top-0 flex items-center justify-between py-4 transition-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${atTop ? "bg-transparent" : "bg-background"}`}
    >
      {children}
    </nav>
  );
}
