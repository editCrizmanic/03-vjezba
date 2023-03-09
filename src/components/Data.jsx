import ConditionalRendering from "./ConditionalRendering";

const Data = ({ num }) => {
    return (
      <div>
        <ConditionalRendering num={num} />
      </div>
    );
  };
  
export default Data;