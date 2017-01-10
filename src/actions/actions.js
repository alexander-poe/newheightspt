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

export const editPortlandHours = (id, pt, hourstotal, clinichours, target, visitsperhour, target2) => dispatch => {
	console.log(id, pt, hourstotal)
	var array = [];
	let id = id;
	let pt = pt;
	let hourstotal = hourstotal;
	let clinichours = clinichours;
	let target = target;
	let visitsperhour = visitsperhour;
	let target2 = target2;
	console.log('id', id)
	array.push(id, pt, hourstotal, clinichours, target, visitsperhour, target2);
	console.log('array:' ,array);
	//write four loop that will loop through array with conditional of blank value
	//take parameters and check all values, if value is blank, leave, if contains something, assign to variable. 
	//put values in fetch req 

	//take returned values and place them into variable
	var reqObj = {id: id, hourstotal: hourstotal};
	console.log('reqObj:' , reqObj)
	return fetch(paystubs_url,
	{
		method: "PUT",
		body  : JSON.stringify(
			reqObj
		),
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

export const postPortlandHours = (pts, hourstotal, clinichours, target, visitsperhour, target2) => dispatch => {
	return fetch(paystubs_url,
		{
			method: "POST",
			body  : JSON.stringify({
				pts,
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

