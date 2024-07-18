import {useForm} from "react-hook-form";
import {z} from "zod";
import {particulierFormSchema} from "@/lib/auth/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const LoginFormComponent = () =>{

    return(
        <Card className="flex flex-col sm:flex-row gap-2 bg-custom-orange border-none overflow-hidden">
            <div className="w-full sm:w-1/2 bg-white rounded-b-2xl sm:rounded-r-2xl ">
                <CardHeader>
                    <CardTitle>Connexion</CardTitle>
                    <CardDescription>
                        {/* Make changes to your account here. Click save when you're done. */}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col">
                    <div className="space-y-1">
                        <Label htmlFor="email">Saisissez votre email</Label>
                        <Input id="email" placeholder="example@exemple.com" className={'bg-gray-950 text-white'}/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Saisissez votre mot de passe</Label>
                        <Input id="password" type={'password'} placeholder="*******" className={'bg-gray-950 text-white'}/>
                    </div>
                    <Link href={'#'} className={'text-right text-sm'}>Mot de passe oublié ?</Link>
                </CardContent>
                <CardFooter className="w-full flex justify-center">
                    <Button className="bg-custom-orange text-sm text-black">Se connecter</Button>
                </CardFooter>
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