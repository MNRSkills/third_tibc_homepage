import {Routes, Route} from "react-router-dom";

import Layout from "./Components/Layout/layout";
import Homepage from "./Components/Pages/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
        

      </Layout>
     
    </div>
  );
}

export default App;
