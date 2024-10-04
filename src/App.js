import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "https://code.jquery.com/jquery-2.1.3.min.js";
import "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js";
   
import BasicNavbar from './common/navbar/BasicNavbar';
import Bio from './dashboard/bio/Bio';
import Projects from './dashboard/projects/Projects';
import Notes from './dashboard/notes/Notes';

function App() {
  return (
    <div className="App">
      <BasicNavbar />
      <Bio/>
      <Projects/>
      <Notes/>
    </div>
  );
}

export default App;
