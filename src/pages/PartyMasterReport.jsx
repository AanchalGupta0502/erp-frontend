import { useEffect, useState } from "react";
import React from "react";
import "../styles/customer.css"
import {getCustomerByAroma,getCustomerByAromaPDF} from "../api/customerReportApi";
function PartyMasterReport(){
    const [customer,setCustomer]=useState([]);
 const [aroma,setAroma]=useState("");   
 const [showData, setShowData]=useState(false);

const loadToCustomer=async()=>{
    try{
        const res= await getCustomerByAroma(aroma);
        console.log(res);
        console.log(typeof(res));
        setCustomer(res.data);
        console.log(customer);
    }
    catch(err){
        console.error("print error: ",err);
    }
}

    function handleSubmit(){
         loadToCustomer();
         setShowData(true);
    }
    const handlePDF=async()=>{
        try{
            const res=await getCustomerByAromaPDF(aroma);
            console.log("pdf will be generated");
            
            const url=window.URL.createObjectURL(new Blob([res.data],{type:'application/pdf'}));

            const link=document.createElement('a');

            link.href=url;
            link.setAttribute('download','customer_report.pdf');

            document.body.appendChild(link);

            link.click();
            link.remove();
        
        }
        catch(err){
            console.error(err);
        }
        
    };
return(   
    <div className="container">
        <h3>customer is Aroma? </h3>
        <input type="radio" name="aroma" value="YES" checked={aroma==="YES"}onChange={()=>setAroma("YES")}/>Yes
        <input type="radio" name="aroma" value="NO" checked={aroma==="NO"} onChange={()=>setAroma("NO")}/>No
        <button  onClick={handleSubmit}>Submit</button>
    {showData&&(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address1</th>
                    <th>Address2</th>
                    <th>Address3</th>
                    <th>District</th>
                    <th>State</th>
                    <th>pin</th>
                    <th>phone1</th>
                    <th>phone2</th>
                    <th>phone3</th>
                    <th>email</th>
                    <th>web</th>
                </tr>
            </thead>
            <tbody>
                {customer.map((item,i)=>(
                    <tr key={i}>
                        <td><input type="text" placeholder="NAME" value={item.name} readOnly></input></td>
                        <td><input type="text" placeholder="ADDRESS1" value={item.address1} readOnly></input></td>
                        <td><input type="text" placeholder="ADDRESS2" value={item.address2} readOnly></input></td>
                        <td><input type="text" placeholder="ADDRESS3" value={item.address3} readOnly></input></td>
                        <td><input type="text" placeholder="DISTRICT" value={item.district} readOnly></input></td>
                        <td><input type="text" placeholder="STATE" value={item.state} readOnly></input></td>
                        <td><input type="text" placeholder="PIN" value={item.pin} readOnly></input></td>
                        <td><input type="text" placeholder="PHONE1" value={item.phone1} readOnly></input></td>
                        <td><input type="text" placeholder="PHONE2" value={item.phone2} readOnly></input></td>
                        <td><input type="text" placeholder="PHONE3" value={item.phone3} readOnly></input></td>
                        <td><input type="text" placeholder="WEB" value={item.web} readOnly></input></td>
                        <td><input type="text" placeholder="EMAIL" value={item.email} readOnly></input></td>
                    </tr>
))}
            </tbody>
        </table>
    )}
    {showData&&(
        <button onClick={handlePDF}>Generate PDF</button>
    )}
        </div>
);
}
export default PartyMasterReport;
