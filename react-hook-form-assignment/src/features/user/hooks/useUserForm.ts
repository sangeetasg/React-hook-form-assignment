import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { userSchema } from "../schemas/userSchema";

type UserFormValues = z.infer<typeof userSchema>;

export const useUserForm = () => {
    return useForm<UserFormValues>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
            email: "",
            addresses: [{ street: "", city: "" }],
            skills: [{ name: "", level: "beginner" }],
        },
        mode: "onChange",
    });
};