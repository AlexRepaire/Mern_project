import axios from "axios";

//Instance d'axios
export default axios.create({
    // PAS BESOIN DE BASE URL SI ON LE DEFINIT DANS LE PACKAGE JSON => "proxy": "http://localhost:5000"
    baseURL: "http://localhost:5000",
    headers: {
        'Content-Type': 'application/json',
    }
});