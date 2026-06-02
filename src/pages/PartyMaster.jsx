import "../styles/customer.css"
import {useState, useEffect} from "react";
import{
    createCustomer,
    getCustomers,
    deleteCustomer,
    updateCustomer
} from "../api/customerApi";

function PartyMaster(){
    const [formData, setFormData] = useState({
  // 🔹 BASIC DETAILS
  basic: {
    name: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    district: "",
    pin: "",
    state: "",
    stateCode: "",
    phone1: "",
    phone2: "",
    phone3: "",
    fax: "",
    web: "",
    email: "",
    rngDiv: "",
    pan: "",
    ecc: "",
    gstin: "",
  },

  // 🔹 WORKS ADDRESS
  works: {
    address1: "",
    address2: "",
    district: "",
    pin: "",
    state: "",
    stateCode: "",
    phone1: "",
    phone2: "",
    fax: "",
    gstin: "",
  },

  // 🔹 CONSIGNEE
  consignee: {
    name: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    district: "",
    pin: "",
    state: "",
    stateCode: "",
    phone1: "",
    phone2: "",
    phone3: "",
    fax: "",
    pan: "",
    ecc: "",
    gstin: "",
  },

  // 🔹 OTHER FIELDS
  other: {
    customerType: "",
    custTypeDropdown: "",
    aroma: "",
    dateTime: "",
    enteredBy: "",
    reason: "",
  },

  // 🔹 CONTACT TABLE
  contacts: [
    { person: "", designation: "" },
    { person: "", designation: "" },
    { person: "", designation: "" },
    { person: "", designation: "" },
    { person: "", designation: "" },
  ],
});

    const [customers,setCustomers]=useState([]);
    const [currentIndex,setCurrentIndex]=useState(-1);
    const [isUpdateEnabled,setIsUpdateEnabled]=useState(false);
    
    const buildPayload = () => ({
    name: formData.basic.name,
    address1: formData.basic.address1,
    address2: formData.basic.address2,
    address3: formData.basic.address3,
    address4: formData.basic.address4,
    district: formData.basic.district,
    state: formData.basic.state,
    pin: formData.basic.pin,
    stateCd: formData.basic.stateCode,
    phone1: formData.basic.phone1,
    phone2: formData.basic.phone2,
    phone3: formData.basic.phone3,
    fax: formData.basic.fax,
    email: formData.basic.email,
    web: formData.basic.web,
    rngDiv: formData.basic.rngDiv,
    panNo: formData.basic.pan,
    olicno: formData.basic.ecc,
    gstinNo: formData.basic.gstin,

    waddress1: formData.works.address1,
    waddress2: formData.works.address2,
    wdistrict: formData.works.district,
    wstate: formData.works.state,
    wpin: formData.works.pin,
    wstate_cd: formData.works.stateCode,
    wphone1: formData.works.phone1,
    wphone2: formData.works.phone2,
    wfax: formData.works.fax,
    wgstinNo: formData.works.gstin,

    custTp: formData.other.customerType,
    aroma: formData.other.aroma,
    persons: formData.other.enteredBy,
    reason: formData.other.reason,

    contactPersons: formData.contacts.map(c => ({
        person: c.person,
        desig: c.designation
    })),

    consignees: [{
        cons: formData.consignee.cons,
        cAddress1: formData.consignee.address1,
        cAddress2: formData.consignee.address2,
        cAddress3: formData.consignee.address3,
        cAddress4: formData.consignee.address4,
        cDistrict: formData.consignee.district,
        cState: formData.consignee.state,
        cPin: formData.consignee.pin,
        cStateCd: formData.consignee.stateCode,
        cPhone1: formData.consignee.phone1,
        cPhone2: formData.consignee.phone2,
        cPhone3: formData.consignee.phone3,
        cFax: formData.consignee.fax,
        cPanNo: formData.consignee.pan,
        cOlicno: formData.consignee.ecc,
        cGstinNo: formData.consignee.gstin
    }]
});
    
    const fetchCustomers=async()=>{
        try{
            const res=await getCustomers();
              console.log("FULL RESPONSE:", res);
              console.log(res.data);
            setCustomers(res.data);
            
        }catch(err){
            console.error("Fetch error:",err);
        }
    };
    //console.log("customerslength: ",customers[0]);
    
    useEffect(()=>{
        fetchCustomers();
    },[]);

    const handleChange=(section,field,value)=>{
        setFormData((prev)=>({
            ...prev,
            [section]:{
                ...prev[section],
                [field]:value,
            }
        }));
    };
const loadCustomerToForm = (index) => {
    const c = customers[index];

    if (!c) return;

    console.log("Customer Object:", c);
    console.log("Contact Persons:", c.contactPersons);
    const len=c.contactPersons.length;
        
    setFormData({
        basic: {
            name: c.name || "",
            address1: c.address1 || "",
            address2: c.address2 || "",
            address3: c.address3 || "",
            address4: c.address4 || "",
            district: c.district || "",
            pin: c.pin || "",
            state: c.state || "",
            stateCode: c.stateCd || "",
            phone1: c.phone1 || "",
            phone2: c.phone2 || "",
            phone3: c.phone3 || "",
            fax: c.fax || "",
            web: c.web || "",
            email: c.email || "",
            rngDiv: c.rngDiv || "",
            pan: c.panNo || "",
            ecc: c.olicno || "",
            gstin: c.gstinNo || "",
        },

        works: {
            address1: c.waddress1 || "",
            address2: c.waddress2 || "",
            district: c.wdistrict || "",
            pin: c.wpin || "",
            state: c.wstate || "",
            stateCode: c.wstate_cd || "",
            phone1: c.wphone1 || "",
            phone2: c.wphone2 || "",
            fax: c.wfax || "",
            gstin: c.wgstinNo || "",
        },

        consignee: {
            name: c.consignees?.[0]?.cons || "",
            address1: c.consignees?.[0]?.cAddress1 || "",
            address2: c.consignees?.[0]?.cAddress2 || "",
            address3: c.consignees?.[0]?.cAddress3 || "",
            address4: c.consignees?.[0]?.cAddress4 || "",
            district: c.consignees?.[0]?.cDistrict || "",
            pin: c.consignees?.[0]?.cPin || "",
            state: c.consignees?.[0]?.cState || "",
            stateCode: c.consignees?.[0]?.cStateCd || "",
            phone1: c.consignees?.[0]?.cPhone1 || "",
            phone2: c.consignees?.[0]?.cPhone2 || "",
            phone3: c.consignees?.[0]?.cPhone3 || "",
            fax: c.consignees?.[0]?.cFax || "",
            pan: c.consignees?.[0]?.cPanNo || "",
            ecc: c.consignees?.[0]?.cOlicno || "",
            gstin: c.consignees?.[0]?.cGstinNo || "",
        },

        other: {
            customerType: c.custTp || "",
            custTypeDropdown: "",
            aroma: c.aroma || "",
            dateTime: c.dtTm || "",
            enteredBy: c.persons || "",
            reason: c.reason || "",
        },
         // for now we are taking only 5 rows, later we will give option to add row when 5th one is used
         contacts: [
            ... (c.contactPersons.map(cp=>({
                person:cp.person||"",
                designation:cp.desig||""

            }))||[]),
            ... Array.from(
                {length:Math.max(0,5-(c.contactPersons?.length||0))},
                ()=>({
                    person:"",
                    designation:""
                })
            )
         ]
    });

    setCurrentIndex(index);
};

    const handleSubmit=async()=>{
        try{
            const payload=buildPayload();
            await createCustomer(payload);
            alert("saved");
            handleAdd(); //clear form
            fetchCustomers(); //refresh list
        }catch(err){
            console.error(err);
            alert("Error");
        }
    };

    const emptyForm={
  basic: {
    name: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    district: "",
    pin: "",
    state: "",
    stateCode: "",
    phone1: "",
    phone2: "",
    phone3: "",
    fax: "",
    web: "",
    email: "",
    rngDiv: "",
    pan: "",
    ecc: "",
    gstin: "",
  },
  works: {
    address1: "",
    address2: "",
    district: "",
    pin: "",
    state: "",
    stateCode: "",
    phone1: "",
    phone2: "",
    fax: "",
    gstin: "",
  },
  consignee: {
    name: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    district: "",
    pin: "",
    state: "",
    stateCode: "",
    phone1: "",
    phone2: "",
    phone3: "",
    fax: "",
    pan: "",
    ecc: "",
    gstin: "",
  },
  other: {
    customerType: "",
    custTypeDropdown: "",
    aroma: "",
    dateTime: "",
    enteredBy: "",
    reason: "",
  },
  contacts: Array.from({length:5},()=>({
    person:"", designation: "",
 }))
};
     const handleAdd=()=>{
        setFormData(emptyForm);
        setCurrentIndex(-1);
        setIsUpdateEnabled(false);
     };

     const handleCancel=()=>{
        if(currentIndex!=-1){
            loadCustomerToForm(currentIndex);
        }else{
            handleAdd();
        }
        setIsUpdateEnabled(false);
     };

     const handleExit=()=>{
        alert("Exit clicked");
     };

     const handleFind=()=>{
        const name=prompt("enter name:");

        const index=customers.findIndex((c)=>c.name.toLowerCase()===name.toLowerCase());
        if(index!=-1){
            loadCustomerToForm(index);
            setIsUpdateEnabled(true); //enable update button
        }else{
            alert("Not found");
            setIsUpdateEnabled(false);
        }
    };

    const handleUpdate= async()=>{
        if(currentIndex===-1){
            alert("Find a customer first");
            return;
        }

        const id=customers[currentIndex].entryNo;

        try{
            const payload=buildPayload();
            await updateCustomer(id,payload);
            alert("updated Successfully");
            fetchCustomers();
            setIsUpdateEnabled(false);
        }catch(err){
            console.error(err);
            alert("Update failed");
        }
    };

    //top
    const goFirst=()=>{
        if(customers.length>0)loadCustomerToForm(0);
    };

    //next
    const goNext=()=>{
        if(currentIndex<customers.length-1){
        loadCustomerToForm(currentIndex+1);
        }
    };

    //prev
    const goPrev=()=>{
        if(currentIndex>0){
            loadCustomerToForm(currentIndex-1);
        }
    };

    //last
    const goLast=()=>{
        if(customers.length>0){
            loadCustomerToForm(customers.length-1);
        }
    };

    const handleDelete=async()=>{
        if(currentIndex===-1)return ;
        const id=customers[currentIndex].entryNo;

        try{
            await deleteCustomer(id);
            alert("Deleted");
            fetchCustomers();
            handleAdd();
        }catch(err){
            console.error(err);
        }
    };
    
    const handleContactChange = (index, field, value) => {
  const updatedContacts = [...formData.contacts];

  updatedContacts[index] = {
    ...updatedContacts[index],
    [field]: value,
  };

  setFormData({
    ...formData,
    contacts: updatedContacts,
  });
};

    return(
        <div className="container">
            
            <div className="form-section">
                 <h3 className="title">Customers & Suppliers</h3>
                <div id="Bg-green">
                <h3 className="title">Office Address</h3>
                <div className="frame1">

                    {/* LEFT SIDE */}
                    <div className="left">

                        <div className="row">
                            <label>Name:</label>
                            <input type="text" placeholder="NAME" className="w-50" value={formData.basic.name} onChange={(e)=>handleChange("basic","name",e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>Address:</label>
                            <div className="column-inputs">
                                <input type="text" placeholder="ADDRESS1" className="w-50" value={formData.basic.address1} onChange={(e)=>handleChange("basic","address1",e.target.value)}/>
                                <input type="text" placeholder="ADDRESS2" className="w-50" value={formData.basic.address2} onChange={(e)=>handleChange("basic","address2",e.target.value)}/>
                                <input type="text" placeholder="ADDRESS3" className="w-50" value={formData.basic.address3} onChange={(e)=>handleChange("basic","address3",e.target.value)}/>
                                <input type="text" placeholder="ADDRESS4" className="w-50" value={formData.basic.address4} onChange={(e)=>handleChange("basic","address4",e.target.value)}/>
                            </div>
                        </div>

                        <div className="row">
                            <label>District:</label>
                            <input type="text" placeholder="DISTRICT" className="w-30" value={formData.basic.district} onChange={(e)=>handleChange("basic","district",e.target.value)}/>
                            <label>Pin:</label>
                            <input type="text" placeholder="PIN" className="w-20" value={formData.basic.pin} onChange={(e)=>handleChange("basic","pin",e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>State:</label>
                            <input type="text" placeholder="STATE" className="w-30" value={formData.basic.state} onChange={(e)=>handleChange("basic","state",e.target.value)}/>
                           <label>State Cd:</label>
                            <input type="text" placeholder="STATE_CD" className="w-20" value={formData.basic.stateCode} onChange={(e)=>handleChange("basic","stateCode",e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>Phone:</label>
                            <div className="multi-input">
                                <input type="text" placeholder="PHONE1" className="w-20" value={formData.basic.phone1} onChange={(e)=>handleChange("basic","phone1",e.target.value)}/>
                                <input type="text" placeholder="PHONE2" className="w-20" value={formData.basic.phone2} onChange={(e)=>handleChange("basic","phone2",e.target.value)}/>
                                <input type="text" placeholder="PHONE3" className="w-20" value={formData.basic.phone3} onChange={(e)=>handleChange("basic","phone3",e.target.value)}/>
                            </div>
                        </div>

                        <div className="row">
                            <label>Fax:</label>
                            <input type="text" placeholder="FAX" className="w-20" value={formData.basic.fax} onChange={(e)=>handleChange("basic","fax",e.target.value)}/>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="right">

                        <div className="row">
                            <label>Web:</label>
                            <input type="text" placeholder="WEB" className="w-40" value={formData.basic.web} onChange={(e)=>handleChange("basic","web",e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>Email:</label>
                            <input type="text" placeholder="EMAIL" className="w-40" value={formData.basic.email} onChange={(e)=>handleChange("basic","email",e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>Rng/Div:</label>
                            <input type="text" placeholder="RNG_DIV" className="w-40" value={formData.basic.rngDiv} onChange={(e)=>handleChange("basic","rngDiv",e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>PAN No:</label>
                            <input type="text" placeholder="PAN_NO" className="w-40" value={formData.basic.pan} onChange={(e)=>handleChange("basic","pan",e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>ECC No:</label>
                            <input type="text" placeholder="OLICNO" className="w-40" value={formData.basic.ecc} onChange={(e)=>handleChange("basic","ecc",e.target.value)}/>
                        </div>

                        <div className="row">
                            <label>GSTIN No:</label>
                            <input type="text" placeholder="GSTIN_NO" className="w-40" value={formData.basic.gstin} onChange={(e)=>handleChange("basic","gstin",e.target.value)}/>
                        </div>
                </div>
                 
               
                </div>
                <hr className="line"></hr>
                 <h3 className="title">Works Address</h3>
                
                <div className="frame1">
               
                    <div className="left">
                    <div className="row">
                        <label>Address:</label>
                        <input type="text" placeholder="WADDRESS1" value={formData.works.address1} onChange={(e)=>handleChange("works","address1",e.target.value)}/>
                        <input type="text" placeholder="WADDRESS2" value={formData.works.address2} onChange={(e)=>handleChange("works","address2",e.target.value)}/>
                    </div>
                    <div className="row">
                        <label>District:</label>
                        <input type="text" placeholder="WDISTRICT" className="w-30" value={formData.works.district} onChange={(e)=>handleChange("works","district",e.target.value)}/>
                        <label>Pin:</label>
                        <input type="text" placeholder="WPIN" className="w-20" value={formData.works.pin} onChange={(e)=>handleChange("works","pin",e.target.value)}/>
                    </div>
                    <div className="row">
                        <label>State:</label>
                        <input type="text" placeholder="WSTATE" className="w-30" value={formData.works.state} onChange={(e)=>handleChange("works","state",e.target.value)}/>
                        <label>State Cd:</label>
                        <input type="text" placeholder="WSTATE_CD" className="w-20" value={formData.works.stateCode} onChange={(e)=>handleChange("works","stateCode",e.target.value)}/>
                    </div>
                    <div className="row">
                        <label>Phone:</label>
                        <input type="text" placeholder="WPHONE1" value={formData.works.phone1} onChange={(e)=>handleChange("works","phone1",e.target.value)}/>
                        <input type="text" placeholder="WPHONE2" value={formData.works.phone2} onChange={(e)=>handleChange("works","phone2",e.target.value)}/>
                    </div>
                    <div className="row">
                        <label>Fax:</label>
                        <input type="text" placeholder="WFAX" value={formData.works.fax} onChange={(e)=>handleChange("works","fax",e.target.value)}/>
                    </div>
                </div>

                    <div className="right">
                        <div className="row">
                            <label> GSTIN No:</label>
                            <input type="text" placeholder="WGSTIN_NO" value={formData.works.gstin} onChange={(e)=>handleChange("works","gstin",e.target.value)}/>
                        </div>
                        <div className="row">
                            <label></label>
                            <select value={formData.other.custTypeDropdown} onChange={(e)=>handleChange("other","custTypeDropdown",e.target.value)}>
                                <option value="">CUST_TP</option>
                                <option value="a">a</option>
                                <option value="b">b</option>
                            </select>
                        </div>
                        <div className="row">
                            <label></label>
                            
                            <input type="radio" name="customerType" value="debitor" checked={formData.other.customerType==="debitor"} onChange={(e)=>handleChange("other","customerType",e.target.value)}/>
                            Debtor Customer
                            <input type="radio" name="customerType" value="supplier" checked={formData.other.customerType==="supplier"} onChange={(e)=>handleChange("other","customerType",e.target.value)}/>
                            Creditor Supplier 
                        </div>
                        <div className="row">
                            <label>Aroma:</label>
                            <input type="checkbox" checked={formData.other.aroma===true} onChange={(e)=>handleChange("other","aroma",e.target.checked)}/>yes
                                                   </div>
                        <div className="row">
                            <label>Date & Time:</label>
                            <input type="text" placeholder="DT_TM" value={formData.other.dateTime} onChange={(e)=>handleChange("other","dateTime",e.target.value)}/>
                        </div>
                        <div className="row">
                            <label>Entered By:</label>
                            <input type="text" placeholder="PERSONS" value={formData.other.enteredBy} onChange={(e)=>handleChange("other","enteredBy",e.target.value)}/>
                        </div>
                        <div className="row">
                            <label>Reason:</label>
                            <input type="text" placeholder="REASON" value={formData.other.reason} onChange={(e)=>handleChange("other","reason",e.target.value)}/>
                        </div>
                    </div>
                    </div>
                </div>
              {/* CONTACT SECTION */}
                <div className="frame">
                    <div className="contact-section">
                        <h3>Contact Person and Designation</h3>
                        <div className="table">
                            {formData.contacts.map((c,i)=>(
                                <div key={i} className="table-row">
                                    <input placeholder="Person" className="w-50" value={c.person} onChange={(e)=>handleContactChange(i,"person",e.target.value)}/>
                                    <input placeholder="Designation" className="w-50" value={c.designation} onChange={(e)=>handleContactChange(i,"designation",e.target.value)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
               
            <div id="Bg-green">
                <h3 className="title"> Consignee Address</h3>
                               
             <div className="frame1">
            
                <div className="left">
                    <div className="row">
                        <label>Name:</label>
                        <input type="text" placeholder="CONS" className="w-50" value={formData.consignee.cons} onChange={(e)=>handleChange("consignee","name",e.target.value)}/>
                    </div>
                    <div className="row">
                        <label>Address:</label>
                        <div className="column-inputs">
                            <input type="text" placeholder="C_ADDRESS1" className="w-50" value={formData.consignee.address1} onChange={(e)=>handleChange("consignee","address1",e.target.value)}/>
                        <input type="text" placeholder="C_ADDRESS2" className="w-50" value={formData.consignee.address2} onChange={(e)=>handleChange("consignee","address2",e.target.value)}/>
                        <input type="text" placeholder="C_ADDRESS3" className="w-50" value={formData.consignee.address3} onChange={(e)=>handleChange("consignee","address3",e.target.value)}/>
                        <input type="text" placeholder="C_ADDRESS4" className="w-50" value={formData.consignee.address4} onChange={(e)=>handleChange("consignee","address4",e.target.value)}/>
                        </div>
                        
                    </div>
                    <div className="row">
                        <label>District:</label>
                        <input type="text" placeholder="C_DISTRICT" className="w-30" value={formData.consignee.district} onChange={(e)=>handleChange("consignee","district",e.target.value)}/>
                         <label>Pin:</label>
                        <input type="text" placeholder="C_PIN" className="w-20" value={formData.consignee.pin} onChange={(e)=>handleChange("consignee","pin",e.target.value)}/>
                </div>
                  <div className="row">
                        <label>State:</label>
                        <input type="text" placeholder="C_STATE" className="w-30" value={formData.consignee.state} onChange={(e)=>handleChange("consignee","state",e.target.value)}/>
                       <label>State Cd:</label>
                        <input type="text" placeholder="C_STATE_CD" className="w-20" value={formData.consignee.stateCode} onChange={(e)=>handleChange("consignee","stateCode",e.target.value)}/>
                    </div>
                    
                </div>
                <div className="right">
                
                    <div className="row">
                        <label>Phone</label>
                        <input type="text" placeholder="C_PHONE1"className="w-20" value={formData.consignee.phone1} onChange={(e)=>handleChange("consignee","phone1",e.target.value)}/>
                        <input type="text" placeholder="C_PHONE2" className="w-20" value={formData.consignee.phone2} onChange={(e)=>handleChange("consignee","phone2",e.target.value)}/>
                        <input type="text" placeholder="C_PHONE3" className="w-20" value={formData.consignee.phone3} onChange={(e)=>handleChange("consignee","phone3",e.target.value)}/>
                    </div>
                    
                    <div className="row">
                        <label>Fax</label>
                        <input type="text" placeholder="C_FAX" value={formData.consignee.fax} onChange={(e)=>handleChange("consignee","fax",e.target.value)}/>
                    </div>
                    
                    <div className="row">
                        <label>PAN No</label>
                        <input type="text" placeholder="C_PAN_NO" value={formData.consignee.pan} onChange={(e)=>handleChange("consignee","pan",e.target.value)}/>
                    </div>
                    
                    <div className="row">
                        <label>ECC No</label>
                        <input type="text" placeholder="C_OLICNO" value={formData.consignee.ecc} onChange={(e)=>handleChange("consignee","ecc",e.target.value)}/>
                    </div>
                    
                    <div className="row">
                        <label>GSTIN No</label>
                        <input type="text" placeholder="C_GSTIN_NO" value={formData.consignee.gstin} onChange={(e)=>handleChange("consignee","gstin",e.target.value)}/>
                    </div> 
                </div>
           </div>
           </div>

                {/* BUTTONS */}
                    <div className="buttons">
                        <button onClick={goFirst}>Top</button>
                        <button onClick={goNext}>Next</button>
                        <button onClick={goPrev}>Prev</button>
                        <button onClick={goLast}>Last</button>
                        <button onClick={handleFind}>Find</button>
                        <button onClick={handleUpdate} disabled={!isUpdateEnabled}>Update</button>
                        <button onClick={handleAdd}>Add</button>
                        <button onClick={handleSubmit}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                        <button onClick={handleExit}>Exit</button>
                    </div>
                
            </div>
          </div>
    );
}

export default PartyMaster;