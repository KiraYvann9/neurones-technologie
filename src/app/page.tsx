import Image from "next/image";
import {Contact, DomaineFormation, HeroComponent, MaxWidthWrapper, Navbar, PartenaireComponent} from "@/components";
import {FirstNav} from "@/components";

export default function Home() {
  return (
      <div className={'w-full flex flex-col items-center'}>

        <div className={'fixed w-full z-20'}>
            <FirstNav/>
            <Navbar/>
        </div>
          <MaxWidthWrapper className={'w-full flex flex-col items-center'}>
                <HeroComponent/>
                <PartenaireComponent/>
              <DomaineFormation/>
              <Contact/>
          </MaxWidthWrapper>
      </div>
  );
}
