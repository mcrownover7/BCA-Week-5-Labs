import { useState } from "react";

//creating the functional component FunkyName
function FunkyName(props) {
  //setting the first, last, and full name states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  //evt handler to update first name
  function firstNameChange(evt) {
    setFirstName(evt.target.value);
  }

  //evt handler to update last name
  function lastNameChange(evt) {
    setLastName(evt.target.value);
  }

  return (
    <div>
      <form
        //on submit evt to set the full name and clear first and last names
        onSubmit={(evt) => {
          evt.preventDefault();
          setFullName(firstName + " " + lastName + "!");
          setFirstName("");
          setLastName("");
        }}
      >
        <input
          type="text"
          name="first"
          placeholder="First Name"
          onChange={firstNameChange}
          value={firstName}
        />
        <input
          type="text"
          name="last"
          placeholder="Last Name"
          onChange={lastNameChange}
          value={lastName}
        />
        <input type="submit" />
      </form>
      <h2>Full Name:</h2>
      <h4>Hello {fullName}</h4>
    </div>
  );
}

export default FunkyName;
