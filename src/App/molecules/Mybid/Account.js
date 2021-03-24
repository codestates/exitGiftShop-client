import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { editNick } from "../../../reducers/user";
import { Link } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  > div:nth-child(2) div:last-child {
    background-color: #f3f3f3;
  }
`;

const DetailBodyBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-top: 10px;

  span {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    margin-top: 5px;
    padding-top: 5px;
    opacity: 0.5;
  }

  div:last-child {
    margin-top: 10px;
    width: 100%;
    padding: 15px;
    border: 1px solid #d4aea9;
    border-radius: 5px;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: -10px;
    font-size: 22px;
  }
`;
const EditBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
`;
const EditBox2 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 13px;
  margin-bottom: 10px;
  font-size: 22px;
  button {
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
`;
const InputStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;

  button {
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
  input {
    outline: none;
    border: 1px solid black;
    font-size: 19px;
    border: none;
  }
`;

const Account = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [modify, setModify] = useState(false);
  const [userNick, setUserNick] = useState({
    user_nick: "",
    current_user: "",
  });

  const { user_nick, current_user } = userNick;

  const handleModify = () => {
    setModify(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value = currentUser.user_nick || "null";
    console.log(e.target[0].value);
  };
  const handleInput = (e) => {
    const { value } = e.target;
    setUserNick({ user_nick: value });
  };

  const handleErrorBtn = (e) => {
    e.preventDefault();
  };
  const handleEditNick = async (e) => {
    e.preventDefault();
    const uuId = currentUser.uuid;
    const nick = userNick.user_nick;
    const data = await dispatch(editNick({ user_nick: nick, uuid: uuId }));
    setUserNick({ user_nick: data.payload.user_nick });
  };
  return (
    <>
      <MybidBox>
        <BidDetailBox>
          <DetailBodyBox>
            <div>
              <h1>Profile</h1>
            </div>
            <span>Username</span>
            {modify ? (
              <>
                <form onSubmit={handleSubmit}>
                  <InputStyle>
                    <input
                      onChange={handleInput}
                      placeholder={currentUser.user_nick || "null"}
                    ></input>
                    <button onClick={handleEditNick}>Edit</button>
                  </InputStyle>
                </form>
              </>
            ) : (
              <>
                <EditBox onClick={handleModify}>
                  <h1>{currentUser.user_nick}</h1>
                  <button onClick={handleErrorBtn}>Edit</button>
                </EditBox>
              </>
            )}
          </DetailBodyBox>
          <DetailBodyBox>
            <div>
              <h1>Email</h1>
            </div>
            <span>Primary Login</span>
            <div>{currentUser.user_email || "email"}</div>
          </DetailBodyBox>
          <DetailBodyBox>
            <EditBox2>
              <h1>Password</h1>
              <Link to="/mybid/account/password">Edit</Link>
            </EditBox2>

            <span>
              You cannot change a password as your current login method does not
              have a password.
            </span>
          </DetailBodyBox>
        </BidDetailBox>
      </MybidBox>
    </>
  );
};

export default Account;
