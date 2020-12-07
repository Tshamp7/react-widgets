import Axios from "axios";

const wikipedia = axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
});

export default wikipedia;
