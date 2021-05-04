import "./App.css";
import AppNavbar from "./components/AppNavbar";
import AdmissionForm from "./components/AdmissionForm";
import StudentList from "./components/StudentList";

function App() {
    return (
        <div>
            <AppNavbar />
            <AdmissionForm />
            <StudentList />
        </div>
    );
}

export default App;
