"use client"

import React from 'react'
import { MinWidthWrapper } from '../MinWidthWrapper'

 
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const DetailSession = () => {

  const [date, setDate] = React.useState<Date>()

  return (
    <div className='h-[649px] w-full bg-custom-black flex justify-center py-14'>
        <MinWidthWrapper className='w-full'>
          <h1 className='text-xl text-white'>Sessions de la formation : <span className='text-custom-orange'>Management des projets – Gestion des projets</span> </h1>
          
        </MinWidthWrapper>
    </div>
  )
}
