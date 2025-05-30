import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { UseCheckout } from "./UseCheckout";

function CheckoutButton({ bookingId }) {
  const {checkout,isCheckingOut}=UseCheckout()
  
  return (
    <Button variation="primary" size="small" onClick={()=>checkout({bookingId})} disabled={isCheckingOut}>
      Check out
    </Button>
  );
}
CheckoutButton.propTypes={
  bookingId:PropTypes.any,
}
export default CheckoutButton;
