import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
    LoginFormComponent,
    MaxWidthWrapper,
    RegisterFormComponent
} from "@/components";

export default function Contact(){
    return(
        <div className="w-full flex justify-center">
            <MaxWidthWrapper className="w-full min-h-screen pt-[55px] xl:pt-[80px] flex justify-center items-start">
                <div className="flex flex-col items-center justify-start w-full min-h-screen pt-0 pb-3 xl:pt-10 bg-custom-blue bg-auth-bg bg-cover bg-left-bottom bg-no-repeat">

                    <Tabs defaultValue="account" className=" xl:w-[1000px] space-y-8 justify-start mt-16 mx-4 xl:mx-0">
                        <TabsList className="grid w-full grid-cols-2 bg-transparent gap-4">
                            <TabsTrigger value="account" className={'text-[14px] sm:text-xl border'}>Se connecter</TabsTrigger>
                            <TabsTrigger value="password" className={'text-[14px] sm:text-xl border'}>Créer un compte</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" className={'min-h-full'}>
                            <LoginFormComponent/>
                        </TabsContent>
                        <TabsContent value="password">
                            <RegisterFormComponent/>
                        </TabsContent>
                    </Tabs>
                </div>
            </MaxWidthWrapper>
        </div>
        
    )
}