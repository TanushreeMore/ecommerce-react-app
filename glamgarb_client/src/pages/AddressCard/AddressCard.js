import React from "react";

const AddressCard = ({address}) => {
  return (
    <div className="mb-5">
      <div>
        <h5 className="font-weight-bold mb-3 ">
          {address?.firstName+" "+address?.lastName}
          {/* Tanushree More */}
        </h5>
        <h6>
          {address?.streetAddress},{address?.city},{address?.state},
          {/* T/111, Dream Land, Dream City, Heaven Road, */}
          <br />
          {address?.zipCode}.
          {/* FairyTale, 111 111 */}
        </h6>
      </div>
      <div>
        <h5 className="font-weight-bold mb-0 mt-4 ">Contact Number</h5>
        <h6>
          {address?.mobile}
          {/* 00000 00000 */}
          </h6>
      </div>
    <hr className="text-muted w-100 mt-2 "  style={{ background:"#E5E4E2",}}/>
    </div>
  );
};

export default AddressCard;
