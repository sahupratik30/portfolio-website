import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Calculates years of experience since Feb 1, 2023, rounded to nearest 0.5 */
export function getYearsOfExperience(): string {
  const start = new Date(2023, 1, 1); // Feb 1, 2023
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = months / 12;
  const rounded = Math.floor(years * 2) / 2;
  return rounded % 1 === 0 ? `${rounded}+` : `${rounded}`;
}
