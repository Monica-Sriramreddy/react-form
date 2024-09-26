import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    resume: "",
    url: "",
    about: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const Resetfunc = (e) => {
    setValues({ firstname: "", lastname: "", email: "" });
  };

  return (
    <div className="container">
      <h1> Form In React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname"> First Name </label>
        <input
          type="text"
          placeholder="Enter your first Name"
          name="firstname"
          onChange={(e) => handleChanges(e)}
          required
          value={values.firstname}
        />
        <label htmlFor="lastname"> Last Name</label>
        <input
          type="text"
          placeholder="Enter your second Name"
          name="lastname"
          onChange={(e) => handleChanges(e)}
          required
          value={values.lastname}
        />
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => handleChanges(e)}
          required
          value={values.email}
        />
        <label htmlFor="contact"> Contact Number</label>
        <input
          type="text"
          placeholder="Enter your Contact Number"
          name="contact"
          onChange={(e) => handleChanges(e)}
        />
        <label htmlFor="gender"> Gender </label>
        <input
          type="radio"
          name="gender"
          onChange={(e) => handleChanges(e)}
        />{" "}
        Female
        <input
          type="radio"
          name="gender"
          onChange={(e) => handleChanges(e)}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          onChange={(e) => handleChanges(e)}
        />{" "}
        Other
        <label htmlFor="course"> Course </label>
        <select name="course" id="course" onChange={(e) => handleChanges(e)}>
          <option value="Webdevelopment"> Web Development </option>
          <option value="ui/ux"> UI/UX </option>
          <option value="softwareengineering"> Software Engineering </option>
        </select>
        <label htmlFor="resume"> Resume</label>
        <input
          type="file"
          placeholder="selectresume"
          name="resume"
          onChange={(e) => handleChanges(e)}
        />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          placeholder="Enter Image URL"
          onChange={(e) => handleChanges(e)}
        />
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="10"
          onChange={(e) => handleChanges(e)}
          placeholder="Enter description"
        ></textarea>
        <button type="button" onClick={Resetfunc}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
