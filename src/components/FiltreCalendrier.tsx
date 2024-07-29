import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const FiltreCalendrier = () =>{
    return(
        <section className="p-4 bg-gray-100 w-[300px]">
            <h1 className="text-2xl">Filtrer</h1>

            <div className="flex flex-col gap-6">
                <Select>
                    <SelectTrigger className="w-full bg-white">
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

                <div>
                    <h1 className="text-xl font-semibold pb-4">Ville</h1>
                    <RadioGroup defaultValue="all" className="pl-4 flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="r1" />
                            <Label htmlFor="r1">Toutes les villes et à distance (150)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="distance" id="r2" />
                            <Label htmlFor="r2">A distance (100)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="abidjan" id="r3" />
                            <Label htmlFor="r3">Abidjan (75)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="niamey" id="r4" />
                            <Label htmlFor="r4">Niamey (55)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ouagadougou" id="r5" />
                            <Label htmlFor="r5">Ouagadougou (35)</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div>
                    <h1 className="text-xl font-semibold pb-4">Dates de sessions</h1>
                    <RadioGroup defaultValue="all" className="pl-4 flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="r6" />
                            <Label htmlFor="r6">Toutes les dates (150)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="juillet" id="r7" />
                            <Label htmlFor="r7">Juillet 2024 (15)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="aout" id="r8" />
                            <Label htmlFor="r8">Août 2024 (10)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="septembre" id="r9" />
                            <Label htmlFor="r9">Septembre 2024 (17)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="octobre" id="r10" />
                            <Label htmlFor="r10">Octobre 2024 (17)</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div>
                    <h1 className="text-xl font-semibold pb-4">Durée</h1>
                    <RadioGroup defaultValue="all" className="pl-4 flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="plus-cinq" id="r11" />
                            <Label htmlFor="r11">+5 jours (150)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="5" id="r12" />
                            <Label htmlFor="r12">5 jours (15)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="4" id="r13" />
                            <Label htmlFor="r13">4 jours (10)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3" id="r14" />
                            <Label htmlFor="r14">3 jours (17)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="2" id="r15" />
                            <Label htmlFor="r15">2 jours (17)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="r16" />
                            <Label htmlFor="r16">1 jour (15)</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div>
                    <h1 className="text-xl font-semibold pb-4">Niveau</h1>
                    <RadioGroup defaultValue="all" className="pl-4 flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="r17" />
                            <Label htmlFor="r17">Tous les niveaux (150)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="fondamental" id="r18" />
                            <Label htmlFor="r18">Fondamental (débutant)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="intermediaire" id="r19" />
                            <Label htmlFor="r19">Intermédiaire</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="expert" id="r20" />
                            <Label htmlFor="r20">Expert</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

        </section>
    )
}