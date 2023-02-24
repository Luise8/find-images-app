import { createClient } from "pexels";

const client = createClient(process.env.REACT_APP_API_KEY);

export default client;
