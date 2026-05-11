import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [count, setCount] = useState(1);

  let [mainimg,setMainimg]=useState("https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-06.jpg")

  let [password, setPassword] = useState(false);
  // t coulent=1

  let display = () => {
    setCount(count + 1);
  };

  let addData = (num1, num2) => {
    alert(num1 + num2);
  };

  let changeSrc=(event)=>{
     setMainimg(event.target.src);
      
  }

  return (
    <>

    <ImageGallery/>


    <div className="max-w-[600px] mx-auto border-2">
        <img
          src={mainimg}
          alt=""
        />
        <div className="grid grid-cols-4 gap-3">
          <img
          onClick={changeSrc}
            src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-06.jpg"
            alt=""
          />
          <img
           onClick={changeSrc}
            src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-08.jpg"
            alt=""
          />
          <img
           onClick={changeSrc}
            src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-10.jpg"
            alt=""
          />
          <img
           onClick={changeSrc}
            src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-05.jpg"
            alt=""
          />
        </div>
      </div>





      <input className="border-1" type={password ? "text" : "password"} />
      <button onClick={() => setPassword(!password)}>
        {password ? "hide" : "show"}
      </button>

      <h1>{count}</h1>
      <button onClick={display}>Save</button>
      <button onClick={() => addData(25, 99)}>Add Data</button>
      <button
        onClick={() => {
          alert();
        }}
      >
        Show
      </button>

      
    </>
  );
}

export default App;
