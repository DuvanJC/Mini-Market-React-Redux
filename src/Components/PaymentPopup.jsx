import React from "react";

class PaymentPopup extends React.Component {
  render() {

    return (
      <div>
        <form action="https://checkout.wompi.co/p/" method="GET">
          <input type="hidden" name="public-key" value="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH" />
          <input type="hidden" name="currency" value="COP" />
          <input type="hidden" name="amount-in-cents" value="7890000" />
          <input type="hidden" name="reference" value="37DNKF84S92N1S" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Pay with Wompi</button>
        </form>
      </div>
    );
  }
}
export default PaymentPopup;