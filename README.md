# Project 4: Bootleg Bill's Unofficial Audio Rarities
## A full stack MERN application by Ailish McLaughlin, Chris Ailey and Chris Carey

**Deployed App on Heroku:** [Placeholder](https://via.placeholder.com/500)

## Introduction
In preparation for building our first MERN stack application, the team opted to be more ambitious in scope and planned our construction of an E-commerce app named Bootleg Bill's Unofficial Audio Rarities -- a site for purchasing bootleg cassette tapes replicated from TV shows, movies, video games and rare/obscure original releases, based on a past creative venture by one of the team's members.

The core concept was to build the means for a user to visit the site and: 

* browse the site inventory, register a Customer account to add and checkout items of interest, and view a history of previously placed orders for that user;
* Register a Vendor account using a private verification key, view, create, update and delete product inventory and order records, while retaining the core functionality of a customer account.


## Technologies Used
* Git and GitHub
* Front-end JavaScript and Node.js
* MongoDB with Compass
* Express Node.js Framework
* React JavaScript Library
* Postman API Platform
* Node Package Manager
* Various pre-made Node packages, such as:
  - React Modal
  - React Switch
  - React Responsive Carousel
* React-Bootstrap Library
* Axios HTTP Client
* JSON Web Token for authentication


## Our Planned Approach
* [Project Trello Board: User Stories, Resources and Development Plan](https://trello.com/b/qJ5YXS7L/project-four)

* [App Flow Chart and Proposed Entity Relationship Diagrams](https://www.figma.com/file/nzI51c1l1kPjnLjdxosC6I/Flow-Chart?node-id=0%3A1)

* [Wireframe App Mockups](https://www.figma.com/file/CbzmDiTOtefvXPzt3A5Pus/Bootleg-Bill's-Unofficial-Audio-Rarities?node-id=508%3A1785)

* [Early Google Sheets ERD Draft](https://docs.google.com/spreadsheets/d/1t3OSPLlnp3fUsaDO9et2jlCsDUnY_zXIcBZBl0zRwXg/edit#gid=0)

* [Static Resources Google Drive](https://drive.google.com/drive/folders/1i3zq2lW8AuenJoQfLGZNG4o_-lGuiJxL)


Before beginning in earnest, the team ensured we had as thorough a plan as possible for the task ahead of us. This meant charting the user's journey through the site in a flow graph for both planned "user types" (Buyer and Seller), planning out the points at which object CRUD operations would take place, and formulating the schema requirements for each object model. After we were confident we had a workable road map, the project lead initialised the front- and backend components, which we each committed to our repositories and ensured we had the necessary connections with the project lead through GitHub.

From this stage until our eventual completion, our methodology was to hold a team meeting every morning, after lunch and at the end of each day to discuss which features we would divide between ourselves, how we were progressing, and what our next steps would be. We would endeavour to regularly commit and merge our work at these points, and would freely assist one another with any issues we ran across. Our approach paid off, as we were able to achieve all of our required functionality, as well as the vast majority of our stretch goal wishlist.

### User Stories

* As an unregistered user, I want to be able to view the shop's products, so that I can decide if I want to buy a product. 
* As an unregistered user, I want to sign up for an account, so that I can log in and make purchases.
* As an unregistered seller, I want to be able to use a unique identifier on sign up, so that I can generate a seller account.
* As a logged out or unregistered user, I should only see an option to log in or sign up in the navbar so that I can log in or sign up from anywhere.
* As an unregistered user, I want to be prompted to sign up for an account if I try to add a product to my cart, so that I can purchase it.
* As a seller, I want to be able to log in with email address and password, so that I can gain secure access to my account.
* As a registering user, I want to be registered as a buyer by default, so that if I am a seller I have to manually choose that option.
* As a registered user, I want to log in with my email address and password, so that I can purchase the products I like.
* As a registered user, I want to be able to add items to my cart and then continue shopping, so that I can hold them there until I am ready to check out.
* As a logged in user, I should be able to see a logout link in the navbar, so that I can easily log out
* As a logged in user of any kind, I want to be able to logout, so that I am no longer logged in.
* As a user, I want to view my order history, so I can keep track of the status of my orders and/or create a return for a delivered order.
* As a seller, on log in, I want to be able to see a dashboard of order and inventory information, so that I can keep track of the products and sales.
* As a seller, I want to be able to edit, add and delete products from the inventory, so that it can be kept up to date.
* As a seller, I want to be able to expand on each individual orders information, so that I can view or edit the details.
* As a seller, I want to be able to edit the status of an order in the dashboard, so that I can keep track of all orders.
* As a user, I want to be able to see whether a product is in stock, so that I know whether I can purchase it.
* As a user, I want to be able to filter the products on the shop page by movie or games, so that I can search the products I'm interested in.
* As a user, I want to be able to see the best selling tape, so that I can know what is most popular on the site.
* As a user of the site, I want to be able to easily view product details without losing my place in the shop, so that I can have a seamless shopping experience.
* As a user, I want to add a product to the cart when I view the detail of the product, so that I can later purchase that product.
* As a user, I want to be able to see the subtotal of my order on the cart page, so that I know how much I will have to pay on checkout.
* As a buyer, I want to be able to clear or delete items from my basket, so that it no longer holds unwanted items.
* As a buyer, I want to be able to checkout the items in my basket from anywhere on the site, so that I can purchase them.
* As a buyer, I want to be able to be able to select whether my billing address is different from my shipping address, so that I can send items to the same/different place than my billing address.
* As a buyer, on submitting my information, I want to get confirmation of the success of my order.
* As a user, I want to be able to sign up to the newsletter to get newsletters about products.
* As a seller, I want to be able to filter the order list on the dashboard, so that I can view ongoing and past orders separately.
* As a user, I want to be able to search for a product by keyword, so that I can find the product I'm looking for.
* As a seller, I want to be able to view the site as  a user does and edit product within that view, so that I can easily keep it updated.
* As a seller, I want to be able to search for the product in the dashboard by keyword or id number, so that I can find the product I'm looking for.
* As a seller, I want to be able to search for an order in the dashboard by order reference number, so that I can find the order I'm looking for.
* As a seller, I want to be able to disable a product, so that it doesn't delete from the inventory list but it is not visible on the product index.

## Wireframes?

## Biggest Wins

## Future Inclusions