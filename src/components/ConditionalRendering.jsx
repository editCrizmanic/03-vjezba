const ConditionalRendering = ({ num }) => {
    const data = num
    const test = data 
        ?
        <p>ovo je podatak: {num}</p>
        :
        <p>truba</p>
    return test
  };
  
export default ConditionalRendering;