import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
  // const items = ["Paris", "London", "New York", "Tokyo", "Sydney"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  //const labels = ["danger", "warning", "secondary"];
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div>
      {/* <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/> */}
     { showAlert && <Alert onClose={()=>setShowAlert(false)}>
      
      This is children props text
      </Alert>}

      {/* {labels.map((label ) => (
          <Button>
            
          </Button>
        ))
      } */}

      <Button color="success" onClick={handleClick} />
      
    </div>
  )
}
export default App;