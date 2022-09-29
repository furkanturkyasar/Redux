import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { quotesSelector } from "../../redux/quotesSlice";

const QuoteDetail = () => {
  const { quote_id } = useParams();

  const quote = useSelector(quotesSelector).find(
    (item) => item.quote_id === Number(quote_id)
  );

  if (!quote) {
    return <Navigate to="/quotes" />;
  }

  return (
    <div>
      <h1>Quote Details</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
};

export default QuoteDetail;
