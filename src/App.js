import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "https://code.jquery.com/jquery-2.1.3.min.js";
import "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js";
   
import BasicNavbar from './common/navbar/BasicNavbar';
import Bio from './dashboard/bio/Bio';

function App() {
  return (
    <div className="App">
      <BasicNavbar />
      <Bio/>
    </div>
  );
}

export default App;
