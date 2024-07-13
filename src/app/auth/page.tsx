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


import { FirstNav, MaxWidthWrapper, MinWidthWrapper, Navbar } from "@/components";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";

export default function Contact(){
    return(
        <div className="flex flex-col items-center w-full pt-32">
            
            <MaxWidthWrapper className="bg-custom-blue min-h-screen w-full flex justify-center items-start pb-8">

                <Tabs defaultValue="account" className="w-[700px] space-y-8 min-h-full justify-start mt-16">
                    <TabsList className="grid w-full grid-cols-2 bg-transparent gap-4">
                        <TabsTrigger value="account" className={'text-[14px] sm:text-xl border '}>Se connecter</TabsTrigger>
                        <TabsTrigger value="password" className={'text-[14px] sm:text-xl border'}>Créer un compte</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className={'min-h-full'}>
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
                                    <li>L&apos;historique de vos achats</li>
                                    <li>Le suivi de vos commandes</li>
                                    <li>Les documents administratifs de vos inscriptions (convention, feuille d&apos;émargement, duplicata de facture...)</li>
                                    <li>Nos catalogues</li>
                                </ul>
                            </div>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card className="flex flex-col sm:flex-row gap-2 bg-custom-orange border-none overflow-hidden">
                            <div className="w-full sm:w-1/2 border-l-gray-100 bg-white rounded-b-2xl sm:rounded-r-2xl">
                                <CardHeader>
                                    <CardTitle>Création de compte</CardTitle>
                                    <CardDescription>
                                    {/* Change your password here. After saving, you'll be logged out. */}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                    <Label htmlFor="current">Saisissez votre email</Label>
                                    <Input id="current" type="text" className={'bg-gray-950 text-white'} placeholder={'example@example.com'}/>
                                    </div>
                                    <div className="space-y-1">
                                    <Label htmlFor="new">Saissisez votre mot de passe</Label>
                                    <Input id="new" type="password" className={'bg-gray-950 text-white'} placeholder={'*****'}/>
                                    </div>
                                    <div className="space-y-1">
                                    <Label htmlFor="new">Confirmez votre mot de passe</Label>
                                    <Input id="new" type="password" className={'bg-gray-950 text-white'} placeholder={'******'}/>
                                    </div>

                                    <p className="text-sm text-center">Votre mot de passe doit contenir au moins :
                                    8 caractères, UNE MAJUSCULE, une minuscule, un chiffre, un caractère spécial @ $ ! % * ? &
                                    </p>
                                </CardContent>
                                <CardFooter className={'flex justify-center'}>
                                    <Button className="bg-custom-orange text-sm text-black">Créer un compte</Button>
                                </CardFooter>
                            </div>
                            <div className="w-full sm:w-1/2 py-4 px-8 space-y-4">
                                <h1 className="text-xl font-bold">Pourquoi créer un compte ?</h1>
                                <span>En créant un compte vous pourrez :</span>

                                <ul className="space-y-2 list-disc">
                                    <li>Inscrire vos collaborateurs ou vous-même à nos formations</li>
                                    <li>Consulter votre historique d&apos;achat</li>
                                    <li>Récupérer tous les documents administratifs de vos inscriptions (convention, feuille d&lsquo;émargement, duplicata de facture...)</li>
                                    <li>Créer un catalogue personnalisé à partir de votre sélection</li>
                                </ul>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </MaxWidthWrapper>
        </div>
    )
}