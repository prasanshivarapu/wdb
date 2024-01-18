import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Spinner from "./BasicExample";
import BasicExample from "./BasicExample";
function Signin() {
    const [second, setsecond] = useState("");
    const [password, setpassword] = useState("");
    const [dat, setdate] = useState("");
    const [dat1, setdate1] = useState("");
    const navigat = useNavigate();
    const sub = async (event) => {
        event.preventDefault();
        console.log("alert");
        const formData = {
            second,
            password,
        };
        console.log(formData);

        setsecond("");
        setpassword("");

        try {
            const response = await fetch("http://localhost:5000/sign", {
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

                setTimeout(() => {
                    navigat("/view");
                }, 3000);
            } else {
                const dat = await response.json();
                setdate1(dat.error);
                console.log("error");
            }
            console.log("pras");
        } catch (error) {
            console.log(error);
        }
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

                {dat ? <BasicExample /> : ""}
                <span style={{ color: "red" }}>{dat}</span>
                <span style={{ color: "red" }}>{dat1}</span>
            </form>
        </div>
    );
}

export default Signin;
