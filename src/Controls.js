import React, { useState } from "react";

function Controls() {
  const [empresumepath, setEmpResumePath] = useState("");
  const [empphoto, setEmpPhoto] = useState("");
  const [empage, setEmpAge] = useState("");
  const[empdob,setEmpDob]=useState('');
  
  function onchangeEmpResumeHandler(event) {
    console.log(event.target.value);
    setEmpResumePath(event.target.value);
  }
  function onchangeEmpPhoto(event) {
    console.log(event);

    setEmpPhoto(URL.createObjectURL(event.target.files[0]));
  }
  function setAgeHandler(event) {
    console.log(event.target.value);
    setEmpAge(event.target.value);
  }
  function setEmpDobhandler(event){
    console.log(event)
    setEmpDob(event.target.value)
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>select employee resume</td>
          <td>
            <input
              type="file"
              name="same"
              id="same"
              onChange={onchangeEmpResumeHandler}
            />
          </td>
        </tr>
        <tr>
          <td>selected resume</td>
          <td>{empresumepath}</td>
        </tr>
        <tr>
          <td>select employee photo</td>
          <td>
            <img src={empphoto} alt="emp" height={100} width={200}></img>
          </td>
        </tr>
        <tr>
          <td>select photo</td>
          <td>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={onchangeEmpPhoto}
            ></input>
          </td>
        </tr>
        <tr>
          <td>age</td>
          <td>
            <input
              type="number"
              name="age"
              id="age"
              max={22}
              min={12}
              onChange={setAgeHandler}
            ></input>
          </td>
        </tr>
        <tr>
          <td>emp age</td>
          <td>{empage}</td>
        </tr>
        <tr>
            <td>date of birth</td>
            <td><input type="date" id="date" name="date" onChange={setEmpDobhandler}/></td>
        </tr>
        <tr>
            <td>emp dob</td>
            <td>{empdob}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Controls;
