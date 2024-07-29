"use client"

import React from 'react'
import { MinWidthWrapper } from '../MinWidthWrapper'

 
import { format } from "date-fns"
import { Calendar as CalendarIcon, Check } from "lucide-react"
 
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
import { Separator } from '../ui/separator'
import { PourquoiComponent } from '../cartegorie'

 

export const DetailSession = () => {

  const [date, setDate] = React.useState<Date>()

  return (
    <div className='w-full bg-custom-black flex justify-center py-14'>
        <MinWidthWrapper className='w-full flex flex-col gap-8'>
          <h1 className='text-xl text-white'>Sessions de la formation : <span className='text-custom-orange'>Management des projets – Gestion des projets</span> </h1>
          
          <table className='w-full flex flex-col gap-4'>
            <thead className='w-full flex justify-between'>
              <tr className=' w-full flex justify-between'>
              <th className=''>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </th>
                <th colSpan={2} >
                  <Select >
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </th>
                
                <th colSpan={2}>
                  <Button className='bg-white text-gray-900'>Etat de la session</Button>
                </th>
              </tr>
            </thead>

            <tbody className=' text-white p-5'>
              <tr className='text-sm w-full flex justify-between items-center border-b'>
                <td className='w-[200px] flex-1'>
                  Du 15 juil. au 19 juil. 2024
                  (5 jours/45 heures)
                </td>
                <td className='w-[200px]'>
                    Abidjan
                </td>
                <td className='w-[200px]'>
                  <div className='flex flex-col space-y-2'>
                    <strong> 500 000 FCFA TTC</strong>
                    <span>(hors frais d&apos;examen)</span>
                    <Separator orientation='horizontal' className='w-3'/>
                    <strong>  850 000 FCFA TTC</strong>
                    <span> (Frais d&apos;examen y compris)</span>
                  </div>
                </td>

                <td className='p-8 bg-orange-500 text-white w-[200px] text-sm'>
                  Session complète
                </td>
                <td className='w-[200px]'>

                </td>
              </tr>

              <tr className='text-sm w-full flex justify-between items-center border-b'>
                <td className='w-[200px] flex-1'>
                  Du 15 juil. au 19 juil. 2024
                  (5 jours/45 heures)
                </td>
                <td className='w-[200px]'>
                    Abidjan
                </td>
                <td className='w-[200px]'>
                  <div className='flex flex-col space-y-2'>
                    <strong> 500 000 FCFA TTC</strong>
                    <span>(hors frais d&apos;examen)</span>
                    <Separator orientation='horizontal' className='w-3'/>
                    <strong>  850 000 FCFA TTC</strong>
                    <span> (Frais d&apos;examen y compris)</span>
                  </div>
                </td>

                <td className='p-8 bg-red-500 text-white w-[200px] text-sm'>
                  Session complète
                </td>
                <td className='w-[200px] flex justify-center'>
                    <Button className='bg-red-500 p-2'>S&apos;inscrire</Button>
                </td>
              </tr>

              <tr className='text-sm w-full flex justify-between items-center border-b'>
                <td className='w-[200px] flex-1'>
                  Du 15 juil. au 19 juil. 2024
                  (5 jours/45 heures)
                </td>
                <td className='w-[200px]'>
                    Abidjan
                </td>
                <td className='w-[200px]'>
                  <div className='flex flex-col space-y-2'>
                    <strong> 500 000 FCFA TTC</strong>
                    <span>(hors frais d&apos;examen)</span>
                    <Separator orientation='horizontal' className='w-3'/>
                    <strong>  850 000 FCFA TTC</strong>
                    <span> (Frais d&apos;examen y compris)</span>
                  </div>
                </td>

                <td className='p-8 bg-green-700 text-white w-[200px] text-sm '>
                  <strong>Places disponibles</strong> <br />
                </td>
                <td className='w-[200px] flex justify-center'>
                    <Button className='bg-green-700 p-2'>S&apos;inscrire</Button>
                </td>
              </tr>

              <tr className='text-sm w-full flex justify-between items-center border-b'>
                <td className='w-[200px] flex-1'>
                  Du 15 juil. au 19 juil. 2024
                  (5 jours/45 heures)
                </td>
                <td className='w-[200px]'>
                    Abidjan
                </td>
                <td className='w-[200px]'>
                  <div className='flex flex-col space-y-2'>
                    <strong> 500 000 FCFA TTC</strong>
                    <span>(hors frais d&apos;examen)</span>
                    <Separator orientation='horizontal' className='w-3'/>
                    <strong>  850 000 FCFA TTC</strong>
                    <span> (Frais d&apos;examen y compris)</span>
                  </div>
                </td>

                <td className='p-8 bg-green-500 text-white w-[200px] text-sm '>
                  <strong>Places disponibles</strong> <br />
                  <span className='flex text-sm items-center'> <Check/> Session confirmée </span>
                </td>
                <td className='w-[200px] flex justify-center'>
                    <Button className='bg-green-500 p-2'>S&apos;inscrire</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </MinWidthWrapper>
    </div>
  )
}
