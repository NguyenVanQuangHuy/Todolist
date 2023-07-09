import { BrowserRouter, Routes, Route} from "react-router-dom";
import Todolist from "./page/Todolist";
const Router = () => (
    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Todolist/>}/>
            </Routes>
        </BrowserRouter>
)
export default Router