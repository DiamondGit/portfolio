import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainContent from "./MainContent";
import NotFoundPage from "./NotFoundPage";
import PageLayout from "../components/wrappers/PageLayout";
import "./App.scss";

function App() {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </PageLayout>
        </Router>
    );
}

export default App;
