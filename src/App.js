import "./App.css";
import AddUser from "./component/AddRecord/AddRecord";
import Readdata from "./component/GetData/Getdata";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
    
      <AddUser></AddUser>
      <Readdata></Readdata>
    </div>
  );
}

export default App;
 
