import "../styles/Menu.css";
import {useState} from "react";
import { entryPages, reportPages,masterEntryPages,masterReportPages } from "../data/menuData";
function Menu(){
    const [isEntry,setIsEntry]=useState(false);
    const [isReport,setIsReport]=useState(false);
    const [isMasterEntry,setIsMasterEntry]=useState(false);
    const [isMasterReportEntry,setIsMasterReportEntry]=useState(false);

    function handleEntries(){
        setIsEntry(!isEntry);
    }

    function handleReports(){
        setIsReport(!isReport);
    }

    function handleMasterEntries(){
        setIsMasterEntry(!isMasterEntry);
    }

    function handleMasterReports(){
        setIsMasterReportEntry(!isMasterReportEntry)
    }
return(
    <div  className="container">
        <h3>Main Menu</h3>
        <div className="menu-types">
            <div className="normal">
                <div>
                    <button onClick={handleEntries}><em>Entries</em></button>
                    {isEntry&&
                    (
                        <ul>
                            {entryPages.map((item,index)=>(<li key={index}><a href={item.path} target="_blank" rel="noopener noreferrer">{index+1+'.'} {item.name}</a></li>
                            ))}
                        </ul>)}
                        
                </div>
                <div>
                    <button onClick={handleReports}><em>Reports</em></button>
                    {isReport&&
                    
                        (<ul>
                            {reportPages.map((item,index)=>(
                            <li key={index}><a href={item.path} target="_blank" rel="noopener noreferrer">{index+1+'.'} {item.name}</a></li>
                    ))}
                        </ul>)}
                        
                </div>
            </div>

            <div className="masters">
                <div>
                    <button onClick={handleMasterEntries}><em>Master Entries</em></button>
                    {isMasterEntry&&
                        (<ul>
                            {masterEntryPages.map((item,index)=>(
                            <li key={index}><a href={item.path} target="_blank" rel="noopener noreferrer">{index+1+'.'} {item.name}</a></li>
                            ))}
                        </ul>)}
                        
                </div>
                <div>
                    <button onClick={handleMasterReports}><em>Master Reports</em></button>
                    {isMasterReportEntry&&
                        (<ul>
                            {masterReportPages.map((item,index)=>(
                             <li key={index}><a href={item.path} target="_blank" rel="noopener noreferrer">{index+1+'.'} {item.name}</a></li>
                            ))}
                        </ul>)}
                </div>
            </div>
            
        </div>
        
    </div>
)
}
export default Menu;