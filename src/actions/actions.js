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

// export const POST_PORTLAND_HOURS_SUCCESS = 'POST_PORTLAND_HOURS_SUCCESS';
// export const postPortlandHoursSuccess = () => ({
// 	type: 'POST_PORTLAND_HOURS_SUCCESS',
// })
export const postPortlandHours = (pts, hourstotal, clinichours, target, visitsperhour, target2) => dispatch => {
	return fetch(paystubs_url,
		{
			method: "POST",
			body: JSON.stringify({
				pts: pts,
				hourstotal: hourstotal,
				clinichours: clinichours,
				target: target,
				visitsperhour: visitsperhour,
				target2: target2
			}),
			headers: {"Content-Type": "application/json"}
		}).then(res => {
			if(!res.okay) {
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

