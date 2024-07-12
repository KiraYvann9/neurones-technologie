"use client"
import React from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from './ui/checkbox'


const formSchema = z.object({
  username: z.string().min(2).max(50),
})


function onSubmit(values: z.infer<typeof formSchema>) {
// Do something with the form values.
// ✅ This will be type-safe and validated.
    console.log(values)
}

export const ProjectForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <RadioGroup defaultValue="inter" className='flex gap-8'>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="inter" id="inter" />
                <Label htmlFor="inter">Inter-Entreprise</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="intra" id="intra" />
                <Label htmlFor="intra">Intra-Entreprise</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="sur-mesure" id="sur-mesure" />
                <Label htmlFor="sur-mesure">Sur mesure</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="diplomant" id="diplomant" />
                <Label htmlFor="diplomant">Diplômant</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="autre" id="option-two" />
                <Label htmlFor="option-two">Autre</Label>
            </div>
        </RadioGroup>
        <p>Votre demande concerne la formation :</p>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="Ex:..." {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
                <div className='flex gap-4 items-center'>
                    <FormControl>
                        <Switch id="airplane-mode" />
                    </FormControl>
                    <FormLabel>Je souhaite une formation à distance</FormLabel>
                </div>
              <FormMessage />
            </FormItem>
            
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Informations complémentaires : </FormLabel>
              <FormControl>
                <Input placeholder="Ex:..." {...field} type='file' />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Informations complémentaires : </FormLabel> */}
              <FormControl>
                <Textarea placeholder="Type your message here." rows={6}/>
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <h1 className='text-2xl font-bold'>Vos coordonnées</h1>
        <span className=''> <strong className='text-red-600'>*</strong> Tous les champs ci-dessous sont obligatoires</span>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="Prénoms" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="Fonction" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="N° Téléphone" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="Entreprise / Organisation" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                {/* <Input placeholder="Entreprise / Organisation" {...field} /> */}

                <div className="items-top flex space-x-2">
                    <Checkbox id="terms1" {...field}/>
                    <div className="grid gap-1.5 leading-none">
                        <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        J'accepte les termes du contrat
                        </label>
                        <p className="text-sm text-muted-foreground">
                        Vos données personnelles sont utilisées dans le cadre strict de l’exécution et du suivi de votre demande par les services CEGOS, ses filiales et partenaires en charge du traitement conformément à notre Charte de protection des données personnelles accessible sur le site cegos.fr. Elles sont nécessaires à l’accès à l’espace client dans le cadre de la fournitures dédits services. Elles sont conservées pour la durée légale de prescription des contrôles administratif et financier applicables aux actions de formation. En application de la réglementation sur la protection des données à caractère personnel, vous bénéficiez d’un droit d’accès, de rectification, de limitation du traitement ainsi que d’un droit d’opposition et de portabilité de vos données si cela est applicable que vous pouvez exercer en vous adressant à CEGOS, DPO- Direction des Systèmes d’Information, 19 rue René Jacques, 92798 Issy-les-Moulineaux. Vous bénéficiez également du droit d’introduire une réclamation auprès d’une autorité de contrôle si nécessaire. Par ailleurs, Cegos et ses filiales sont susceptibles de vous proposer des offres correspondant à vos besoins.
                        Je ne souhaite pas recevoir les informations et les offres de Cegos et ses filiales
                        </p>
                    </div>
                </div>
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit" className='bg-custom-orange'>Envoyer la demande</Button>
      </form>
    </Form>
  )
}
