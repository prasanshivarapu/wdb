import React, { useEffect, useState } from "react";

function View() {
    const [dat, setdat] = useState([]);
    useEffect(() => {
        const app = async () => {
            const response = await fetch("http://localhost:5000/get");
            const data = await response.json();
            console.log(data);
            setdat(data);
        };
        app();
    }, []);

    return (
        <div>
            {/* <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> first name</th>
                        <th scope="col"> second name</th>
                        <th scope="col"> password </th>
                    </tr>
                </thead>
                <tbody>
                    {dat.map((each) => (
                        <tr>
                            <td>{each.firstname}</td>
                            <td>{each.secondname}</td>
                            <td>{each.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">fidrstname</th>
                        <th scope="col">second name</th>
                        <th scope="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    {dat.map((each) => (
                        <tr>
                            <td>{each.firstname}</td>
                            <td>{each.secondname}</td>
                            <td>{each.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default View;
