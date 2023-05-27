import MainHeader from "./Components/UI/MainHeader";
import BodyDiv from "./Components/UI/BodyDiv";
import Cart from "./Components/UI/Cart";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      <MainHeader />
      <BodyDiv />
      {/* <Cart /> */}
      {/* <Outlet /> */}
    </>
  );
}

export default App;
