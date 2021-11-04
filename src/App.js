
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BussinessUnitDetailsModal from './pages/BussinessUnitDetailsModal';
import Details from './pages/Details';
import DocumentTypeCard from './pages/DocumentTypeCard';

function App() {
  return (
    <div >
     {/* <Details></Details> */}
     <BussinessUnitDetailsModal></BussinessUnitDetailsModal>
     <DocumentTypeCard></DocumentTypeCard>
    </div>
  );
}

export default App;
