*Employee Portal

This is used to be a better approach then using excell and hand delievering letters to employees. 

**Employee logs on.
Has access to their data.
Has ability to post data.
Display data like patients per week in a graph.

**Manager logs on.
Has access to their data and those they manage. 
Has ability to post <b> only there own </b> data.
Display data like patients per week in a graph but with the option to compare their employees. 

**Admin logs on.
Has access to all data.
Has ability to post all data.
Has ability to edit all data.(maybe)
Display data like billings, patients seen in a graph. 

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