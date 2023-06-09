import React from "react";
import Student from "./Student";

const ListStudent = ({ students, updateProps }) => {
  const handleUpdate = (selectedStudent, toggle, actionName) => {
    //Nhận các thông tin truyền từ Student lên
    updateProps(selectedStudent, toggle, actionName);
  };

  const elementListStudent = students.map((student, index) => (
    <Student
      key={student.studentId}
      stInfo={student}
      stt={index + 1}
      updateProps={handleUpdate}
    />
  ));

  return (
    <div className='card-body'>
      <h3 className='card-title'>Danh sách sinh viên</h3>
      <div className='table-responsive pt-3'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>{elementListStudent}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudent;
