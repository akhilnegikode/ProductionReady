import Axios from "axios";
import config from "./config";

const axios = Axios.create({
  baseURL: `${config.api.baseUrl}`,
});

export default axios;
