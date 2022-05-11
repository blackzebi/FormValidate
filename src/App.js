import React from "react";
import "./App.css";
import logo from "./images/Logo.png";
import phone from "./images/Phone.png";
import user from "./images/User_Icon.png";
import email from "./images/email.png";
import content from "./images/content.png";

function App() {

  return (
    <div className="App">
      <div className="form-login" style={{ boxSizing: "border-box" }}>
        <form className="form">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="container">
            <div className="password margin-topBottom">
            <img
                src={user}
                alt="Họ và tên user"
                style={{
                  width: "26px",
                  height: "26px",
                  position: "absolute",
                  left: "4.05%",
                  right: "90.27%",
                  top: "30.55%",
                  bottom: "62.4%",
                }}
              />
              <input
                className="padding-topBottom"
                placeholder="Họ và tên"
                type="text"
                required
                style={{
                  borderRadius: "5px",
                  border: "1px solid rgba(128, 128, 128, 0.5)",
                  width: "100%",
                  paddingLeft: "5em",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div className="password margin-topBottom">
            <img
                src={email}
                alt="Địa chỉ email user"
                style={{
                  position: "absolute",
                  width: "26px",
                  height: "26px",
                  left: "4.05%",
                  right: "90.27%",
                  top: "30.55%",
                  bottom: "62.4%",
                }}
              />
              <input
                className="padding-topBottom"
                placeholder="Email"
                type="email"
                required
                style={{
                  borderRadius: "5px",
                  border: "1px solid rgba(128, 128, 128, 0.5)",
                  width: "100%",
                  paddingLeft: "5em",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div className="phone margin-topBottom">
              <img
                src={phone}
                alt="Số điện thoại user"
                style={{
                  position: "absolute",
                  left: "4.05%",
                  right: "90.27%",
                  top: "30.55%",
                  bottom: "62.4%",
                }}
              />
              <input
                className="padding-topBottom"
                placeholder="Phone"
                type="number"
                required
                style={{
                  borderRadius: "5px",
                  border: "1px solid rgba(128, 128, 128, 0.5)",
                  width: "100%",
                  paddingLeft: "5em",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div className="password margin-topBottom">
            <img
                src={content}
                alt="Nội dung liện hệ của user"
                style={{
                  position: "absolute",
                  width: "26px",
                  height: "26px",
                  left: "4.05%",
                  right: "90.27%",
                  top: "30.55%",
                  bottom: "62.4%",
                }}
              />
              <input
                className="padding-topBottom"
                placeholder="Nội dung liên hệ"
                style={{
                  borderRadius: "5px",
                  border: "1px solid rgba(128, 128, 128, 0.5)",
                  width: "100%",
                  paddingLeft: "5em",
                  boxSizing: "border-box",
                }}
              />
            </div>
            
          </div>
          <div className="button">
            <div className="button-login margin-topBottom">
              <button
                className="padding-topBottom full-width button-hover"
                type="submit"
                primary
                style={{
                  color: "#fff",
                  backgroundColor: "#0952A3",
                  borderRadius: "5px",
                  border: "1px solid rgba(128, 128, 128, 0.5)",
                  fontWeight: "700",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>

            </div>
            <div className="button-register margin-topBottom">
              <input 
                type="reset" 
                className="padding-topBottom full-width button-hover"
                value="Clear"
                style={{
                  color: "#A0A0A0",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  border: "1px solid rgba(128, 128, 128, 0.5)",
                  fontWeight: "700",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
