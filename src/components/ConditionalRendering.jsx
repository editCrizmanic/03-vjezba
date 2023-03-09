const ConditionalRendering = ({ num }) => {
    return (
      <>
        {num && (
          <div>
            {!isNaN(num) ? (
              <p>Vrijednost je broj: {num}</p>
            ) : (
              <p>Vrijednost nije broj, već {typeof num} te iznosi {num}</p>
            )}
          </div>
        )}
      </>
    );
  };
  
  export default ConditionalRendering;