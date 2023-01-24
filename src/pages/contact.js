import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  const [alldetails, setAlldetails] = useState({
    Name: "",
    Email: "",
    Phone: "",
    descript: ""
  });

  const saveAll = async (e) => {
    const response = await fetch("/api/setcontact", {
      method: "POST",
      body: JSON.stringify(alldetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setAlldetails("");
  };
  const updateField = (e) => {
    setAlldetails({
      ...alldetails,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (event) => {
    saveAll();

    event.preventDefault();
  };
  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Contact Us</h1>

        <label className={styles.label}>
          Name:
          <input
            name="name"
            type="text"
            value={alldetails.Name}
            onChange={updateField}
           
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            name="email"
            type="email"
            value={alldetails.Email}
            onChange={updateField}
         
          />
        </label>

        <label>
          Phone No:
          <input
            name="Phone"
            type="Phone"
            value={alldetails.Phone}
            onChange={updateField}
         
          />
        </label>

        <label>
          Description:
          <textarea
            cols="30"
            rows="10"
            name="descript"
            value={alldetails.descript}
            onChange={updateField}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
