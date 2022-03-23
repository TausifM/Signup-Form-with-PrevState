import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  // States for registration
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //const [confirmPassord, setConfirmPassword] = useState("")
  const [form, setForm] = useState({name: "", email: "", password: ""});
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  // Handling the name change
  const handleName = (e) => {
    setForm({...form, name: e.target.value});
    //setForm((prevState) => ({...prevState, name: e.target.value}));
    //setName(e.target.value);
    setSubmitted(false);
    console.log(form, "form")
  };

  // Handling the email change
  const handleEmail = (e) => {
      setForm({...form, email: e.target.value});
      setForm((prevState) => ({...prevState, email: e.target.value}));
  // setEmail(e.target.value);
    setSubmitted(false);
    console.log(form, "form")

  };

  // Handling the password change
  const handlePassword = (e) => {
      //setForm({...form, password: e.target.value});
      setForm((prevState) => ({...prevState, password: e.target.value}));
    //setPassword(e.target.value);
    setSubmitted(false);
    console.log(form, "rm")

  };

  // Handling the form submission
  const handleSubmit = (e) => {
    const {name, email, password} = form;
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
        //setForm({name, email, password}, e.target.value);
        // setSubmitted({...form, e.target.value});
        //localStorage.setItem("user", JSON.stringify({name, email, password}));
        localStorage.setItem("isLoggedIn", JSON.stringify({form}));
        setSubmitted(true);
        // setForm((prevState) => {
        //     return {
        //       ...prevState,
        //       form: {
        //         name: form.name,
        //         email: form.email,
        //         password:   form.password
        //       }
        //     };
        //   });
        navigate("/");

      setError(false);
    }
  };


  // Showing success message
  const successMessage = () => {
     const {name} = form;
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          //value={name}
          value={form.name}
          type="text"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          //value={email}
          value={form.email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          //value  ={password}
         value={form.password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
