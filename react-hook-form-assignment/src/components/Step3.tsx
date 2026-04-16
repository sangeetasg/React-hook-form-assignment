import { useFieldArray } from "react-hook-form";
import { z } from "zod";
import { useSubmitUser } from "../hooks/useSubmitUser";
import { userSchema } from "../schemas/userSchema";

type UserFormValues = z.infer<typeof userSchema>;

export default function Step3({ control, register, handleSubmit }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const mutation = useSubmitUser();

  const onSubmit = (data: UserFormValues) => {
    mutation.mutate(data);
  };
  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`skills.${index}.name`)} placeholder="Skill" />

          <select {...register(`skills.${index}.level`)}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <button onClick={() => remove(index)}>Remove</button>
        </div>
      ))}

      <button onClick={() => append({ name: "", level: "beginner" })}>
        Add Skill
      </button>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>

      {mutation.isPending && <p>Submitting...</p>}
      {mutation.isSuccess && <p>Success!</p>}
    </>
  );
}
