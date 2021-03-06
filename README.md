Getting started
--------------
##### 1. Installation
Get mesh from [http://getmesh.io/](http://getmesh.io/) and start it:

```shell
java -jar nameofyourmeshjar.jar
```

Install the dependencies defined in the package.json and bower.json

```shell
sudo npm install -g gulp
sudo npm install -g bower
sudo npm install -g nodemon
npm install
bower install
```

##### 2. Build the project
Now you can use gulp to build the project.

```shell
gulp app:watch
```

##### 3. Run it
You can manage your project in the mesh ui at [http://localhost:8080/](http://localhost:8080).

Start the frontend server

```shell
cd build
nodemon app.js
```

After starting the server you can make your first request to [http://localhost:8089/](http://localhost:8089).



##### 4. More information

- Express: [http://expressjs.com/](http://expressjs.com/).
- Mesh: [http://getmesh.io/docs/beta/](http://getmesh.io/docs/beta/).
- Express-Mesh: [https://www.npmjs.com/package/express-mesh](https://www.npmjs.com/package/express-mesh).
