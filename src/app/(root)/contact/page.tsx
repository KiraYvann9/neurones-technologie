import { MaxWidthWrapper, MinWidthWrapper, ProjectForm } from "@/components"

export default function Contact(){
    return(
        <div className="w-full min-h-fscreen pt-[135px] flex flex-col items-center">
            <MinWidthWrapper className="w-full min-h-screen ">
                <div className="bg-blue-950 h-40 w-full p-8"> 
                    <h1 className="text-3xl font-bold text-white">Contact</h1>
                </div>
                <div className="h-full flex gap-3">
                    <div className="w-[300px] bg-gray-200 min-h-full"></div>

                    <div className="py-8 px-20 flex flex-col flex-1 space-y-8">
                        <h1 className="text-2xl font-semibold">Votre projet</h1>
                        <ProjectForm/>
                    </div>
                </div>
            </MinWidthWrapper>
        </div>
    )
}