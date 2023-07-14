'use client'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./redux/features/nameSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmit = data => {
    dispatch(setName(data.name))
    push(`/prediction/${data.name}`)
    reset()
  };

  const names = useSelector( state => state.name.name);
  const dispatch = useDispatch();
  const {push} = useRouter();

  // const nameValue = watch('name');

  return (
    <div className="text-white">
      <div>
        <h1>Enter your name:</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="text-black" placeholder="Type your name" {...register('name')} />
        <button type="submit">Predict data</button>
      </form>
      <Link href='/prediction'>go to prediction page</Link>
    </div>
  )
}
