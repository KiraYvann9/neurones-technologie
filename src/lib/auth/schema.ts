import { z } from "zod"

export const particulierFormSchema = z.object({
    user_type: z.enum(["particulier", "entreprise"], {
        required_error: "Selectionnez un type"
    }),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    phone_number: z.string().min(2).max(50),
    password_confirmation: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})

export const entrepriseFormSchema = z.object({
    user_type: z.enum(["particulier", "entreprise"], {
        required_error: "Selectionnez un type"
    }),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    phone_number: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    company_email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    password_confirmation: z.string().min(2).max(50),
    fonction:z.string().min(2),
    company_name:z.string().min(2),
    company_activity_area:z.string().min(2),
    company_phone_number:z.string().min(2),
    nom_entreprise: z.string().min(2)
})

export const loginFormSchema = z.object({
    email: z.string().min(3).max(50),
    password: z.string().min(2).max(50)
})