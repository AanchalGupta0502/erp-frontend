import "../styles/customer.css"

function PartyMaster(){
    return(
        <div className="container">
            <h3 className="title">Customers & Suppliers</h3>
            
            <div className="form-section">
                <div className="frame1">

                    {/* LEFT SIDE */}
                    <div className="left">

                        <div className="row">
                            <label>Name:</label>
                            <input type="text" placeholder="NAME" className="w-50"/>
                        </div>

                        <div className="row">
                            <label>Address:</label>
                            <div className="column-inputs">
                                <input type="text" placeholder="ADDRESS1" className="w-50"/>
                                <input type="text" placeholder="ADDRESS2" className="w-50"/>
                                <input type="text" placeholder="ADDRESS3" className="w-50"/>
                                <input type="text" placeholder="ADDRESS4" className="w-50"/>
                            </div>
                        </div>

                        <div className="row">
                            <label>District:</label>
                            <input type="text" placeholder="DISTRICT" className="w-30"/>
                            <label>Pin:</label>
                            <input type="text" placeholder="PIN" className="w-20"/>
                        </div>

                        <div className="row">
                            <label>State:</label>
                            <input type="text" placeholder="STATE" className="w-30"/>
                           <label>State Cd:</label>
                            <input type="text" placeholder="STATE_CD" className="w-30"/>
                        </div>

                        <div className="row">
                            <label>Phone:</label>
                            <div className="multi-input">
                                <input type="text" placeholder="PHONE1" className="w-20"/>
                                <input type="text" placeholder="PHONE2" className="w-20"/>
                                <input type="text" placeholder="PHONE3" className="w-20"/>
                            </div>
                        </div>

                        <div className="row">
                            <label>Fax:</label>
                            <input type="text" className="w-20"/>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="right">

                        <div className="row">
                            <label>Web:</label>
                            <input type="text" placeholder="WEB" className="w-40"/>
                        </div>

                        <div className="row">
                            <label>Email:</label>
                            <input type="text" placeholder="EMAIL" className="w-40"/>
                        </div>

                        <div className="row">
                            <label>Rng/Div:</label>
                            <input type="text" placeholder="RNG_DIV" className="w-40"/>
                        </div>

                        <div className="row">
                            <label>PAN No:</label>
                            <input type="text" placeholder="PAN_NO" className="w-40"/>
                        </div>

                        <div className="row">
                            <label>ECC No:</label>
                            <input type="text" placeholder="OLICNO" className="w-40"/>
                        </div>

                        <div className="row">
                            <label>GSTIN No:</label>
                            <input type="text" placeholder="GSTIN_NO" className="w-40"/>
                        </div>

                    </div>
                
                </div>

                {/* CONTACT SECTION */}
                <div className="frame">
                    <div className="contact-section">
                        <h3>Contact Person and Designation</h3>
                        <div className="table">
                            {[1,2,3,4,5].map((i)=>(
                                <div key={i} className="table-row">
                                    <input placeholder="Person" className="w-50"/>
                                    <input placeholder="Designation" className="w-50"/>
                                </div>
                            ))}
                        </div>
                    </div>
               

                {/* BUTTONS */}
                    <div className="buttons">
                        <button>Top</button>
                        <button>Next</button>
                        <button>Prev</button>
                        <button>Last</button>
                        <button>Find</button>
                        <button>Add</button>
                        <button>Save</button>
                        <button>Cancel</button>
                        <button>Exit</button>
                    </div>
                
            </div>
          </div>
        </div>
    );
}

export default PartyMaster;