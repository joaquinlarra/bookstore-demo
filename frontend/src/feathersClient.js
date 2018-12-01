import feathers from "@feathersjs/client";
import auth from "@feathersjs/authentication-client";

const host = process.env.REACT_APP_BACKEND_HOST;
const authOptions = {  };

export default feathers()
    .configure(feathers.rest(host).fetch(window.fetch.bind(window)))
    .configure(auth(authOptions));