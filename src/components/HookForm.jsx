import { WatchIcon } from 'lucide-react'
import {useForm} from 'react-hook-form'

const wait = function (duration = 1000) {
    return new Promise((resolve, reject) => {
        window.setTimeout(resolve, duration)
    })
}

export default function HookForm () {
    const {register, handleSubmit, formState} = useForm()

    const onSubmit = async data => {
        await wait(2000)
    }

    console.log(formState)

    const {isSubmitting} = formState


    return (
        <form className='container py-5' onSubmit={handleSubmit(onSubmit)}>
            <h1> Inscription</h1>
            <label htmlFor="username">username</label>
            <input type="text" className='form-control' id='username' 
            name='username' ref={register} />

            <label htmlFor="email">email</label>
            <input type="text" className='form-control' id='email' 
            name='email' ref={register} />

            <label htmlFor="password">mot de passe</label>
            <input type="password" className='form-control' id='password' 
            name='password' ref={register} />

            <button className=' btn btn-primary' disabled={isSubmitting}>valider</button>


        </form>
    )
}