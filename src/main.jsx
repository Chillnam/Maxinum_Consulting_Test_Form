import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./BLL/store";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
