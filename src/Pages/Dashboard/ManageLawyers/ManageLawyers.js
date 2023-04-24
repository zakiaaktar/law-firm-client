import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageLawyers = () => {
    const [deletingLawyer, setDeletingLawyer] = useState(null);

    const closeModal = () => {
        setDeletingLawyer(null);
    }



    const { data: lawyers, isLoading, refetch } = useQuery({
        queryKey: ['lawyers'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:8000/lawyers', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
            }
        }
    });




    const handleDeleteLawyer = lawyer => {
        console.log(lawyer);
        fetch(`http://localhost:8000/lawyers/${lawyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Lawyer ${lawyer.name} deleted successfully`)
                }

            })
    }




    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <h2 className="text-3xl">Manage Lawyers: {lawyers?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lawyers?.map((lawyer, i) => <tr key={lawyer._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={lawyer.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{lawyer.name}</td>
                                <td>{lawyer.email}</td>
                                <td>{lawyer.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingLawyer(lawyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingLawyer && <ConfirmationModal
                    title={`Are you sure you want to delete ?`}
                    message={`If you delete ${deletingLawyer.name}. It cannot be undone.`}
                    successAction={handleDeleteLawyer}
                    successButtonName="Delete"
                    modalData={deletingLawyer}
                    closeModal={closeModal}

                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageLawyers;