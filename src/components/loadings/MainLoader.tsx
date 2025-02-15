"use client";
import { useState } from "react";

export default function MainLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 bg-primary absolute animate-spin"></div>
      <div className="w-6 h-6 bg-background relative top-0 animate-spin-reverse"></div>
    </div>
  );
}
