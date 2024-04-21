import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteReview = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteReview = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/reviews/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Your Review Deleted successfully', { variant: 'success' });
        navigate('/deleteMsg');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <div className='flex'>
        <Link
          to={'/reviews/show'}
          className='bg-green-800 text-white px-4 py-1 rounded-lg w-fit'
        >
          <BsArrowLeft className='text-2xl' />
        </Link>
      </div>
      <h1 className='text-3xl my-8 text-green-700 text-center'>Delete Review</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-green-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete your review?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-80 rounded-xl'
          onClick={handleDeleteReview}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteReview;