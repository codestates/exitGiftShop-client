import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { currentPassword, editPassword } from "../../../reducers/user";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();

const MybidBox = styled.div`
  background-color: white;
  width: 70%;
  height: 100%;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.3);
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BidDetailBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  form div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-top: 5.5px;
  }
  form div:last-child button {
    width: 60px;
    height: 40px;
    cursor: pointer;
  }
`;

const DetailBodyBox = styled.div`
  font-size: 19px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  padding-top: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  input {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    padding: 15px;
    border: 1px solid #d4aea9;
    border-radius: 5px;
    outline: none;
  }
`;
// const EditBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

function Password() {
  const dispatch = useDispatch();
  const [validate, setValidate] = useState(true);
  const [valiCurrentPassword, setVailCurrentPassword] = useState(true);
  const [inputs, setInputs] = useState({
    current_password: "",
    user_password: "",
    user_password2: "",
  });
  const validateCheck = (e) => {
    if (e.target[1].value !== e.target[2].value) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };
  const { current_password, user_password, user_password2 } = inputs;
  const { currentUser } = useSelector((state) => state.user);

  // const validatePassword = (password) => {
  //   return /[\w\d]{4,}/.test(password) ? true : false;
  // };

  const handlePassword = async (e) => {
    if (!current_password || !user_password || !user_password2) {
      return;
    }
    const data = await dispatch(currentPassword({ currentUser }));
    const bytes = CryptoJS.AES.decrypt(
      data.payload,
      process.env.REACT_APP_SALT
    );
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    if (originalText !== current_password) {
      setVailCurrentPassword();
      return;
    }
    if (user_password !== user_password2) {
      return;
    }

    const data2 = await dispatch(editPassword({ currentUser, user_password }));
    if (!data2) {
      return;
    }
    if (data2.type === "user/editPassword/rejected") {
      return;
    }
    console.log(data2);
    return;
  };

  const inputhandler = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <>
      <MybidBox>
        <BidDetailBox>
          <form onSubmit={validateCheck}>
            <DetailBodyBox>
              <h1>Current Password</h1>
              <input
                type="password"
                required
                onChange={inputhandler}
                name="current_password"
              ></input>
            </DetailBodyBox>
            <DetailBodyBox>
              <h1>New Password</h1>
              <input
                type="password"
                required
                onChange={inputhandler}
                name="user_password"
              ></input>
            </DetailBodyBox>
            <DetailBodyBox>
              <h1>Confirm New Password</h1>
              <input
                type="password"
                required
                onChange={inputhandler}
                name="user_password2"
              ></input>
            </DetailBodyBox>
            {!valiCurrentPassword ? (
              <>
                <span>현재 비밀번호가 같지않습니다</span>
              </>
            ) : !validate ? (
              <>
                <span>확인 비밀번호가 다릅니다</span>
              </>
            ) : (
              <></>
            )}
            <div>
              <button onClick={handlePassword}>Edit</button>
            </div>
          </form>
          <p>
            Your password must be between 8 and 30 characters and must contain
            at least one uppercase letter along with number digits and special
            character (ex:&,#,@,!,%,^,&,*,(,)){" "}
          </p>
        </BidDetailBox>
      </MybidBox>
    </>
  );
}

export default Password;
