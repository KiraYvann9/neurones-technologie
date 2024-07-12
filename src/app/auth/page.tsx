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

export default function Contact(){
    return(
        <div className="flex flex-col items-center w-full">
            
            <MaxWidthWrapper className="min-h-screen w-full px-44 py-[135px]">
                <div className="border flex flex-col items-center pb-8">

                    <div className="bg-blue-950 h-56 w-full"> </div>

                    <Tabs defaultValue="account" className="w-[700px] mt-[-40px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="account">Se connecter</TabsTrigger>
                            <TabsTrigger value="password">Créer un compte</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" >
                            <Card className="flex gap-2">
                                <div className="w-1/2 border-l-gray-100">
                                    <CardHeader>
                                        <CardTitle>Connexion</CardTitle>
                                        <CardDescription>
                                        {/* Make changes to your account here. Click save when you're done. */}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-8">
                                        <div className="space-y-1">
                                            <Label htmlFor="name">Saisissez votre email</Label>
                                            <Input id="name" placeholder="example@exemple.com" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Saisissez votre mot de passe</Label>
                                            <Input id="username" placeholder="*******" />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="w-full flex">
                                        <Button className="bg-custom-orange">Se connecter</Button>
                                    </CardFooter>
                                </div>
                                <Separator orientation="vertical" className="bg-red-600" />
                                <div className="w-1/2 p-4 space-y-4">
                                    <h1 className="text-xl font-bold">Qu'allez vous trouver sur votre compte ?</h1>

                                    <ul className="space-y-2 list-disc">
                                        <li>L'historique de vos achats</li>
                                        <li>Le suivi de vos commandes</li>
                                        <li>Les documents administratifs de vos inscriptions (convention, feuille d'émargement, duplicata de facture...)</li>
                                        <li>Nos catalogues</li>
                                    </ul>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="flex gap-2">
                                <div className="w-1/2 border-l-gray-100">
                                    <CardHeader>
                                        <CardTitle>Création de compte</CardTitle>
                                        <CardDescription>
                                        {/* Change your password here. After saving, you'll be logged out. */}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-8">
                                        <div className="space-y-1">
                                        <Label htmlFor="current">Saisissez votre email</Label>
                                        <Input id="current" type="password" />
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="new">Saissisez votre mot de passe</Label>
                                        <Input id="new" type="password" />
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="new">Confirmez votre mot de passe</Label>
                                        <Input id="new" type="password" />
                                        </div>

                                        <p className="text-sm text-center">Votre mot de passe doit contenir au moins :
                                        8 caractères, UNE MAJUSCULE, une minuscule, un chiffre, un caractère spécial @ $ ! % * ? &
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="bg-custom-orange">Créer un compte</Button>
                                    </CardFooter>
                                </div>
                                <Separator orientation="vertical" className="border" />
                                <div className="w-1/2 p-4 space-y-4">
                                    <h1 className="text-xl font-bold">Pourquoi créer un compte ?</h1>
                                    <span>En créant un compte vous pourrez :</span>

                                    <ul className="space-y-2 list-disc">
                                        <li>Inscrire vos collaborateurs ou vous-même à nos formations</li>
                                        <li>Consulter votre historique d'achat</li>
                                        <li>Récupérer tous les documents administratifs de vos inscriptions (convention, feuille d'émargement, duplicata de facture...)</li>
                                        <li>Créer un catalogue personnalisé à partir de votre sélection</li>
                                    </ul>
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}