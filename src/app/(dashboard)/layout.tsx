import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import {Navbar, Sidebar} from "@/components/dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
    children
    }: {
    children: React.ReactNode
}){
    return (
        <html lang="en">
            <body className={cn('relative min-h-screen', inter.className)}>
                <Navbar/>
                <div className={'flex h-screen w-full pt-16'}>
                    <Sidebar/>
                    <div className={'bg-gray-50 w-full h-full p-4'}>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}