export default function Step1({ register, formState: { errors } }) {
    return (
      <>
        <input {...register("name")} placeholder="Name" />
        <p>{errors.name?.message}</p>
  
        <input {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>
      </>
    );
  }