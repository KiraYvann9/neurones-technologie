import React from "react";
import {cn} from "@/lib/utils";

export const Rating = ({avis, className}:{avis: string, className?: string}) =>{
    return(
        <div className={cn('', className)}>
            <div className={'flex '}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                     fill="#f99d1c"
                     stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-star">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                     fill="#f99d1c"
                     stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-star">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                     fill="#f99d1c"
                     stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-star">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                     fill="#f99d1c"
                     stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-star">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                     fill="#f99d1c"
                     stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-star">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
            </div>
            <span className={cn('text-sm mb-3')}>{avis}</span>
        </div>
    )
}