import { MaxWidthWrapper } from "@/components";
import { NeuronesTalentsHeader } from "@/components/neuronesTalents/NeuronesTalentsHeaders";
import { NTProgramme } from "@/components/neuronesTalents/NTProgramme";

export default function NTalentsPage(){
    return(
        <MaxWidthWrapper className="w-full">
            <NeuronesTalentsHeader/>
            <NTProgramme/>
        </MaxWidthWrapper>
    )
}