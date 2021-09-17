import Subject from "./components/Subject";
import InputsForm from "./components/InputsForm";
import CommonJs from "./components/CommonJs";
import "./styles.css";

function App() {
  return (
    <>
      {/* <CommonJs /> */}

      <Subject titleName="Hello React" />
      <InputsForm />

      {/* 
      <ScdContent />
      기존 코딩 지금은 사용하지 않는다.
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </>
  );
}

export default App;
