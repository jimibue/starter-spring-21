import React from "react";
import axios from "axios";
import { Divider, Header, Segment, Label } from "semantic-ui-react";
import BraintreeDrop from "../components/BraintreeDrop";

class Home extends React.Component {
  state = { amount: 150.0 };
  render() {
    const { amount } = this.state;
    return (
      <Segment>
        <Header>Payments</Header>
        <Label>Payment amount: {amount}</Label>
        <Divider />
        <BraintreeDrop amount={amount} />
      </Segment>
    );
  }
}

export default Home;
