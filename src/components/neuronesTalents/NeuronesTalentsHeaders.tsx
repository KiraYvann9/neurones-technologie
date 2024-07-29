import { MaxWidthWrapper } from "../MaxWidthWrapper"
import { MinWidthWrapper } from "../MinWidthWrapper"
import { Button } from "../ui/button"

export const NeuronesTalentsHeader = () =>{
    return(
        
        <header className="w-full flex justify-center bg-hero-bg h-[60lvh] bg-center bg-cover bg-no-repeat mt-[100px]">
            <MinWidthWrapper className="w-full h-full flex items-end">
                <section className="space-y-4 w-[50%] mb-14">
                    <div className="space-y-2">
                        <h1 className="text-3xl text-white font-semibold">Intégrez le programme </h1>
                        <h1 className="text-3xl text-custom-orange font-bold">Neurones Talents</h1>
                    </div>


                    <p className="text-white text-xl">
                        Recyclez-vous sur des projets d&apos;entreprises, bénéficiez de certifications internationales et obtenez un emploi garanti avec un salaire de minimum 350 000 FCFA
                    </p>

                    <Button className="bg-custom-orange text-xl p-6">Soumettre votre candidature</Button>

                </section>
            </MinWidthWrapper>
        </header>
        
    )
}