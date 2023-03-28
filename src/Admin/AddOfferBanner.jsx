import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import AdminNavbar from "/AdminNavbar";


function OfferBanner() {
  const [offer, setOffer] = useState('');
  const [getOffer, setGetOffer] = useState(null);
//   const [password, setPassword] = useState('');


useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_SERVER}getOffer/`)
      .then(res => setGetOffer(res.data.offer))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_SERVER}updateOffer/`, {offer})
      .then((res) => {
        console.log(res);
        alert("Offer updated succesfully"
        );
    })
      .catch(err => console.log(err));
  };
//   console.log(getOffer);

  return (
    <>
    {/* <AdminNavbar/> */}
    <br>
    </br>
    <div>
        <h1 style={{fontSize:'20px'}}>Update Offer Banner</h1>
        <br>
        </br>
    <form onSubmit={handleSubmit}>
      <label className="col-sm-1.5 col-form-label" style={{fontSize:'20px'}}><p ></p>
        Offer:
        

        <input type="text" value={offer} onChange={e => setOffer(e.target.value)} placeholder = {getOffer} className="form-control" style={{borderColor:'grey'}} />
      </label>
      {/* <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label> */}
      <div>
     <button style={{top:'-70px',position:'relative', left:'-40px'}}  type="submit" className="btn btn-success  form-group mb-4 px-5 mt-4 float-end" >Update</button>
     </div>
    </form>
    </div>
    </>
  );
 
}

export default OfferBanner;
