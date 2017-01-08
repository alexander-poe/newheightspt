<h2>Employee Portal</h2>

This is used to be a better approach then using excell and hand delievering letters to employees. 

<h3>Employee logs on</h3>
<li>Has access to their data.</li>
<li>Has ability to post data.</li>
<li>Display data like patients per week in a graph.</li>



<h3>Manager logs on</h3>
<li>Has access to their data and those they manage.</li>
<li>Has ability to post <b> only there own </b> data.</li>
<li>Display data like patients per week in a graph but with the option to compare their employees. </li>
 



<h3>Admin logs on</h3>
<li>Has access to all data.</li>
<li>Has ability to post all data.</li>
<li>Has ability to edit all data.(maybe)</li>
<li>Display data like billings, patients seen in a graph. </li>




TODO
(create action types for CRUD successes)
put request needs a better way of editing


DATABASE
DROP TABLE if exists Paystubs (deleted old database)

CREATE TABLE IF NOT EXSIST HoursPortland (
	id serial primary key,
	pts text not null,
	hourstotal integer not null,
	clinichours integer not null,
	target integer not null,
	visitsperhour integer not null,
	target2 integer not null
)

{
	"pts" : "frank",
	"hourstotal" : "2333",
	"clinichours" :"23",
	"target": "23" ,
	"visitsperhour" :  "2",
	"target2" : "43"
}
