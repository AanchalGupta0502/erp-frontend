import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PartyMaster from "./pages/PartyMaster"
import PartyMasterReport from './pages/PartyMasterReport'
import Menu from './pages/Menu'
function App() {
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/partyMaster-entry" element={<PartyMaster/>}/>
            <Route path="/partyMaster-report" element={<PartyMasterReport/>}/>
        </Routes>
    
    
    </BrowserRouter>
);
}

export default App
