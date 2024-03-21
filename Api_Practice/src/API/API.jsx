import React, { useEffect, useState } from 'react';

const API = () => {
    const [apiData, setApiData] = useState([]);
    const api = 'https://65aff7862f26c3f2139c2dc7.mockapi.io/zarghabcity/totalplotsavailable';

    const fetchApiData = async (api) => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setApiData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiData(api);
    }, []);

    return (
        <div>
            <h2>API practice</h2>
            {apiData.length > 0 ? (
                <div>
                    <h3>Total plots available:</h3>
                    <ul>
                        {apiData.map((item, index) => (
                            <li key={index}>
                                {/* Render each item's properties */}
                                Plot ID: {item.plot_no}, Category: {item.category}, Status: {item.status}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default API;
