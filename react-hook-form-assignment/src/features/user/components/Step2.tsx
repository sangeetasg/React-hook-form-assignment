import { FixedSizeList as List } from "react-window";
import { useFieldArray } from "react-hook-form";

export default function Step2({ control, register }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const Row = ({ index, style }) => {
    const field = fields[index];

    return (
      <div style={style} key={field.id}>
        <input
          {...register(`addresses.${index}.street`)}
          placeholder="Street"
        />
        <input {...register(`addresses.${index}.city`)} placeholder="City" />
        <button onClick={() => remove(index)}>Remove</button>
      </div>
    );
  };

  return (
    <>
      <List
        height={300} // visible area
        itemCount={fields.length}
        itemSize={80} // height per row
        width={"100%"}
      >
        {Row}
      </List>

      <button onClick={() => append({ street: "", city: "" })}>
        Add Address
      </button>
    </>
  );
}
