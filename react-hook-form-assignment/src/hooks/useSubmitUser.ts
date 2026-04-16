import { useMutation } from "@tanstack/react-query";
import { submitUser } from "../api/userApi";

export const useSubmitUser = () => {
    return useMutation({
        mutationFn: submitUser,
    });
};