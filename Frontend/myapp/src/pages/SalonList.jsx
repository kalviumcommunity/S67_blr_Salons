import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/addSalon";

const SalonList = () => {
    const [Salons, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("📡 Fetching data from API...");
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                console.log("📥 Received data:", data);
                setAttractions(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("❌ Error fetching Salons:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <div>
            <h2>Salons List</h2>
            {attractions.length === 0 ? (
                <p>No Salons found.</p>
            ) : (
                Salons.map((salon) => (
                    <div key={salon._id}>
                        <h3>{salon.name}</h3>
                        <p>{salon.description}</p>
                        <img src={salon.images[0]} alt={salon.name} width="200" />
                    </div>
                ))
            )}
        </div>
    );
};

export default SalonList;