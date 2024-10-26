import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center max-w-5xl gap-6 mx-auto h-full text-center">
      <h1 className="text-5xl font-bold">Invoiceipedia</h1>

      <p>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </main>
  );
}
