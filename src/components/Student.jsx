import React from "react";

function Student(props) {
  const handleUpdate = (stUpdate) => {
    props.updateProps(stUpdate, true, "UPDATE");
  };
  let { stInfo, stt } = props;
  return (
    <tr>
      <td>{stt}</td>
      <td>{stInfo.studentId}</td>
      <td>{stInfo.studentName}</td>
      <td>{stInfo.age}</td>
      <td>{stInfo.sex ? "Nam" : "Nữ"}</td>
      <td>
        <div className='template-demo'>
          <button type='button' className='btn btn-danger btn-icon-text'>
            Xem
          </button>
          <button
            type='button'
            className='btn btn-warning btn-icon-text'
            onClick={() => handleUpdate(stInfo)}
          >
            Sửa
          </button>
          <button type='button' className='btn btn-success btn-icon-text'>
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
