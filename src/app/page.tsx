import Image from "next/image";
import {
    ActualiteComponent,
    ConfianceComponent,
    Contact,
    DomaineFormation,
    FormationsComponent,
    HeroComponent, InfiniteScroll,
    MaxWidthWrapper,
    Navbar,
    PartenaireComponent,
    SolutionComponent,
    TestimoniesComponent
} from "@/components";
import {FirstNav} from "@/components";
import { PiChatsFill } from "react-icons/pi";

export default function Home() {
  return (
      <div className={'relative w-full flex flex-col items-center overflow-hidden'}>

        <div className={'hidden sm:flex fixed z-50 bottom-36  drop-shadow-lg left-[-55px] rounded-b-xl bg-custom-orange py-2 px-4 rotate-[-90deg] text-sm'}><PiChatsFill size={22} className={'mr-2'}/> Votre avis compte</div>

        {/* <div className={'fixed w-full z-20'}>
            <FirstNav/>
            <Navbar/>
        </div> */}

        <MaxWidthWrapper className={'w-full flex flex-col items-center my-4'}>
          <HeroComponent/>
          <PartenaireComponent/>
          <DomaineFormation/>
        </MaxWidthWrapper>

        <Contact/>
        <SolutionComponent/>
        <FormationsComponent/>
        <ConfianceComponent/>
        <TestimoniesComponent/>

        <ActualiteComponent/>
      </div>
  );
}
