import Image from "next/image";
import {ConfianceComponent, Contact, DomaineFormation, FormationsComponent, HeroComponent, MaxWidthWrapper, Navbar, PartenaireComponent, SolutionComponent, TestimoniesComponent} from "@/components";
import {FirstNav} from "@/components";

export default function Home() {
  return (
      <div className={'relative w-full flex flex-col items-center'}>

        <div className={'fixed bottom-36  drop-shadow-lg left-[-48px] bg-custom-orange py-2 px-4 rotate-[-90deg] flex text-white'}>Votre avis compte</div>

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
      </div>
  );
}
