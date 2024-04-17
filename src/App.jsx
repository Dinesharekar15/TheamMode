import { useEffect, useState } from "react";
import {Theamprovider} from "./Context/Theamcontext"
import Card from "./Componenets/Card";
import ThemeBtn from "./Componenets/Theambtn";

function App() {
  const [theammode, settheammode] = useState(0);
   
  function lightmode(){
    settheammode("light")

  }
  function darkmode(){
    settheammode ("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(theammode)
  },[theammode])

  return (
    <Theamprovider value={{theammode,lightmode,darkmode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </Theamprovider>
  );
}

export default App;
