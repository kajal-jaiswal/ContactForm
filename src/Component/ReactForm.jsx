import React, { useState } from "react";
import "../index.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const ReactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const getUserData = (event) => {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, message } = user;

    if (name && email && phone && address && message) {
      const res = await fetch(
        "https://myform-863fa-default-rtdb.firebaseio.com/MyForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Form Succesfully Submitted");
      }
    } else {
      alert("please fill all the data");
    }
  };
  return (
    <>
      <div className="container-body">
        <div className="container">
          <div className="title"> Join Us </div>
          <form method="POST">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={getUserData}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={user.email}
                  onChange={getUserData}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Mobile Number</span>
                <input
                  className="input100"
                  type="text"
                  name="phone"
                  placeholder="Enter your Mobile Number"
                  value={user.phone}
                  onChange={getUserData}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  className="input100"
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={user.address}
                  onChange={getUserData}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Message</span>
                <textarea
                  rows="3"
                  cols="50"
                  className="input10"
                  type="text"
                  name="message"
                  placeholder="Enter your message here..."
                  value={user.message}
                  onChange={getUserData}
                />
              </div>
            </div>
          </form>
          <Button
            className="form-btn"
            variant="contained"
            onClick={postData}
            endIcon={<SendIcon />}
          >
            <span>Submit</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ReactForm;
/* <Button className='contact100-form-btn' variant="contained" endIcon={<SendIcon />}>
                            <span>
                                Submit
                            </span>
                        </Button> */
