import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Hc93XehanlfCqQAc7gGgo51Y00VZXs31Xg';

    const onToken = token => {
        axios({
            url: "http://localhost:5000/payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment Successful!");
        }).catch(error => {
            console.log("Payment error: ", JSON.parse(error));
            alert(
                "There was an issue with your payment. Please ensure you use the provided credit card"
            );
        });
    };

    return (
        <StripeCheckout
        label="Pay Now"
        name="Crown Clothing Ltd"
        billingAddress
        shippingAddress
        image=""
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        sameSite="true"
        />
    )
};


export default StripeCheckoutButton;