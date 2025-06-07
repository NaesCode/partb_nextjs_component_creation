"use client";
import Counter from "../components/Counter";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../components/Extra.module.css";

export default function InteractiveCounterPage() {
  const [initial, setInitial] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center min-h-screen bg-black/[.05] p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mt-8">Interactive Counter</h1>
      <div className={`${styles.darkGray} rounded-lg shadow-lg p-8 flex flex-col items-center`}>
        <div className="flex gap-4 mb-4">
          <label className="flex flex-col text-sm font-medium">
            Initial Value
            <input
              type="number"
              value={initial}
              onChange={e => setInitial(Number(e.target.value))}
              className="border rounded px-2 py-1 mt-1"
            />
          </label>
          <label className="flex flex-col text-sm font-medium">
            Step
            <input
              type="number"
              value={step}
              onChange={e => setStep(Number(e.target.value))}
              className="border rounded px-2 py-1 mt-1"
            />
          </label>
        </div>
        <Counter initial={initial} step={step} />
      </div>
      <div className="welcome-card rounded shadow-lg text-center max-w-xl w-full gap-[32px]">
        <div className="p-1">
          <Image
            src="/waving_cappibara2.gif"
            alt="Welcome Icon"
            width={140}
            height={140}
            className="mx-auto"
          />
          <hr className="border-t border-gray-200" />
        </div>
        <div className="flex gap-16 items-center flex-col sm:flex-row justify-center p-8">
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Home
          </Link>
          <Link
            href="/GetStudentInfo"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            Student Info.
          </Link>
        </div>
      </div>
      
    </div>
  );
}