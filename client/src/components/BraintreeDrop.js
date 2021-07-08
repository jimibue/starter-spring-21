import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import BraintreeDropin from "braintree-dropin-react";
import braintree from "braintree-web-drop-in";
import BrainTreeSubmitButton from "./BrainTreeSubmitButton";
import axios from "axios";
import { Redirect } from "react-router-dom";
// useHistory

class BraintreeDrop extends React.Component {
  // history = useHistory()
  state = { loaded: false, token: "", redirect: false, transactionID: "" };

  componentDidMount = async () => {
    try {
      let res = await axios.get("/api/braintree_token");
      console.log(res);
      console.log(res.data);
      this.setState({
        token: res.data,
        loaded: true,
      });
    } catch (e) {
      console.log(e);
    }
  };
  handlePayment = async (payload) => {
    const { amount } = this.props;
    console.log({ amount, ...payload });
    let res = await axios.post("/api/payment", { amount, ...payload });
    console.log(res);
    // IF SUCCESSFULL LETS REDIRECT
    this.setState({
      redirect: true,
      transactionID: res.data,
    });
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/payment_success",
            state: {
              amount: this.props.amount,
              transactionID: this.state.transactionID,
            },
          }}
        />
      );
    }
    if (this.state.loaded) {
      return (
        <Segment>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={this.state.token}
            handlePaymentMethod={this.handlePayment}
            renderSubmitButton={BrainTreeSubmitButton}
          />
        </Segment>
      );
    } else {
      return (
        <>
          <Dimmer active>
            <Loader>Loading Payment UI</Loader>
          </Dimmer>
        </>
      );
    }
  }
}
export default BraintreeDrop;
