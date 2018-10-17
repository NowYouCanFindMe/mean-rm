# Project 2

This project will help you get up and running with angular.

Let us add some spazazz

First, let us download Angular

Open up your terminal and run the following command:
```javascript
npm install -g @angular/cli

```

Navigate to your working folder
```
cd <your-projects-folder>
```

Next we will create an angular project
```
ng new project_name
```

Change the directory path to the project you just created.

```
cd project_name
```

Great. Now let us confirm that Angular is working.
Run

```
npm start
```

Open up your web browser and go to
```
http://localhost:4200
```

Awesome, now let us add some packages.

Open up a terminal and navigate to the project folder

Run the following scripts:
```
npm install bootstrap@latest --save
npm install jquery@latest --save
npm install popper.js@latest --save

```

Next let us configure the `angular.json` file that is located inside the project folder.

Open up your IDE of preference. I will be using Atom.

Locate
```
“styles”: [
“src/styles.css”.
]
```
 And
 ```
“scripts”: [
]
```

Add the following:

```javascript
"styles": [
       "styles.css",
       "../node_modules/bootstrap/dist/css/bootstrap.min.css"
       ],
     "scripts": [
       "../node_modules/jquery/dist/jquery.min.js",
       "../node_modules/popper.js/dist/umd/popper.min.js",
       "../node_modules/bootstrap/dist/js/bootstrap.min.js"
       ],
```

If the development server is not already running, run the following command.

```
Npm start
```

Which will call the `ng serve` script

If things are working, great.
Let us add a navbar with the bootstrap library we installed

```
<div style="text-align:center">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Angular SPA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

<div class="collapse navbar-collapse" id="navbarNavDropdown">

<ul class="navbar-nav">

</ul>

  </div>

</nav>

```

Great!

Next, let us add some substance to the body of the page.

What about a ***jumbotron***,

```
<div class="jumbotron">
  <h1 class="display-4">Angular SPA</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

</div>
```

Good Stuff,
Now perhaps some structure within the layout of the page.

Let us add a row and columns.

```
div class="container">
  <div class="row">
      <div class="col-sm">

      </div>
      <div class="col-sm">

      </div>
    </div>
</div>

```
Awesome,
Now let us add bootstrap cards to make it look polished.

```
<div class="card" style="width: 24rem;">
       <img class="card-img-top" height="250px" src="https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">Bootstrap</h5>
         <div class="card-header">
           Front End Component Library
           toolkit for developing with HTML, CSS, and JS
        </div>
         <p class="card-text">
           <li class="list-group-item">Easy to Use</li>
           <li class="list-group-item">Responsiveness</li>
           <li class="list-group-item">Customizable</li>
           <li class="list-group-item">Consistency</li>
           <li class="list-group-item"> Support</li>
         </p>
         <a href="https://getbootstrap.com/" class="btn btn-primary">LINK</a>
       </div>
     </div>

<div class="card" style="width: 24rem;">
       <img class="card-img-top" height= "250px" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">Angular</h5>
         <div class="card-header">
           Fast Framework for both desktop and mobile
        </div>
         <p class="card-text">
           <li class="list-group-item">Consistency</li>
           <li class="list-group-item">Productivity</li>
           <li class="list-group-item">Maintainability</li>
           <li class="list-group-item">Modularity</li>
           <li class="list-group-item">  Catch Errors</li>
         </p>
         <a href="https://angular.io/" class="btn btn-primary">LINK</a>
       </div>
     </div>
```

Let us also add extra packages for styling

Open the terminal and run within the project folder

```
npm install angular-bootstrap-md --save
```

Okay, great.

Now open up angular.json and add the following line to scripts
`"./node_modules/angular-bootstrap-md/scss/mdb-free.scss"`

Now your changes to `angular.json` should look like:

```javascript
"styles": [
      "./node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css",

      "./node_modules/angular-bootstrap-md/scss/bootstrap/bootstrap.scss",
      "./node_modules/angular-bootstrap-md/scss/mdb-free.scss",


    ],

    "scripts": [
       "./node_modules/jquery/dist/jquery.min.js",
       "./node_modules/popper.js/dist/umd/popper.min.js",
       "./node_modules/bootstrap/dist/js/bootstrap.min.js"
       ],
  },
```

Now let us add an image:
```
<img src="https://images3.alphacoders.com/153/15387.jpg" class="img-thumbnail" alt="Aurora Borealis>
```

Then, lets add a footer.

```
<!-- Footer -->
<footer class="page-footer font-small blue pt-4">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

      <!-- Grid row -->
      <div class="row">

        <!-- Grid column -->
        <div class="col-md-6 mt-md-0 mt-3">

          <!-- Content -->
          <h5 class="text-uppercase">Footer Content</h5>
          <p>Angular SPA</p>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">

            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Github</a>
              </li>
              <li>
                <a href="#!">Projects Main</a>
              </li>
              <li>
                <a href="#!">Heroku</a>
              </li>
              <li>
                <a href="#!">Github Tips</a>
              </li>
            </ul>

          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">




          </div>
          <!-- Grid column -->

      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
    </div>
    <!-- Copyright -->

  </footer>
```

Great, now feel free to add more components to your page.

Go to `https://getbootstrap.com/docs/3.3/components/`
and also visit,
`https://mdbootstrap.com/angular/components/`
