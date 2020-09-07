import React, { useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";


const FriendForm = (props) => {
    let id = 7;
    let newId = id + 1;
  const [form, setForm] = useState({ name: "", age: "", email: "", id: id });

  const handleChanges = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    axiosWithAuth().post("http://localhost:5000/api/friends", form)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    props.updateFriends(form);
    setForm({ name: "", age: "", email: "", id: newId });
  };

  return(
      <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChanges} placeholder="Enter Name"></input>
          <input name="age" value={form.age} onChange={handleChanges} placeholder="Enter Age"></input>
          <input name="email" value={form.email} onChange={handleChanges} placeholder="Enter Email"></input>
          <input name="id" value={form.id} onChange={handleChanges} placeholder="Enter ID"></input>
          <button type="submit">Submit</button>
      </form>
  )
};

export default FriendForm;
