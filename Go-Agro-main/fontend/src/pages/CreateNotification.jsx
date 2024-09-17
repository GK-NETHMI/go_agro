import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateNotification = () => {
  const [username, setUsername] = useState('');
  const [ordername, setOrdername] = useState('');
  const [ordernumber, setOrdernumber] = useState('');
  const [message, setMessage] = useState('');
  const [fullMsg,setFullMsg] = useState('');
  const [onClickPath,setOnClickPath] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); //UX
  const [hover, setHover] = useState(null);

  const handleSaveNotification = () => {
    // Check if any required fields are empty
    if (!username || !ordername || !ordernumber || !message || !fullMsg || !onClickPath) {
      // Show a pop-up message informing the user to fill in all required fields
      enqueueSnackbar('Please fill in all required fields.', { variant: 'error' });
      return; // Exit the function without proceeding further
    }
  
    const data = {
      username,
      ordername,
      ordernumber,
      message,
      fullMsg,
      onClickPath,
    };
    setLoading(true);
    axios
      .post('http://localhost:5000/notifications', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Notification Created successfully', { variant: 'success' }); //UX
        navigate('/notification');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  

  return (

    <div className='p-4'>
      <h1 className='text-3xl my-5  text-green-700'>Create Notification</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-green-400 rounded-xl w-[600px] p-8 mx-auto'>
        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>User Name</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              borderWidth: '2px',
              borderColor: '#7173767f',
              padding: '0.5rem 1rem',
              width: '60%',
              borderRadius: '0.5rem',
            }}
            className='input-field mt-2'
          />
        </div>
        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>Order Name</label>
          <input
          type='text'
            value={ordername}
            onChange={(e) => setOrdername(e.target.value)}
            style={{
              borderWidth: '2px',
              borderColor: '#7173767f',
              padding: '0.5rem 1rem',
              width: '60%',
              borderRadius: '0.5rem',
            }}
            className='input-field mt-2' 
          />
        </div>
        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>Order Number</label>
          <input
            type='text'
            value={ordernumber}
            onChange={(e) => setOrdernumber(e.target.value)}
            style={{
              borderWidth: '2px',
              borderColor: '#7173767f',
              padding: '0.5rem 1rem',
              width: '60%',
              borderRadius: '0.5rem',
            }}
            className='input-field mt-2' 
          />
        </div>

        
        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>Message </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              borderWidth: '2px',
              borderColor: '#7173767f',
              padding: '0.5rem 1rem',
              width: '60%',
              borderRadius: '0.5rem',
            }}
            className='input-field mt-2' 
          />
        </div>

        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>View full message</label>
          <textarea
            value={fullMsg}
            onChange={(e) => setFullMsg(e.target.value)}
            style={{
              borderWidth: '2px',
              borderColor: '#7173767f',
              padding: '0.5rem 1rem',
              width: '60%',
              borderRadius: '0.5rem',
            }}
            className='input-field mt-2 h-28 resize-none'
              />
        </div>

        <div className='my-5 flex flex-col'>
          <label className='text-l mr-4 text-black-500'>Click Path</label>
          <textarea
            value={onClickPath}
            onChange={(e) => setOnClickPath(e.target.value)}
            style={{
              borderWidth: '2px',
              borderColor: '#7173767f',
              padding: '0.5rem 1rem',
              width: '60%',
              borderRadius: '0.5rem',
            }}
            className='input-field mt-2' 
          />
        </div>

        <button
        style={{
          padding: '0.5rem 2rem',
          backgroundColor: '#2AA244',
          color: 'white',
          borderRadius: '0.5rem',
        }}
        className='p-2 bg-green-700 m-8 rounded-xl' onClick={handleSaveNotification}>
          Send Notification
        </button>
      </div>
    </div>

  );
};

export default CreateNotification;
