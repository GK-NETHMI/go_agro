import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

const SubmitPage = () => {  
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', padding: '60px', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'rgba(0, 150, 0, 0.4)' }}>
        <div className="title-container" style={{ display: 'flex', alignItems: 'center' }}>
          <BsCheckCircle className="icon" style={{ marginBottom: '40px', marginLeft: '4px', fontSize: '22px', color: '#1b8b35' }} />
          <h3 className="title" style={{ fontSize: '1.3rem', marginBottom: '40px', marginLeft: '4px', color: '#0d2511', fontWeight: 'bold' }}>Review Submitted </h3>
        </div>
        <h4 className="sub-title" style={{ fontSize: '15px', marginBottom: '20px', color: '#0d2511' }}>
          Thank You for your kind feedback!
          Your insights will help <br/> other users make informed purchases.
        </h4>
        <div className="btn-container" style={{ display: 'flex' }}>
          <a href="/" className="btn btn-primary-h" style={{ marginTop: '20px', backgroundColor: '#0fa06bcf', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', padding: '8px 16px', marginRight: '10px', border: '3px solid rgba(255, 255, 255, 0.3)', fontSize: 'large' }}>Home</a>
          <Link to={'/reviews/show'} className="btn btn-primary-r" style={{ marginTop: '20px', backgroundColor: '#0ecddbcf', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', padding: '8px 16px', marginRight: '0', border: '3px solid rgba(255, 255, 255, 0.3)', fontSize: 'large' }}>Check My Reviews</Link>
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
