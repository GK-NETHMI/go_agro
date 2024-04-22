import React, { useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
    const[tracks, setTracks] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
          .get("http://localhost:5555/tracks")
          .then((response) => {
            setTracks(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1
        </div>
    
    </div>
  )
}

export default Home
