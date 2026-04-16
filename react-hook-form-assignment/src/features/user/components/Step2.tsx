import { useFieldArray } from "react-hook-form";

export default function Step2({ control, register }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(`addresses.${index}.street`)}
            placeholder="Street"
          />
          <input {...register(`addresses.${index}.city`)} placeholder="City" />

          <button onClick={() => remove(index)}>Remove</button>
        </div>
      ))}

      <button onClick={() => append({ street: "", city: "" })}>
        Add Address
      </button>
    </>
  );
}
