export const Transaction = ({ transaction }) => {
  return (
    <div className="one-form">
      <div className="form-elem">Id: {transaction.id}</div>
      <div className="form-elem">Date: {transaction.date}</div>
      <div className="form-elem">Author: {transaction.author}</div>
      <div className="form-elem">Sum: {transaction.sum}</div>
      <div className="form-elem">Category: {transaction.category}</div>
      {transaction.comment ? (
        <div className="form-elem">Comment: {transaction.comment}</div>
      ) : null}
    </div>
  );
};
