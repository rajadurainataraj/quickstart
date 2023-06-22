import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
export default function Login() {
    console.log("login called")

    const form = useForm<FormValues>()
    const { register, control, handleSubmit, formState } = form
    const {errors} = formState

    type FormValues = {
        email: string,
        password: string
        class:string
    }
    const onSubmit = (data:FormValues) => {
        console.log("onSubmit called",data)
    }
    return (
        <>
            <div>Login</div>   
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Email" id="email" {...register("email",{pattern:{value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Invalid email"}})} />
                    <p >{ errors.email?.message}</p>
                    <input placeholder="Password" type="password" id="password" {...register("password", { required: "password is required" })} />
                    <p>{ errors.password?.message}</p>
                    <button>SUBMIT</button>

                </form>
                <DevTool control={control}/>
                </div>
            
        </>
)
}