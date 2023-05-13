import React from "react";

const Control = (props) => {
  const handleAdd = () => {
    props.addprops(true, "ADD");
  };

  return (
    <div className='card-header'>
      <div className='row'>
        <div className='col-3'>
          <button
            type='button'
            className='btn btn-primary btn-icon-text'
            onClick={handleAdd}
          >
            Thêm mới sinh viên
          </button>
        </div>
      </div>
    </div>
  );
};

export default Control;
