'use client'
import Router from 'next/router'
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

    Router.events.on("routeChangeStart", (url)=>{
        console.log('Route is changing...')
    })

  return (
      <div className={'relative w-full flex flex-col items-center overflow-hidden'}>


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
