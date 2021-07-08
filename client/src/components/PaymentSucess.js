import { Segment, Header } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";

// props = {
//   location: {
//     state:{
//       amount,
//       transantiontId
//     }
//   }
// }

const PaymentSuccess = ({ location: { state } }) => {
  // const PaymentSuccess = (props) => {
  //   const state = props.location;
  if (state && state.transactionID)
    return (
      <Segment basic textAlign="center">
        <Header as="h1" color="green">
          Thank You For Your Purchase!
        </Header>
        <p>You have been successfully charged: ${state.amount}</p>
        <p>Your Transcation Id is: {state.transactionID}</p>
        <Link to="/">Start Over</Link>
      </Segment>
    );
  else return <Redirect to="/" />;
};

export default PaymentSuccess;
