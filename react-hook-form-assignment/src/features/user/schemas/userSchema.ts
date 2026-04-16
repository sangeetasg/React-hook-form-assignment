import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),

    addresses: z
        .array(
            z.object({
                street: z.string().min(1, "Street required"),
                city: z.string().min(1, "City required"),
            })
        )
        .min(1, "At least one address required"),

    skills: z.array(
        z.object({
            name: z.string().min(1, "Skill required"),
            level: z.enum(["beginner", "intermediate", "advanced"]),
        })
    ),
});