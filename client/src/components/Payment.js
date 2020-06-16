import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5.00 for 5 Credits"
        amount={500}
        token={(token) =>
          console.log("token from stripe react checkout ", token)
        }
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}
export default Payment;
