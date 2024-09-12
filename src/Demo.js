import React, { useState, useEffect } from 'react';


export default function Demo() {

    const baseURL = "https://jsonplaceholder.typicode.com/todo";

    const [data, setData] = useState([])

    useEffect(function () {
        try {
            fetch(baseURL).then((res) => res.json()).then((data) => setData(data))
        } finally {
            console.log("use effect is running")
            console.log(data)
        }
    }, [])

    return (
        <div>

        </div>
    )
}