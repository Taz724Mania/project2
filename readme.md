# Seal Project 2

- **Taz Campbell**
- **App Name:My Shopping List**
- **Description:Users will be able to create a shopping list which will have the store location, the item name, the brand name, the cost, the quantity, and whether or not the item was purchased. they will be able to add, edit, and delete any of the items from that list. additional goal outside of mvp would be to add a user sign in/up option so that the list could be saved**
- **GitHub URL: https://github.com/Taz724Mania/project2**
- **Deployed Website: https://tc-seal-project2.onrender.com**
- **Trello Board: https://trello.com/b/Ji44nIro/my-shopping-list-app**

## List of Dependencies

##### Node Dependencies (package.json)

- express, morgan, mongoose, dotenv, ejs, bcrypt. connect-mongo, express-session, method-override

##### Frontend (if used, ex. jquery, alpine, bootstrap, htmx, etc.)

- jquery, html, css, js

## Route Map


| List Index | /list | GET | Gets and displays the entire shopping list |

| List New | /list/new | GET | Renders the new item template |

| List Delete | list/:id | DELETE | Removes an item from the list |

| List Update | list/:id | PUT | Posts the changes made to an item |

| List Create | /list | POST | Posts a new item to the list |

| List Edit | /list/:id/edit | GET | Renders the template allowing changes to be made to an item |

| List Show | /list/:id | GET | Displays the details of an individual item |

OPTIONAL:

| List Sign-Up | /signup | GET | Renders the sign-up form |

| List Sign-Up | /signup | POST | Stores the user information and encrypts the password they created |

| List Login | /login | GET | Renders the login display |

| List Login | /login | POST | Submits the login information and verifies valid user info |

## Design Mockups (Desktop + Mobile)

##### Mobile Design

(./LayoutsDesignInspo)

##### Desktop Design

(./LayoutsDesignInspo)

## ERD (Entity Relationship Diagram)

(./LayoutsDesignInspo)
