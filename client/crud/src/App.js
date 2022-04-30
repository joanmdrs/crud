import './App.css';
import React, {useState} from "react"

function App() {

  const [values, setValues] = useState();
  console.log(values);
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
    console.log(values)
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
