import { createClient } from "pexels";

const client = createClient(process.env.REACT_APP_API_KEY_PEXELS);

export default client;
