import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);


    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';



    if(token){
        navigate(from, {replace: true});
    }



    const handleLogin = data => {
        console.log(data);
        //console.log(errors);
        setLoginError('');

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email);
                // navigate(from, {replace: true});

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });

    }




    return (
        <div className='h-[800px] flex justify-center items-center -mt-20'>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className="text-2xl text-center text-red-700 font-bold">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password Address is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>


                    <input className='btn px-6 py-3 border-none bg-red-700 w-full mt-2 font-bold cursor-pointer' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-2'>New to Law Firm <Link to='/signup' className='text-red-700 font-bold'>Create new account</Link></p>
                <div className="divider">OR</div>
                {/* <button className='btn btn-outline w-full text-red-700'>CONTINUE WITH GOOGLE</button> */}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;