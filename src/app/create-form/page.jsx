'use client'
// import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import './createForm.css'


const CreateForm = () => {
   const [data, setdata] = useState({
      name: '',
      lastname: '',
      mother: '',
      father: '',
      address: '',
      city: '',
      state: '',
      married: '',
      pincode: '',
      age: '',
      phone: '',
      telephone: '',
      email: '',
      password: ''


   });
   const handleChange=(e)=>{
      const {name,value}=e.target;
      setdata({
         ...data,
         [name]:value
      })
   };
   
   const signup=(e)=>{
e.preventDefault();
localStorage.setItem(data.name,JSON.stringify(data))
setdata({
   name: '',
   lastname: '',
   mother: '',
   father: '',
   address: '',
   city: '',
   state: '',
   married: '',
   pincode: '',
   age: '',
   phone: '',
   telephone: '',
   email: '',
   password: ''
})
   }

   return (
      <div>
         <form>
            Name  <input
               type="text"
               name="name"
               placeholder="name"
               value={data.name}
            onChange={handleChange}
            />
            <br />
            LastName <input
               type="text"
               name="lastname"
               placeholder="name"
               value={data.lastname}
            onChange={handleChange}
            />
            <br />
            Mother'S Name <input
               type="text"
               name="mother"
               placeholder="name"
               value={data.mother}
            onChange={handleChange}
            />
            <br />
            Father'S Name  <input
               type="text"
               name="father"
               placeholder="name"
               value={data.father}
            onChange={handleChange}
            />
            <br />
            Address  <input
               type="text"
               name="address"
               placeholder="name"
               value={data.address}
            onChange={handleChange}
            />
            <br />
            City  <input
               type="text"
               name="city"
               placeholder="name"
               value={data.city}
            onChange={handleChange}
            />
            <br />
            State  <input
               type="text"
               name="state"
               placeholder="name"
               value={data.state}
            onChange={handleChange}
            />
            <br />
            Married Status   <input
               type="text"
               name="married"
               placeholder="name"
               value={data.married}
            onChange={handleChange}
            />
            <br />
            Pincode   <input
               type="text"
               name="pincode"
               placeholder="name"
               value={data.pincode}
            onChange={handleChange}
            />
            <br />
            Age   <input
               type="text"
               name="age"
               placeholder="name"
               value={data.age}
            onChange={handleChange}
            />
            <br />
            Phone  <input
               type="text"
               name="phone"
               placeholder="name"
               value={data.phone}
            onChange={handleChange}
            />
            <br />
            Telephone  <input
               type="text"
               name="telephone"
               placeholder="name"
               value={data.telephone}
            onChange={handleChange}
            />
            <br />
            Email  <input
               type="text"
               name="email"
               placeholder="name"
               value={data.email}
            onChange={handleChange}
            />
            <br />
            Password   <input
               type="text"
               name="password"
               placeholder="name"
               value={data.password}
            onChange={handleChange}
            />
            <br />
            <button type="sumbit" onClick={signup}>Create Account</button>
         </form>
         <div>
           <a href="update-form/"><button>updateForm</button></a>
         </div>
      </div>
   )
}
export default CreateForm