'use client'
// import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import './create.css'
const UpdateForm = () => {
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
    const [fetchdata, setfetchdata] = useState(false)
    const [finduser, setfinduser] = useState({
        name: ''
    })
    let fetchuserdata;
    
    useEffect(()=>{
        fetchuserdata = localStorage.getItem(finduser.name)
        if (fetchuserdata !== null || undefined) {
            let data = JSON.parse(fetchuserdata)
            setdata({
                name:data.name,
                lastname:data.lastname,
                mother:data.mother,
                father:data.father,
                address:data.address,
                city:data.city,
                state:data.state,
                married:data.married,
                pincode: data.pincode,
                age:data.age,
                phone:data.Phone,
                telephone:data.telephone,
                email:data.email,
                password: data.password        
                })
        }
    
    },[fetchdata])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        })
    }
    const handleChangedata = (e) => {
        const { name, value } = e.target;
        setfinduser({
            ...finduser,
            [name]: value
        })
    }

    const savedata = (e) => {
        e.preventDefault();
        localStorage.setItem(data.name, JSON.stringify(data))
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
    const deleteData=(e)=>{
        e.preventDefault()
        localStorage.removeItem(data.name)
    }
    const fetchdatafun = (e) => {
        e.preventDefault();
        setfetchdata(!fetchdata)
        
    }


    return (
        <div>
            <form>
                <input type="text" name="name" value={finduser.name} placeholder="name" onChange={handleChangedata} />
                <input type="button" value="Getdata" onClick={fetchdatafun} />
            </form>
            <form>
            Name  <input
               type="text"
               name="name"
               disabled
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
            <button type="sumbit" onClick={savedata}>Update</button>
            <button type="sumbit" onClick={deleteData}>Delete</button>
         </form> 
            

            
        </div>
    )

}
export default UpdateForm