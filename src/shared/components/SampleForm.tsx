import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  name: string;
  email: string;
}

const SampleForm = () => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name: </label>
        <input {...register('name', { required: true })} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" {...register('email', { required: true })} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SampleForm;
