import { useRef, useState } from "react";

import { insertOrder } from "../modules/db";

function CheckoutForm(props) {
  const theForm = useRef();
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: props.cart,
    });

    //If response it not null etc and it has a length:
    //I am assuming that it is an array
    if (response && response.length) {
      //When we have a response from server, we set the payment 2 b completed!
      setPaymentCompleted(true);
    }

    console.log(paymentCompleted);
  }

  return (
    <>
      {paymentCompleted ? ( // If the payment is completed, return THANK
        <p>THANK YOU</p>
      ) : (
        // Else, return the form
        <form onSubmit={submit} ref={theForm}>
          <div className="form-control">
            <label htmlFor="form-name">Name</label>
            <input required type="text" name="name" id="form-name" />
          </div>
          <div className="form-control">
            <label htmlFor="form-email">E-mail</label>
            <input required type="email" name="email" id="form-email" />
          </div>
          <div className="form-control">
            <label htmlFor="form-address">Address</label>
            <textarea required name="address" id="form-address" />
          </div>
          <button>Pay</button>
        </form>
      )}
    </>
  );
}

export default CheckoutForm;
