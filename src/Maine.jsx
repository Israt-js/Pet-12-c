import { Outlet } from "react-router-dom";
import Navber from "./component/Home/Navber";
import Footer from "./component/Home/Footer";

const Maine = () => {
    return(
      <div className="">
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    )
}
export default Maine;