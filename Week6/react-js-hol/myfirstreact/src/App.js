
import CohortDetails from './CohortDetails';
import './App.css'; // Ensure this import is correct based on your project structure
import './CohortDetails.module.css'; // Ensure this import is correct based on your project structure

function App() {
  return (
    <div>
      <CohortDetails
        name="INTADM10F - .NET FSD"
        status="ongoing"
        startDate="Oct 2022"
        endDate="Dec 2022"
        coach="John Doe"
      />

      <CohortDetails
        name="ADM1H-FSD1 Java FSD"
        status="completed"
        startDate="Sep 2022"
        endDate="Nov 2022"
        coach="Jane Smith"
      />
    </div>
  );
}

export default App;
