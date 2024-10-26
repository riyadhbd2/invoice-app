// src/lib/utils.ts

// Capitalize the first letter of a string
export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Format a date to 'MM/DD/YYYY' format
  export function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  
  // Calculate the sum of an array of numbers
  export function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Check if an email is valid (simple regex)
  export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
// src/lib/utils.ts

export function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(" ");
  }
    