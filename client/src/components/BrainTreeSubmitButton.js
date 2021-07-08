// import React from "react";
// import { Button } from "semantic-ui-react";

// class BrainTreeSubmitButton extends React.Component {
//   render() {
//     const { onClick, isDisabled, text } = this.props;
//     return (
//       <Button primary onClick={onClick} disabled={isDisabled}>
//         {text}
//       </Button>
//     );
//   }
// }

// export default BrainTreeSubmitButton;

import React from "react";
import { Button } from "semantic-ui-react";

const renderSubmitButton = ({ onClick, isDisabled, text }) => {
  return (
    <Button primary onClick={onClick} disabled={isDisabled}>
      {text}
    </Button>
  );
};

export default renderSubmitButton;

// const BrainTreeSubmitButton = ({onClick, isDisabled, text}) => {

// const BrainTreeSubmitButton = (props) => {
// const { onClick, isDisabled, text } = props;

//   return (
//     <Button
//       primary
//       onClick={onClick}
//       disabled={isDisabled}
//     >
//       { text }
//     </Button>
//   )
// }
