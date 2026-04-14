import "../styles/customer.css"

function PartyMaster(){
    return(
        <div className="container">
            <h3 className="title">Customers & Suppliers</h3>
            
            <div className="form-section">
                <div className="frame1" id="sec3">

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
                            <input type="text" placeholder="STATE_CD" className="w-20"/>
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
                 <h3 className="title">Works Address</h3>
                
                <div className="frame1">
               
                    <div className="left">
                    <div className="row">
                        <label>Address:</label>
                        <input type="text" placeholder="WADDRESS1"/>
                        <input type="text" placeholder="WADDRESS2"/>
                    </div>
                    <div className="row">
                        <label>District:</label>
                        <input type="text" placeholder="WDISTRICT" className="w-30"/>
                        <label>Pin:</label>
                        <input type="text" placeholder="WPIN" className="w-20"/>
                    </div>
                    <div className="row">
                        <label>State:</label>
                        <input type="text" placeholder="WSTATE" className="w-30"/>
                        <label>State Cd:</label>
                        <input type="text" placeholder="WSTATE_CD" className="w-20"/>
                    </div>
                    <div className="row">
                        <label>Phone:</label>
                        <input type="text" placeholder="WPHONE1"/>
                        <input type="text" placeholder="WPHONE2"/>
                    </div>
                                        <div className="row">
                        <label>Fax:</label>
                        <input type="text" placeholder="WFAX"/>
                    </div>
                </div>

                    <div className="right">
                        <div className="row">
                            <label> GSTIN No:</label>
                            <input type="text" placeholder="WGSTIN_NO"/>
                        </div>
                        <div className="row">
                            <label></label>
                            <select>
                                <option value="">CUST_TP</option>
                                <option value="a">a</option>
                                <option value="b">b</option>
                            </select>
                        </div>
                        <div className="row">
                            <label></label>
                            
                            <input type="radio" name="customerType" value="debitor"/>
                            Debtor Customer
                            <input type="radio" name="customerType" value="supplier"/>
                            Creditor Supplier 
                        </div>
                        <div className="row">
                            <label>Aroma:</label>
                            <input type="checkbox" name="aroma" value="yes" />yes
                            <input type="checkbox" name="aroma" value="no"/>no
                        </div>
                        <div className="row">
                            <label>Date & Time:</label>
                            <input type="text" placeholder="DT_TM"/>
                        </div>
                        <div className="row">
                            <label>Entered By:</label>
                            <input type="text" placeholder="PERSONS"/>
                        </div>
                        <div className="row">
                            <label>Reason:</label>
                            <input type="text" placeholder="REASON"/>
                        </div>
                    </div>
                </div>
               
            <h3 className="title"> Consignee Address</h3>
            <div className="frame1" id="sec3">
                <div className="left">
                    <div className="row">
                        <label>Name:</label>
                        <input type="text" placeholder="CONS" className="w-50"/>
                    </div>
                    <div className="row">
                        <label>Address:</label>
                        <div className="column-inputs">
                            <input type="text" placeholder="C_ADDRESS1" className="w-50"/>
                        <input type="text" placeholder="C_ADDRESS2" className="w-50"/>
                        <input type="text" placeholder="C_ADDRESS3" className="w-50"/>
                        <input type="text" placeholder="C_ADDRESS4" className="w-50"/>
                        </div>
                        
                    </div>
                    <div className="row">
                        <label>District:</label>
                        <input type="text" placeholder="C_DISTRICT" className="w-30"/>
                         <label>Pin:</label>
                        <input type="text" placeholder="C_PIN" className="w-20"/>
        ``        </div>
                  <div className="row">
                        <label>State:</label>
                        <input type="text" placeholder="C_STATE" className="w-30"/>
                       <label>State Cd:</label>
                        <input type="text" placeholder="C_STATE_CD" className="w-20"/>
                    </div>
                    
                </div>
                <div className="right">
                
                    <div className="row">
                        <label>Phone</label>
                        <input type="text" placeholder="C_PHONE1"className="w-20"/>
                        <input type="text" placeholder="C_PHONE2" className="w-20"/>
                        <input type="text" placeholder="C_PHONE3" className="w-20"/>
                    </div>
                    
                    <div className="row">
                        <label>Fax</label>
                        <input type="text" placeholder="C_FAX"/>
                    </div>
                    
                    <div className="row">
                        <label>PAN No</label>
                        <input type="text" placeholder="C_PAN_NO"/>
                    </div>
                    
                    <div className="row">
                        <label>ECC No</label>
                        <input type="text" placeholder="C_OLICNO"/>
                    </div>
                    
                    <div className="row">
                        <label>GSTIN No</label>
                        <input type="text" placeholder="C_GSTIN_NO"/>
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