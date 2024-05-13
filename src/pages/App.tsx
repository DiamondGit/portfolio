import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageLayout from "../components/wrappers/PageLayout";
import "./App.scss";
import Main from "./Main";
import NotFound from "./NotFound";

function App() {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PageLayout>
        </Router>
    );
}

export default App;
