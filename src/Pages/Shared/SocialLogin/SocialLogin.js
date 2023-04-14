import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';



const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);




    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);

                // const currentUser = {
                //     email: user.email
                // }
            })
            .catch(err => console.error(err));

    }



    return (
        <div>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn bg-red-700 btn-outline w-full text-white px-10 py-3  border-none font-bold mt-3 ">Continue With GOOGLE</button>
            </p>
        </div>
    );
};

export default SocialLogin;