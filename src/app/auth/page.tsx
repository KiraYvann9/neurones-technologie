"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import {
    FirstNav,
    LoginFormComponent,
    MaxWidthWrapper,
    MinWidthWrapper,
    Navbar,
    RegisterFormComponent
} from "@/components";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {particulierFormSchema} from "@/lib/auth/schema";
import {zodResolver} from "@hookform/resolvers/zod";

export default function Contact(){

    const form = useForm<z.infer<typeof particulierFormSchema>>({
        resolver: zodResolver(particulierFormSchema),
        defaultValues: {
            user_type: "",
            firstname: "",
            lastname: "",
            phone_number: "",
            email: "",
            password: ""
        },
    })

    return(
        <div className="flex flex-col items-center w-full pt-20 sm:pt-32">
            
            <MaxWidthWrapper className="bg-custom-blue min-h-screen w-full flex justify-center items-start pb-8">

                <Tabs defaultValue="account" className="w-[700px] space-y-8 min-h-full justify-start mt-16">
                    <TabsList className="grid w-full grid-cols-2 bg-transparent gap-4">
                        <TabsTrigger value="account" className={'text-[14px] sm:text-xl border '}>Se connecter</TabsTrigger>
                        <TabsTrigger value="password" className={'text-[14px] sm:text-xl border'}>Créer un compte</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className={'min-h-full'}>
                        <LoginFormComponent/>
                    </TabsContent>
                    <TabsContent value="password">
                        <RegisterFormComponent/>
                    </TabsContent>
                </Tabs>
            </MaxWidthWrapper>
        </div>
    )
}