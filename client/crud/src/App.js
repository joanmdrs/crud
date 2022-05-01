import './App.css';
import React, {useState} from "react"
import Axios from 'axios'


function App() {

  const [values, setValues] = useState();
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
      [value.target.birth_date]: value.target.value,
      [value.target.age]: value.target.value,
      [value.target.phone]: value.target.value,
      [value.target.email]: value.target.value
    }));
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      birth_date: values.birth_date,
      age: values.age,
      phone: values.phone,
      email: values.email
    }).then((response) => {
      console.log(response);
    });
  }
  return (
    <div className="container">
      <div className="form">
        <h1 className="title">Add client ...</h1>
        <input type="text" name="name" placeholder="Name ..." className="name field" onChange={handleChangeValues}/>
        <input type="date" name="birth_date" className="birth_date field" onChange={handleChangeValues} />
        <input type="number" name="age" placeholder="Age ..." className="age field" onChange={handleChangeValues}/>
        <input type="phone" name="phone" placeholder="Phone ..." className="phone field" onChange={handleChangeValues}/>
        <input type="email" name="email" placeholder="Email ..." className="email field" onChange={handleChangeValues}/>
        <button type="submit" name="add" className="add button" onClick={() => {handleClickButton()}}>Add</button>
      </div>
    </div>
  );
}

export default App;
