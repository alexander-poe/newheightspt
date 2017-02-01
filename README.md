# New Heights PT Data Entry

Link: none

## Description

A mvp for a phsyical therapy company looking to improve their data entry and retrieval. 

Dislaimer: this version is NOT intended for production use. 

## Screenshots

### Homepage/Login

![full page](/build/mainpage.png)

### Spaced Repetition Page

![main page](/client/assets/image2.png)

## Tech Stack

- DB: cloud-hosted MongoDB with MLab

- Server: Node, Express, Mongoose

- Client: React, Redux, Thunk

- Security: Passport, OAuth, Bearer

# Database Structure - Sample Items

## Collections
#### `users`
	{
		accessToken: 'gfehu7438rr83yr374ry4387r38',
		googleId: 176374526734,
		name: 'Test User',
		score: 12,
		questions: [{word_id: 6327452, freq: 3}, {word_id: 673462, freq: 1}]
	}

#### `words`
	{
		_id: 6327452,
		french: 'un',
		english: 'one'
	}

---

## Endpoints:

- [x] app.get('/game')
  - returns an initial question for a logged-in user
  - protected endpoint

- [x] app.put('/game')
  - updates user's list of questions based on true/false input from client
  - returns a new question for the user
  - protected endpoint

- [x] app.get('/auth/google')
  - initializes Google login process

- [x] app.get('auth/login/callback')
  - continues Google login process







































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
