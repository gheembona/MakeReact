import React, { useState } from "react";
import CommonJs from "./CommonJs";

function InputsForm() {
  const [usrList, setUsrList] = useState([]); //입력 값을 저장하면, 그 값은 배열 타입 usrList에 저장한다.
  const [state, setState] = useState({
    //onChang 할 때, 입력 값을 state에 가지고 있는다.
    // 기본 값은 빈 값이다.
    userName: "",
    email: ""
  });

  const onChange = (e) => {
    //이벤트가 발생하는 object를 target한다.
    const { name, value } = e.target; //target된 object의 name값 과 value값을 추출한다.
    /* 입력된 값을 state에 업데이트 한다.
     * 기존의 state 값을 먼저 저장하고, 새로 추출한 값을 후에 저장한다.
     * 그 값은 다시 state에 저장하여 새로운 배열을 생성한다.
     */
    setState((state) => ({ ...state, [name]: value }));
  };

  const onSave = () => {
    /* usrList에 새로운 배열을 업데이트 한다.
     * (input에 입력 값을 입력할 때 마다 발생되었던 데이터는 state라는 배열에 앞서 저장해두었다. )
     * 기존의 usrList의 값을 먼저 저장하고, 새롭게 저장될 데이터 state를 저장한다. !!배열 업데이트됨!!
     */
    setUsrList([...usrList, state]);
    setState({
      username: "",
      email: ""
    });
    return usrList;
  };

  return (
    <>
      {/* 이름 */}
      <span className="input-box">
        <label>username</label>
        <input name="userName" onChange={onChange} />
      </span>
      <span className="input-box">
        <label>e-mail</label>
        <input name="email" onChange={onChange} />
      </span>

      <button className="button-save" onClick={onSave}>
        SAVE
      </button>
      <button className="button-reset">RESET</button>

      <>
        {usrList.length !== 0
          ? usrList.map((usrList, index) => <User user={usrList} key={index} />)
          : null}
      </>
    </>
  );
}

function User({ user }) {
  return (
    <div>
      <b>{user.userName}</b> <span>{user.email}</span>
    </div>
  );
}

export default InputsForm;
