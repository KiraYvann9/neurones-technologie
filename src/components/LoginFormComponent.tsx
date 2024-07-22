"use client"

import {useForm} from "react-hook-form";
import {TypeOf, z} from "zod";
import {particulierFormSchema} from "@/lib/auth/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";

import { loginFormSchema } from "@/lib/auth/schema";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

export const LoginFormComponent = () =>{

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver : zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
            // const response = await register(values)
        console.log(values)
    }

    return(
        <Card className="flex flex-col xl:flex-row gap-2 bg-custom-orange border-none overflow-hidden">
            <div className="w-full xl:w-1/2 bg-white rounded-b-2xl xl:rounded-r-2xl ">
                <CardHeader>
                    <CardTitle>Connexion</CardTitle>
                    <CardDescription>
                        {/* Make changes to your account here. Click save when you're done. */}
                    </CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <CardContent className="space-y-4 flex flex-col">
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({field}) =>(
                                    <FormItem className="space-y-1">
                                        <FormLabel htmlFor="email">Saisissez votre email</FormLabel>
                                        <FormControl>
                                            <Input id="email" placeholder="example@exemple.com" className={'bg-gray-950 text-white'} {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            
                            />
                            <FormField 
                                control={form.control}
                                name="password"
                                render={({field}) =>(
                                    <FormItem className="space-y-1">
                                        <FormLabel htmlFor="password">Saisissez votre mot de passe</FormLabel>
                                        <FormControl>
                                        <Input id="password" type={'password'} placeholder="*******" className={'bg-gray-950 text-white'} {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            
                            />
                            
                            <Link href={'#'} className={'text-right text-sm'}>Mot de passe oublié ?</Link>
                        </CardContent>
                        <CardFooter className="w-full flex justify-center">
                            <Button type="submit" className="bg-custom-orange text-sm text-black">Se connecter</Button>
                        </CardFooter>
                    </form>
                </Form>
                
                
            </div>

            <div className="w-full sm:w-1/2 py-4 px-8 space-y-4">
                <h1 className="text-xl font-bold">Qu&apos;allez vous trouver sur votre compte ?</h1>

                <ul className="space-y-2 list-disc">
                    <li>Vos documents administratifs (devis, factures, reçu de paiement, etc.)</li>
                    <li>Votre calendrier détaillé de formation</li>
                    <li>Vos discussions avec les formateurs</li>
                    <li>Vos discussions avec les autres participants à votre formation</li>
                    <li>L&apos;historique et le suivi de vos commandes</li>
                    <li>Vos certificats de formation</li>
                    <li>Le suivi de vos réclamations </li>
                    <li>Nos catalogues </li>
                    <li>Nos offres exclusives </li>
                    <li>Et bien plus encore… </li>
                </ul>
            </div>
        </Card>
    )
}