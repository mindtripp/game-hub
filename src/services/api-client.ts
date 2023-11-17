import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "30346976f7b84a81947009e4e9af7113",
  },
});
