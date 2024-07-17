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



export const RegisterFormComponent = () => {

    async function onSubmit(values: z.infer<typeof particulierFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
        const response = await register(values)
        console.log(response)
    }

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

        <Card className="flex flex-col gap-4 border-none overflow-hidden bg-transparent">
            <div className="w-full bg-white border-l-gray-100 rounded-2xl">
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
                                        <FormItem className="space-y-1 flex justify-between w-full items-center">
                                            {/* <FormLabel>Username</FormLabel> */}
                                            <FormLabel htmlFor="current">Vous êtes : </FormLabel>
                                            <div className={'w-2/3'}>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-gray-950 text-white w-full">
                                                            <SelectValue placeholder="Un particulier"/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className={''}>
                                                        <SelectGroup className={''}>
                                                            {/*<SelectLabel>Vous êtes ?</SelectLabel>*/}
                                                            <SelectItem value="particulier">Particulier</SelectItem>
                                                            <SelectItem value="entreprise">Entreprise</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
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
            <div className="w-full py-4 px-8 space-y-4 bg-custom-orange rounded-2xl">
                <h1 className="text-xl font-bold">Pourquoi créer un compte ?</h1>
                <span>En créant un compte vous pourrez :</span>

                <ul className="space-y-2 list-disc">
                    <li>Inscrire vos collaborateurs ou vous-même à nos formations</li>
                    <li>Consulter votre historique d&apos;achat</li>
                    <li>Récupérer tous les documents administratifs de vos inscriptions (convention, feuille
                        d&lsquo;émargement, duplicata de facture...)
                    </li>
                    <li>Créer un catalogue personnalisé à partir de votre sélection</li>
                </ul>
            </div>
        </Card>

    )
}