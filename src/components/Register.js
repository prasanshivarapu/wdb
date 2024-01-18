import React, { useState } from "react";
import "./style.css";
function Register() {
    const [first, setfirst] = useState("");
    const [second, setsecond] = useState("");
    const [password, setpassword] = useState("");
    const [dat, setdate] = useState("");
    const sub = async (event) => {
        event.preventDefault();
        console.log("alert");
        const formData = {
            first,
            second,
            password,
        };
        console.log(formData);
        setfirst("");
        setsecond("");
        setpassword("");

        try {
            const response = await fetch("http://localhost:5000/load", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const dat = await response.json();
                console.log(dat);
                setdate(dat.msg);
            } else {
                console.log("error");
            }
            console.log("pras");
        } catch (error) {
            console.log(error);
        }
    };
    const firstname = (event) => {
        setfirst(event.target.value);
    };
    const secondname = (event) => {
        setsecond(event.target.value);
    };
    const pass = (event) => {
        setpassword(event.target.value);
    };
    return (
        <div className="mar">
            <form className="row g-3" onSubmit={sub}>
                <div className="col-12">
                    <label htmlFor="validationDefault01" className="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        onChange={firstname}
                        value={first}
                        required
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="validationDefault02" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="validationDefault02"
                        onChange={secondname}
                        value={second}
                        required
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="validationDefault03" className="form-label">
                        password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="validationDefault03"
                        onChange={pass}
                        value={password}
                        required
                    />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Submit form
                    </button>
                </div>
                <span style={{ color: "red" }}>{dat}</span>
            </form>
        </div>
    );
}

export default Register;
