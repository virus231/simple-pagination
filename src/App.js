import { BrowserRouter, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
}
