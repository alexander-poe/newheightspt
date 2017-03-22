# New Heights PT Data Entry

Link: none

## Description

A mvp for a phsyical therapy company looking to improve their data entry and retrieval.

Dislaimer: this version is NOT intended for production use.

## Screenshots


![full page](/build/nhithomepage.png)

![full page](/build/mainpage.png)

<h2>Employee Portal</h2>

Link: none

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

## Description

A mvp for a phsyical therapy company looking to improve their data entry and retrieval.

Dislaimer: current version is NOT intended for production use.

## Tech Stack

- DB: cloud-hosted psql with elephantsql.

- Server: Node, Express, knex

- Client: React, Redux, Thunk

- Security: Stormpath Auth

## DB Info


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
