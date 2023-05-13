import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  const [students, setStudents] = useState([
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      age: 20,
      sex: true,
      birthDate: "2003-04-15",
      birthPlace: "HN",
      address: "Số 1 Phạm Hùng",
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Thị B",
      age: 22,
      sex: false,
      birthDate: "2001-09-09",
      birthPlace: "ĐN",
      address: "Số 1 Trần Duy Hưng",
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Văn C",
      age: 18,
      sex: true,
      birthDate: "2005-11-22",
      birthPlace: "HCM",
      address: "22 Lý Tự Trọng",
    },
  ]);

  const [isToggle, setIsToggle] = useState(false);
  const [actionName, setActionName] = useState("");
  const [selectedStudent, setSelectedStudent] = useState({});

  const handleAddStudent = (toggle, actionName) => {
    setIsToggle(toggle);
    setActionName(actionName);
  };

  const handleSubmitAdd = (stNew, toggle) => {
    setStudents([...students, stNew]);
    setIsToggle(toggle);
  };

  const handleUpdateStudent = (selectedStudent, toggle, actionName) => {
    setActionName(actionName);
    setIsToggle(toggle);
    setSelectedStudent(selectedStudent);
  };

  const handleSubmitUpdate = (stUpdate, toggle) => {
    const updatedStudents = students.map((student) =>
      student.studentId === stUpdate.studentId ? stUpdate : student
    );
    setStudents(updatedStudents);
    setIsToggle(toggle);
  };

  let elementForm = "";
  if (isToggle) {
    elementForm = (
      <Form
        actionName={actionName}
        submitAddProps={handleSubmitAdd}
        selectedStudent={selectedStudent}
        submitUpdateProps={handleSubmitUpdate}
      ></Form>
    );
  }

  return (
    <div>
      <div className='row'>
        <div className='col-lg-7 grid-margin stretch-card'>
          <div className='card'>
            {/* START CONTROL */}
            {/* B2. Truyền props map với hàm nhận dữ liệu */}
            <Control addprops={handleAddStudent}></Control>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent
              students={students}
              updateProps={handleUpdateStudent}
            ></ListStudent>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {elementForm}
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default ParentComp;
