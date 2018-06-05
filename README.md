# Software Developer Challenge

## Challenge 1: 
Read through the rest of the assignment, decide which technologies to use and explain why you chose what you chose. As a reminder we at Paytm are dealing with millions of concurrent users, just sayin’ :)

### Architecture:
Client-Server because of the REST constraint. Plus, more modular and easier to test.

#### Server:
Express server providing RESTful API + Redis for caching.
Since we're expecting millions of concurrent users, so the server application has to be efficient in handling
concurrent tasks and idle connections. Nodejs enables non-blocking IO using the event loop on a single thread, so there is less wasted resource as compared to thread approach when handling idle connections.

Nginx for load-balancing and redis for caching. Caching greatly improve performance especially if the REST API are mostly GET requests.

Mongodb for document-based database. Mongodb is chosen because it is easy to prototype especially along with node. For bigger projects, I would pick Mongodb or SQL-based db based potential read/write ratio. If read is higher than write then mongodb for the data are mostly denormalized so less `join`/referencing. Otherwise, Sql for update is much faster since tables are normalized.

- [X] Express
- [X] Mongodb
- [ ] Redis
- [ ] Nginx

#### Client:
React + Redux + Material.

React enables building ui's components. Therefore, easier to maintain, test and scale.
Redux makes it easy to handle application states and asynchronous actions eg. api actions.
Material makes for a good familiar user experience.

- [X] React
- [X] Redux
- [X] Material

## Challenge 2: 
Create a deployable “Hello World” Server exposing simple REST “Hello World” API. It is going to be a base for your application for this assignment.

## Challenge 3:
Pick one of the available online API’s such as Twitter (https://dev.twitter.com/overview/api), LCBO (https://lcboapi.com/) or Weather (https://openweathermap.org/api), create and implement a flow involving that API and user of your application. For example, your application might have following UI:

![Sample UI](./sample-ui.png?raw=true "Sample UI")


User will insert text and click the button `Search` and your application will search tweets that contain submitted string. Note: it is only an example, go wilder than that :)

Login UI:
![Login UI](./login.png?raw=true "Login UI")

Search UI:
![Search UI](./search.png?raw=true "Search UI")

![Search loading UI](./search-loading.png?raw=true "Search loading UI")

![Search results UI](./search-results.png?raw=true "Search results UI")

## Challenge 4:
Make your application secure and personalized by making people to have to sign-up / login. Bonus points, if users will be able to reset their passwords.

Users are able to signup with email. Credentials are stored in JWT. JWT are easy to use and faster than cookies for it does not require db access for authorization. 

If I had more time I'd use Mail Jet to send users email for password reset. Users will get a one time link to reset their password.

- [X] Signup
- [X] Login
- [ ] Reset

## Challenge 5:
Make your application persistent. Whatever functionality your application has, after restart, make it possible to view a history of user activity or anything else you deem necessary.

User searches are stored in db on every search submission.

If I had more time, I'd create a page where users can see their whole search history and persist/log all redux actions. For the latter, I can create a clientside middleware that will send each redux action to server and server will either log or store in db.

- [X] Persist search history
- [ ] Persist redux actions
- [ ] Display history

## Challenge 6:
Test your application.

I tried to do TDD (I'm a big fan of TDD since reading Kent Beck's Xtreme Programming) as much as I could, as I commonly would, so some of the time I write tests beforehand and some time later.

## Challenge 7:
Let us know how we can use it. You could either provide us with a zipped file containing your solution or a link to your Github repository containing one.

### Pre reqs:
* Local mongodb
* npm 3.10.10
* node 9.2.1
* nodemon 1.11.0

### To Install:
`git clone https://github.com/imranariffin/SoftwareChallenge`

`cd SoftwareChallenge`

`sh install_server.sh`

`sh install_client.sh`

### To run
`sh run_server_client.sh`

## Bonus (optional):
Add an “I’m feeling lucky button” that does a random search, but make sure that same result is not returned twice or that you don’t return a page that the user already viewed. Use the user stored history to do so. Since going through the history can potentially be costly, suggest and optionally implement optimization mechanism to avoid hitting the storage every time.

I wish I have more time for this, damn it.
