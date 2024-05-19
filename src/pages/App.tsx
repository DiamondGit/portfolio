import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNavLayout from "../components/wrappers/TopNavLayout";
import "./App.scss";
import Main from "./Main";
import NotFound from "./NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<TopNavLayout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
