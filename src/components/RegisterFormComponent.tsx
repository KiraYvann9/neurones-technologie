"use client"

import {useForm} from "react-hook-form";
import {z} from "zod";
import {particulierFormSchema} from "@/lib/auth/schema";
import {zodResolver} from "@hookform/resolvers/zod";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import {register} from "@/lib/auth/request";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import React from "react";
import { RadioGroupItem, RadioGroup } from "./ui/radio-group";



export const RegisterFormComponent = () => {

    async function onSubmit(values: z.infer<typeof particulierFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
        // const response = await register(values)
        console.log(values)
    }

    const form = useForm<z.infer<typeof particulierFormSchema>>({
        resolver: zodResolver(particulierFormSchema),
        defaultValues: {
            user_type: "particulier",
            firstname: "",
            lastname: "",
            phone_number: "",
            email: "",
            password: ""
        },
    })

    return(

        <Card className="flex flex-col-reverse xl:flex-row gap-4 border-none overflow-hidden xl:bg-custom-orange bg-transparent">
            <div className="w-full xl:w-[60%] bg-white border-l-gray-100 rounded-t-2xl xl:rounded-r-2xl">
                <CardHeader>
                    <CardTitle>Création de compte</CardTitle>
                    <CardDescription>
                        {/* Change your password here. After saving, you'll be logged out. */}
                    </CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <CardContent className="space-y-2 flex flex-col items-end">
                            <FormField
                                control={form.control}
                                name="user_type"
                                render={({ field }) => (
                                    <FormItem className="space-y-1 flex justify-between w-full items-center mb-4">
                                        {/* <FormLabel>Username</FormLabel> */}
                                        <FormLabel htmlFor="current">Vous êtes : </FormLabel>
                                        <div className={'w-2/3'}>
                                            <FormControl>
                                                <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex items-center gap-8"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="particulier" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Particulier</FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="entreprise" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal"> Entreprise </FormLabel>
                                                    </FormItem>
                                                
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                    )}
                            />
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem className="space-y-1 flex justify-between w-full items-center">
                                        {/* <FormLabel>Username</FormLabel> */}

                                        <FormLabel htmlFor="current">Prénoms : </FormLabel>
                                        <div className={'w-2/3'}>
                                            <FormControl>
                                                <Input id="current" type="text" className={'bg-gray-950 text-white w-full '}
                                                        placeholder={'...'} {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem className="space-y-1 flex justify-between w-full items-center">
                                        {/* <FormLabel>Username</FormLabel> */}
                                        <FormLabel htmlFor="current">Nom : </FormLabel>
                                        <div className={'w-2/3'}>
                                            <FormControl>
                                                <Input id="current" type="text"
                                                        className={'bg-gray-950 text-white w-full'}
                                                        placeholder={'...'} {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                    )}
                            />
                            <FormField
                                control={form.control}
                                name="phone_number"
                                render={({ field }) => (
                                    <FormItem className="space-y-1 flex justify-between w-full items-center">
                                        {/* <FormLabel>Username</FormLabel> */}
                                        <FormLabel htmlFor="current">Téléphone : </FormLabel>
                                        <div className={'w-2/3'}>
                                            <FormControl>
                                                <Input id="current" type="number"
                                                        className={'bg-gray-950 text-white w-full'}
                                                        placeholder={'...'} {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                    )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="space-y-1 flex justify-between w-full items-center">
                                        {/* <FormLabel>Username</FormLabel> */}
                                        <FormLabel htmlFor="current">Email : </FormLabel>
                                        <div className={'w-2/3'}>
                                            <FormControl>
                                                <Input id="current" type="email"
                                                        className={'bg-gray-950 text-white w-full'}
                                                        placeholder={'example@example.com'} {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                    )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="space-y-1 flex justify-between w-full items-center">
                                        {/* <FormLabel>Username</FormLabel> */}
                                        <FormLabel htmlFor="current">Mot de passe : </FormLabel>
                                        <div className={'w-2/3'}>
                                            <FormControl>
                                                <Input id="current" type="password"
                                                        className={'bg-gray-950 text-white w-full'}
                                                        placeholder={'******'} {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </div>
                                    </FormItem>
                                    )}
                            />
                            <div className="space-y-1 flex justify-between w-full items-center">
                                <Label htmlFor="new">Confirmer Mot de passe : </Label>
                                <Input id="new" type="password" className={'bg-gray-950 text-white w-2/3'}
                                        placeholder={'******'}/>
                            </div>

                            <p className="text-sm text-center space-x-2 w-2/3">Votre mot de passe doit contenir au moins
                                :
                                8 caractères, UNE MAJUSCULE, une minuscule, un chiffre, un caractère spécial @ $
                                ! % * ? &
                            </p>
                            <div className="flex items-center space-x-2 w-2/3">
                                <Checkbox id="terms"/>
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    J&apos;accepte les conditions d&apos;utilisation et la politique
                                    de confidentialité de Neurones Academy.
                                </label>
                            </div>
                        </CardContent>
                        <CardFooter className={'flex justify-center'}>
                            <Button type={'submit'} className="bg-custom-orange text-sm text-black">Créer un compte</Button>
                        </CardFooter>
                    </form>
                </Form>
            </div>
            <div className="hidden xl:block w-full xl:w-[40%] py-4 px-8 space-y-4 ">
                <h1 className="text-xl font-bold">Pourquoi créer un compte ?</h1>
                <span>En créant un compte vous pourrez :</span>

                <ul className="space-y-2 list-disc">
                    <li>Avoir accès à vos documents administratifs (devis, factures, reçu de paiement, etc.)</li>
                    <li>Consulter votre calendrier détaillé de formation</li>
                    <li>Discuter en chat avec les formateurs et les autres participants de la formation</li>
                    <li>Consulter vos discussions avec les formateurs et les autres apprenants de la formation</li>
                    <li>Avoir accès et suivre l'historique de vos commandes</li>
                    <li>Consulter vos certificats de formation</li>
                    <li>Initier et suivre vos réclamations et besoins d’assistance</li>
                    <li>Consulter nos catalogues et offres exclusives</li>
                    <li>Et bien plus encore…</li>
                </ul>
            </div>
            <Accordion type="single" collapsible className="w-full xl:hidden bg-custom-orange rounded-b-xl">
                <AccordionItem value="item-1" className="py-4 px-8 space-y-4 border-none">
                    <AccordionTrigger className="border-none">
                        <h1 className="text-xl font-bold">Pourquoi créer un compte ?</h1>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2 list-disc">
                            <li>Avoir accès à vos documents administratifs (devis, factures, reçu de paiement, etc.)</li>
                            <li>Consulter votre calendrier détaillé de formation</li>
                            <li>Discuter en chat avec les formateurs et les autres participants de la formation</li>
                            <li>Consulter vos discussions avec les formateurs et les autres apprenants de la formation</li>
                            <li>Avoir accès et suivre l'historique de vos commandes</li>
                            <li>Consulter vos certificats de formation</li>
                            <li>Initier et suivre vos réclamations et besoins d’assistance</li>
                            <li>Consulter nos catalogues et offres exclusives</li>
                            <li>Et bien plus encore…</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>

    )
}