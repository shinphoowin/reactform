import React from 'react';
 
const FormLayout = props => (	

		<div className="overlay">   
   			<div className="container startprojectForm">
   				<form onSubmit={props.submitform}>
			
				    <h1 className="title">Start Your Project</h1>	      

				    <div className="col-lg-6 col-md-6 col-sm-6 form_margin_Ctrl">
				        <div className="formwrapper">       
				              <input type="text" placeholder="Name" name="name"/>
				        </div>
			      	</div>

				    <div className="col-lg-6 col-md-6 col-sm-6 form_margin_Ctrl">
				        <div className="formwrapper">       
				              <input type="text" placeholder="Company Name" name="company_name"/>
				        </div>
				    </div>

			        <div className="col-lg-6 col-md-6 col-sm-6 form_margin_Ctrl">
			            <div className="formwrapper">       
			              <input type="text" name="email" placeholder="Email Address&nbsp;*"/>
			            </div>
			        </div>

			       <div className="col-lg-6 col-md-6 col-sm-6 form_margin_Ctrl">
			            <div className="formwrapper">       
			              <input type="text" name="phone_no" placeholder="Phone Number&nbsp;*"/>              
			            </div>
			        </div>

				    <div className="col-lg-6 col-md-6 col-sm-6 custumSelect form_margin_Ctrl">
				        <div className="formwrapper">
				              <select id="budget_range">
				                <option value="">Budget Range &nbsp;*</option>
				                  <option>Standard</option>
				                  <option>Choose Other</option>
				                  <option>Choose Other1</option>
				              </select>				  
				          </div>
				    </div>

			        <div className="col-lg-6 col-md-6 col-sm-6 custumSelect form_margin_Ctrl">
			          <div className="formwrapper">
			              <select id="work_type">
			                <option value="">Type Of Work&nbsp;*</option>      
			                  <option>Standard</option>
			                  <option>Choose Other</option>
			                  <option>Choose Other1</option>
			              </select>
			              <span className="custumSelect"></span>
			          </div>
			        </div>

			        <div className="col-lg-12 col-md-12 col-sm-12 form_margin_Ctrl">
				        <div className="formwrapper">       
				              <input type="text" name="projectdetail" placeholder="Project Details&nbsp;*"/>
				        </div>
				    </div>
				   
				    <input type="radio" name="pricerange" value="45ks"/><span>45ks</span>&nbsp;&nbsp;&nbsp;
	                <input type="radio" name="pricerange" value="35ks"/><span>35ks</span>&nbsp;&nbsp;&nbsp;
	                <input type="radio" name="pricerange" value="25ks"/><span>25ks</span><br/>
	                <span name="cbstate">Want To Work:</span><input onClick={props.checkboxstateValue} type="checkbox"/>         

			        <div className="col-lg-12 overlaysentBtn">
			           <button className="sendBtn">SEND</button>
			        </div>
			        		    
			    </form>
    	    </div>
  	    </div>
);
export default FormLayout;
