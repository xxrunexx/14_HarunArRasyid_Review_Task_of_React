import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addForm } from '../store/formSlice';
import { useHistory } from 'react-router';

const dataKosong = {
  fullname: "",
  email: "",
  phone: "",
  nationality: "",
  message: "",
}


function Contact(){
  const dispatch = useDispatch();
  const history = useHistory();
  // UseState Data Kosong
  const [data, setData] = useState(dataKosong);
  const nationalitySelect = useRef(null);

  // Regex Form
  const [errMsg, setErrMsg] = useState("");
  const regexfullname= /^[A-Za-z ]*$/;
  const regexemail= /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexphone= /^[0-9]+$/;


  // Set and Validate Data
  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name : ", e.target.name)

    if (name === "fullname") {
        if(regexfullname.test(value)) {
            setErrMsg("")
        } else {
            setErrMsg("Nama Lengkap Harus Berupa Huruf")
        }
    }
    if (name === "email") {
        if(regexemail.test(value)) {
            setErrMsg("")
        } else {
            setErrMsg("Email Tidak Sesuai")
        }
    }
    if (name === "phone") {
        if(regexphone.test(value)) {
            setErrMsg("")
        } else {
            setErrMsg("No Handphone Tidak Sesuai")
        }
    }

    setData({
      ...data,
      [name]: value
  })
  console.log("data : ", data)
}

// HandleSubmit harus diedit
const handleSubmit = (event) => {
  event.preventDefault();
  if (errMsg !== "") {
      alert ("Terdapat data yang tidak sesuai")
      resetData();
  } 
  else 
  {
    dispatch(addForm(data));
    history.push('/message');
  }
  
}

const handleChangeSelectTag = (e) => {
  setData({...data, nationality: e.target.value})
  console.log("data: ",data )
}

const resetData = () => {
  setData(dataKosong);
  nationalitySelect.current.value = ""
  setErrMsg("");
}


    return(
    <>
    <div className="row">
      <div className="col-md-4 hero">
        <img src="img/logo-ALTA-v2.png" alt="" className="overlay" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="col-md-8 col-form needs-validation"
        id="form"
        // method="GET"
        // novalidate
      >
        <h3>Contact Us</h3>
        <div className="form-signup">
          <label>Full name</label>
          <input type="text" 
          className="form-control"
          name="fullname" 
          id="fullname" 
          value={data.fullname} 
          onChange={handleInput} 
          required/>
        </div>
        <div className="form-signup">
          <label>Email</label>
          <input type="text" 
          className="form-control" 
          name="email"
          id="email" 
          value={data.email} 
          onChange={handleInput} 
          required/>
        </div>
        <div className="form-signup">
          <label>Phone Number</label>
          <input type="text" 
          className="form-control"
          name="phone"
          id="phone" 
          value={data.phone} 
          onChange={handleInput} 
          required/>
        </div>
        <div className="form-signup">
          <h5>Nationality</h5>
          <select name="nationality" id="nationality" onChange={handleChangeSelectTag}>
            <option value="">--Choose one--</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Singapore">Singapore</option>
          </select>
        </div>
        <div className="form-signup">
          <h5>Message</h5>
          <textarea
            name="message"
            rows="4"
            id="message"
            cols="63"
            placeholder="Your Full Name Here..."
            onChange={handleInput}
            value={data.message}
            required>
          </textarea>
          <br />
        </div>
        <span styles={{
          color: 'red',
          display: 'flex',
          justifyContent: 'center',
        }}>{errMsg}</span><br/>
        <a
          className="btn btn-1"
          // href="/message"
          role="button"
          onClick={handleSubmit}>
          Submit
        </a>
      </form>                
    </div>
  </>
    );
}



export default Contact;