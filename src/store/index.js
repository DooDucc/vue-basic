import { createStore } from "vuex";
import auth from "./auth";
import movies from "./movies";
import notifications from "./notifications";

export default createStore({
  modules: {
    auth,
    movies,
    notifications,
  },
});
