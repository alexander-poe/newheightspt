const paystubs_url = "http://localhost:3000/userdata"

export const GET_PAY_STUBS_SUCCESS = 'GET_PAY_STUBS_SUCCESS';
export const getPayStubSuccess = data => ({
	type: 'GET_PAY_STUBS_SUCCESS',
	data
});

export const getPayStub = data => dispatch => {
	return fetch(paystubs_url)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			console.log('res!',res); 
			dispatch(getPayStubSuccess(res.data));
		}).catch(err => {
			console.log('error', err);
		});
};

export const deletePortlandHours = id => dispatch => {
	console.log(id);
	return fetch(paystubs_url + '/' + id,
	{
		method  : "DELETE",
		body    : JSON.stringify({
			id  : id
		}),
		headers : {"Content-Type" : "application/json"}
	}).then(res => {
		return res.json()
	}).then(res => {
		console.log('message: delete succcess');
	}).catch(err => {
		console.log('error:', err);
	});
};	

export const editPortlandHours = (id, pt, hourstotal, clinichours, target, visitsperhour, target2) => dispatch => {
    //if (feild is not being edited)
	//a. have function like below that filters information, 
	//then puts values into json object with corresponding keys

	//b.have a better way to edit, when you click on a row, or enter and id
	//the data from the row fills in onto the form
	//that way you submit all feilds every single time and dont 
	//have to deal with this on the action side. 
	
	// const isNotBlank = (value) => {
	// 	if (value !== '') return value; 
	// }
	// const checksForValue = (array) => {
	// 	var value = array.filter(isNBlank);
	// 	return value
	// }
	// var inputs = [];
	// inputs.push(id, pt, hourstotal, clinichours, target, visitsperhour, target2);
	// console.log('array:' ,inputs);
	// var reqObj = {id: id, hourstotal: hourstotal};
	// console.log('reqObj:' , reqObj)
	return fetch(paystubs_url,
	{
		method: "PUT",
		body  : JSON.stringify({
					id,
					pt,
				hourstotal,
				clinichours,
				target,
				visitsperhour,
				target2 
		}),
		headers : {"Content-Type" : "application/json"}
	}).then(res => {
		if(res.status >= 300) {
			throw new Error(res.statusText);
		}
		return res;
	}).then(res => {
		console.log('message: update success')
	}).catch(err => {
		console.log('error', err);
	});
};

export const postPortlandHours = (pt, hourstotal, clinichours, target, visitsperhour, target2) => dispatch => {
	return fetch(paystubs_url,
		{
			method: "POST",
			body  : JSON.stringify({
				pt,
				hourstotal,
				clinichours,
				target,
				visitsperhour,
				target2      
			}),
			headers: {"Content-Type" : "application/json"}
		}).then(res => {
			if(res.status >= 300) {
				throw new Error(res.statusText);
			}
			return res;
		}).then(res => {
			console.log('message: post success');
			//dispatch(postPortlandHoursSuccess());
		}).catch(err => {
			console.log('error', err);
		});
};

