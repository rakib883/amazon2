const FormattedPrice = ({ amount }: { amount: number }) => {
    // Price convertion function
  
    const formattedAmount = new Number(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  
    return <span>{formattedAmount}</span>;
  };
  
  export default FormattedPrice;