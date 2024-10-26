import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center max-w-5xl gap-6 mx-auto h-full text-center my-12">
        <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Invoices</h1>
            <p>
                <Button className="inline-flex gap-2" variant="ghost" asChild>
                   <Link href='/invoice/new'>
                        <CirclePlus className="h-4 w-4"/>
                           Create Invoices
                    </Link>  
                </Button>
            </p>
        </div>
      
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">
                Date</TableHead>
            <TableHead className="p-4">
                Customer</TableHead>
            <TableHead>
                Email</TableHead>
            <TableHead className="text-center p-4">
                Status</TableHead>
            <TableHead className="text-right p-4">
                Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold text-left">
              <span>
                10/31/2024</span>
            </TableCell>
            <TableCell className="font-semibold text-left">
              <span>
                Easir Arafat</span>
            </TableCell>
            <TableCell className="text-left">
              <span>
                riyadhbd2@gmail.com</span>{" "}
            </TableCell>
            <TableCell className="font-semibold text-center">
              <Badge className="bg-black text-white rounded-full" variant="outline">
                Open</Badge>
            </TableCell>
            <TableCell className="font-semibold text-right p-4">
              <span>
                $250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
