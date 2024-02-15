import { createRoot } from "react-dom/client";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
        <Navbar />
        <ItemListContainer greeting={'Funciona'}/>
    </>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
