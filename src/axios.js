import axios from "axios";

const instance = axios.create({
	headers: {"Content-Type": "application/json"},
	timeout: 5000,
});

export default instance;