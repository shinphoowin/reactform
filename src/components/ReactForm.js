import React, { Component } from 'react';
import FormLayout from './FormLayout';

class ReactForm extends Component {

	handleSubmit = (e) => {
		e.preventDefault();

		var formData ={
			name: e.target.name.value,
			companyname: e.target.company_name.value,
			email: e.target.email.value,
			phone: e.target.phone_no.value,
			budget: e.target.budget_range.value,
			work: e.target.work_type.value,
			projectdetail: e.target.projectdetail.value,
			pricerange: e.target.pricerange.value,
			checkstate: e.target.cbstate.value
		}
		console.log(formData);
	}

	checkboxhandleInputChange = (e) => {
		// this.setState({
		// 	isGoing: e.target.value
		// })
		const target = e.target;
		console.log(target.value);
		// const checkboxstateValue = target.type === 'checkbox' ? target.checked : !target.checked;
		// console.log(checkboxstateValue);
		if(target.type === 'checkbox'){
			var checkboxstateValue = target.checked
		}
		console.log(checkboxstateValue);

		this.setState({
			checkstate: checkboxstateValue
		})
	}

    render() {
   		// let getdataList = this.state.dataset.map((datalist)=>{
   		// 	console.log(datalist)
   		// 	return(
   		// 		<li key={datalist.counter}><span className="counterbg">{datalist.counter}</span> - {datalist.firstname} - {datalist.lastname} - {datalist.selectfruit} - {datalist.totalGuest}</li>
   		// 	);
   		// })
   		return(
 			<FormLayout submitform={this.handleSubmit} checkstate={this.checkboxhandleInputChange}/>   		
		)
   	}
}

export default ReactForm;