import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FormField from "./components/FormField";
import Button from "./components/SendButton";
import CheckoutDefault from "./components/CheckoutDefault";

import { useSelector, useDispatch } from 'react-redux';
import { selectValue } from "../../features/test/testSlice";
import CheckoutSuccess from "./components/CheckoutSuccess";

export default function Checkout() {
    const success = useSelector((state) => {
        return selectValue(state);
    })
    return (
        <>
          <Navbar/>
          {success == "success" ? <CheckoutSuccess/> : <CheckoutDefault/>}
          <Footer/>
        </>
      );
}