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
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};


export default StripeCheckoutButton;