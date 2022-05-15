import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const nevigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || '/';

      let signInError;
   
   if(user || gUser){
       nevigate(from, {replace:true});
   }

   if( loading || gLoading){
    return <Loading></Loading>
   }

   if(error || gError){
       signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
   }

   const onSubmit = data =>{
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
   }
   
   

    return (
         <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
    <h2 class="text-center text-2xl font-bold">Login</h2>

    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Email</span>
        </label>
        <input 
            type="email" 
            placeholder="Your Email" 
            class="input input-bordered w-full max-w-xs"
            {...register("email", {
                required:{
                value : true,
                message: 'Email is required'
                },
                pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid email' 
            }
  })}
  />
        <label class="label">
        {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span> }
        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span> }
            
        </label>
    </div>

    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Password</span>
        </label>
        <input 
            type="password" 
            placeholder="Password" 
            class="input input-bordered w-full max-w-xs"
            {...register("password", {
                required:{
                value : true,
                message: 'Password is required'
                },
               minLength: {
                value:6,
                message: 'Must be 6 characters or longer' 
            }
  })}
  />
        <label class="label">
        {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span> }
        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span> }
            
        </label>
    </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      
      {signInError}
      <input className='btn text-white font-bold  w-full max-w-xs' type="submit" value='Login' />
    </form>
    <small className='text-center'><p>New to Doctors Portal? <Link className='text-green-500 font-bold' to='/signup'>Create new account</Link></p></small>
    <div class="divider">OR</div>
    <button onClick={() => signInWithGoogle()}
     class="btn btn-outline">CONTINUE WITH GOOGLE</button>
  </div>
</div>
        </div>
    );
};

export default Login;