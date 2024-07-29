"use client"

import {useState} from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    session: z.string(),
    ville: z.string()
})

export function CandidatureFormComponent({className}:{className?: string}) {

    const [date, setDate] = useState<Date>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            session:"",
            ville:"",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-8 bg-white p-4 rounded-md flex flex-col justify-center w-[90%] sm:w-auto", className)}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Votre spécialité</FormLabel>
                            <FormControl>
                            <Select>
                                <SelectTrigger className="w-full bg-gray-950 text-white ">
                                    <SelectValue placeholder="Sélectionnez une spécialité" className='placeholder:text-[11px] placeholder:text-muted-foreground'/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                    <SelectItem value="ingénieur-sc">Ingénieur en Cybersécurité</SelectItem>
                                    <SelectItem value="ingénieur-rs">Ingénieur réseaux et sécurité</SelectItem>
                                    <SelectItem value="ingénieur-devops">Ingénieur DevOps</SelectItem>
                                    <SelectItem value="ingénieur-devfull">Ingénieur Développeur Fullstack</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                                {/* <Input placeholder="Sélectionnez une spécialité" {...field} className={'bg-gray-950 text-white placeholder:text-[11px]'}/> */}
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className={'flex gap-4'}>
                    <FormField
                        control={form.control}
                        name="session"
                        render={({ field }) => (
                            <FormItem className={'flex flex-col'}>
                                <FormLabel>Session</FormLabel>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[160px] justify-start text-left font-normal bg-gray-950 text-white",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span className='text-[11px]'>Période souhaitée</span>}
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
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ville"
                        render={({ field }) => (
                            <FormItem className={'flex flex-col'}>
                                <FormLabel>Ville</FormLabel>
                                <FormControl>
                                    <Input placeholder="..." {...field} className={'bg-gray-950 text-white'}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className={'bg-custom-orange'}>Soumettre ma candidature</Button>
            </form>
        </Form>
    )
}
