import { z } from "zod"

export const particulierFormSchema = z.object({
    user_type: z.string().min(2).max(50),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    phone_number: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})