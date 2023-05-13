import React, { useEffect, useState } from "react";

function Form({
  selectedStudent,
  actionName,
  submitAddProps,
  submitUpdateProps,
}) {
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    age: 0,
    sex: false,
    birthDate: "",
    birthPlace: "",
    address: "",
  });

  useEffect(() => {
    setFormData(selectedStudent);
  }, [selectedStudent]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    submitAddProps(formData, false);
  };

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    submitUpdateProps(formData, false);
  };

  const { studentId, studentName, age, sex, birthDate, birthPlace, address } =
    formData;

  const elementBtnSubmit =
    actionName === "ADD" ? (
      <button
        type='submit'
        className='btn btn-primary me-2'
        onClick={handleSubmitAdd}
      >
        Create
      </button>
    ) : (
      <button
        type='submit'
        className='btn btn-primary me-2'
        onClick={handleSubmitUpdate}
      >
        Update
      </button>
    );
  return (
    <div className='col-5 grid-margin'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>Thông tin sinh viên</h3>
          <form className='form-sample'>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Mã sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='studentId'
                  value={studentId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tên sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='studentName'
                  value={studentName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tuổi</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='age'
                  value={age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Giới tính</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  name='sex'
                  value={sex}
                  onChange={handleChange}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Ngày sinh</label>
              <div className='col-sm-9'>
                <input
                  type={"date"}
                  className='form-control'
                  placeholder='dd/mm/yyyy'
                  name='birthDate'
                  value={birthDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Nơi sinh</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  name='birthPlace'
                  value={birthPlace}
                  onChange={handleChange}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"ĐN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Địa chỉ</label>
              <div className='col-sm-9'>
                <textarea
                  className='form-control'
                  value={address}
                  name='address'
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Button Submit */}
            {elementBtnSubmit}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
