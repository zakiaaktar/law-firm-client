import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddLawyer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    //console.log(imageHostKey);


    const navigate = useNavigate();



    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://law-firm-server-three.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })





    const handleAddLawyer = data => {
        //console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                //console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const lawyer = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }


                    // save lawyer information to the database
                    fetch('https://law-firm-server-three.vercel.app/lawyers', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(lawyer)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managelawyers')
                        })
                }
            })
    }




    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add Lawyer</h2>
            <form onSubmit={handleSubmit(handleAddLawyer)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Speciality</span></label>
                    <select
                        {...register('specialty')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }

                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img.message}</p>}

                </div>

                <input className='btn btn-accent w-full mt-4' value="Add Lawyer" type="submit" />

            </form>
        </div>
    );
};

export default AddLawyer;