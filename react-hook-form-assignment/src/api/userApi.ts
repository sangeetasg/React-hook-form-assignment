import axios from "axios";

export const submitUser = async (data: any) => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/users", data);
    return res.data;
};