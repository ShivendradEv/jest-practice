import React, { useEffect, useState } from 'react';

const FetchData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            if (response.status !== 200) {
                console.error("Error fetching users");
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <ul>
            {data.users && data.users.map((item) => (
                <li key={item.id}>{item.firstName}</li>
            ))}
        </ul>
    )
}

export default FetchData
