const RemoveWishlistButtons = ({ removeFromCart, moveToWishlist, updateCart }) => {
  const handleUpdateButtonClick = () => {
    console.log("Update button clicked");
    updateCart();
  };

  return (
    <>
      <div className="col-8 d-flex justify-content-between remove_wish">
        <p
          title="REMOVE ITEM"
          onClick={removeFromCart}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-trash-alt text-warning fa-2x"></i>
          {/* <br /> 
          <small>REMOVE ITEM</small> */}
        </p>
        <p
          title="UPDATE ITEM"
          onClick={handleUpdateButtonClick} // Use handleUpdateButtonClick instead of updateCart directly
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-pen-to-square text-warning fa-2x"></i>
          {/* <br />
          <small>MOVE TO WISH LIST</small>  */}
        </p>
        <p
          title="MOVE TO WISH LIST"
          onClick={moveToWishlist}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-heart text-warning fa-2x"></i>
          {/* <br />
          <small>MOVE TO WISH LIST</small>  */}
        </p>
      </div>
    </>
  );
};

export default RemoveWishlistButtons;
