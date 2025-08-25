"use client"
import { useState } from "react";
import RoleToggle from "./components/UI/RoleToggle";

export default function Home() {
  const [activeRole, setActiveRole] = useState<"creator" | "developer">("creator");
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="text-center mb-16 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            I&apos;m a writer, content creator and web developer.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting compelling stories and building beautiful digital
            experiences. Welcome to my portfolio where creativity meets
            technology.
          </p>
          <div className="flex justify-center mb-8">
            <RoleToggle activeRole={activeRole} onRoleChange={setActiveRole} />
          </div>
        </div>
      </section>
    </div >
  );
}
