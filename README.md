# Project 04: Full Stack Application using MERN stack

## Bootleg Bill's 
> *Unofficial Audio Rarities*

## Time Frame

> *10 Days*

## Goal

Through harnessing the MERN Stack, and as a group of three, we built an ecommerce inspired store front for bootlegged cassette tapes. It is possible to sign up as either a buyer or seller. Buyers can browse, add and remove items in their cart as well as checkout and whilst sellers share the same privileges, they also have access to a seller dashboard which offers add, edit and delete functionality for both individual products and user purchases.


## Technical Requirements Satisfied

* A MERN-Stack application hosted on Heroku.
* Built a stylised front-end utilising React which is served information from the backend via AJAX.
* Using JWT we implemented token-based authentication, allowing the user to sign up, sign in and sign out.
* Authorisation was implemented, limiting CUD Operations to authenticated users and widening the scope of CUD operations for Seller Users.





### Technologies Used
- React
- HTML and CSS
- React Bootstrap 
- JavaScript 
- Node.js
- Express
- Mongo DB/Mongoose
- Git/GitHub
- Figma
- Trello

### Team Members
- Ailish McLaughlin - [GitHub](https://github.com/ailishmcl) | [LinkedIn](www.linkedin.com/in/ailish-mclaughlin)
- Chris Ailey - [GitHub]() | [LinkedIn]()
- Christopher Carey - [GitHub](https://github.com/christopher-k-c) | [LinkedIn](https://www.linkedin.com/in/chriskcarey/)

### Process

We spent several days planning our Entity Relationship Diagrams, Wireframes, User Stories, and Minimum Viable Requirements to attain a shared vision. In addition, we scheduled a daily team stand up every morning, each team member detailing their progress and then updating the trello board accordingly. Furthermore we made regular commits, generally twice a day and when errors arose, we would pair program, de-bugging or solving as a team which served us well, enabling us to attain our MVPs and begin tackling our stretch goals.

I was initially tasked with building the applications Product model, its routes and controller. Starting with the Model, I mapped a Mongoose schema to a MongoDB collection which defined the attributes a product can take, from name to price and so on. Moving on, I defined the routes and wrote full Product CRUD operations in the product controllers. In example 01 - Express Api, the following code retrieves all product documents stored inside of the Product collection for our index page. Once tested in Postman I would move onto the react front end.

> **01 - Express Api**
<br>
<img src="
src/product/images/Screenshot 2022-08-03 at 12.50.41.png">

With my focus now on the React front-end, I wrote the Ajax call using Axios (see example image **02 - Axios Call**) which in combination with the map function in example **03 - React Map rendering** renders all products to our index page, furthermore, the react component Products.js builds a dynamic grid of react-bootstrap cards that responsively displays said products.

> **02 - Axios Call**
<br>
<img src="
src/product/images/Screenshot 2022-08-03 at 12.33.07.png">

> **03 - React Map rendering**
<br>
<img src="
src/product/images/Screenshot 2022-08-03 at 12.33.47.png">


###### Trello
![Trello board screenshot picture](/SEI-64_PROJECT_FOUR_FRONT-END/public/trelloboard.png) (https://trello.com/b/qJ5YXS7L/project-four)
###### ERD (Entity Relationship Diagrams)
![ERD screenshot picture](/project-04-fe/public/ERD.png) (https://docs.google.com/spreadsheets/d/1t3OSPLlnp3fUsaDO9et2jlCsDUnY_zXIcBZBl0zRwXg/edit#gid=0)
###### User Flow
![Userflow pictures screenshot](/project-04-fe/public/userflow.png) (https://www.figma.com/file/nzI51c1l1kPjnLjdxosC6I/Flow-Chart?node-id=0%3A1)
###### Wireframes
![Wireframes pictures screenshot](/project-04-fe/public/wireframe1.png) ((https://www.figma.com/file/CbzmDiTOtefvXPzt3A5Pus/Bootleg-Bill's-Unofficial-Audio-Rarities?node-id=508%3A1785))
![Wireframes pictures screenshot](/project-04-fe/public/wireframe2.png)
![Wireframes pictures screenshot](/project-04-fe/public/wireframe3.png)
![Wireframes pictures screenshot](/project-04-fe/public/wireframe4.png)
![Wireframes pictures screenshot](/project-04-fe/public/wireframe5.png)

###### Static Resources
* [Static Resources Google Drive](https://drive.google.com/drive/folders/1i3zq2lW8AuenJoQfLGZNG4o_-lGuiJxL)

Teamwork: 
Early on in the planning phase, we identified that communication and flexible iteration was going to be important for this multifaceted project. To manage this, we held a team standup every morning to discuss what has been done the day before, update the backlog and prioritise what to work on for the coming day. Twice a day we set aside time to merge our code to keep the remote repository up to date. Rather than working in silos, we carried out pair programming to de-bug or solve issues that arose and also when we were tackling the more challenging aspects of the project such as the cart, checkout and modal functionalities. Our approach paid off, as we were able to achieve all of our required functionality, as well as the vast majority of our stretch goal wishlist.

### Key Features
- Responsive design for different screen sizes and/or mobile viewports
- Ability to add one or multiple items to cart and edit their quantity/delete with the cart icon in the nav bar responding appropriately
- Top 3 most popular products are displayed in a responsive carousel on the homepage to pique buyer interest and maximise user experience
- Seller dashboard which enables CRUD operations on the products and the order status

### Deployed application link
(Heroku App)[https://bootlegbills.herokuapp.com/index]

### Challenges
- One of the biggest challenges was ensuring we were aligned as a group on the vision and maintaining good communication and regular code merging to ensure we were working as efficiently as possible towards the end goal 
- It was challenging to figure out how to save entries to the database without filling in a form, such as for the cart and the order form. Paring it back by holding the cart information in a state in the time between adding to cart and going to checkout was the way we figured out how to work around this but has lots of downsides such as loss of cart items/data/information in the case of a page refresh or loss of connection
- 

### Features to be added in the future
- Storing cart data on the local storage so that it wouldn't be erased by a page refresh or loss of connection
- Cart should empty upon placing an order
- A search function for searching products in the shop as well as for searching orders by reference number on the seller dashboard
- Add a filter for viewing different types of orders in the seller dashboard
- A community forum/review page where users can leave reviews on products and discuss retro music etc.
