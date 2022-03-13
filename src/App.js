import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import './App.css';
import Address from './component/profile/Address';
import Footer from './component/profile/Footer';

function App() {
  return (
    <div className="App">
     
      <div>
        <p className="down" style={{paddingTop: "5%"}}>I accept challenges as a way to grow</p>
      </div>
      <fieldset style= {{width: "60%", marginLeft: "20%", backgroundColor: "black", border: "5px solid blue",
    marginBottom: "5%"}}>
      <legend>
      < ProfilePhoto />
      </legend>
      
      <FullName className = "fullname"/>
      <Address />
      </fieldset>
      <div>
      <p className="down"> I believe the world is a good place and I have a place in it</p>
      </div>
      
      <Footer />
    </div>
    
  );
}

export default App;
