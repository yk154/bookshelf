## Exercise 2: Create a front-end web app that displays a collection of things (React.js).
### Author: Amy Kim 

##### Requirement Specifications
---
**Option 1: Build a “bookshelf” app** 
###### All teams:
* Your goal is to create a front-end web app that displays a collection of things. This can be your favourite books, TV shows, animals, travel destinations, etc.
* The user should be able to see your entire collection on the homepage (i.e. the “preview” of each item).
* The user should be able to click on an item in your collection to see additional info about it. For example, a book item might show author, genre, publication date, etc.
* Create your component architecture however you see fit. React requires components while Vue does not, but using components in Vue can be helpful.
    * While you’re free to divide your app into as many components as you’d like, we recommend that you think about writing the following 3 components:
    ```
        <Collection /> - displays the complete collection on the home page
        <Item /> - displays the preview of one item. There are many items within your collection.
        <ItemDetail /> - the additional info shown when user clicks on an item.
    ```
    * If you choose not to use components in Vue, the alternative is to use the loop directive to render HTML chunks in your index.html file for every item in a data array or object, and rendering the unique value of the item in the list for each chunk (similar to component properties)
* You can hard-code your data store (name, image, details, etc.) in JSON format. Pass the data for each item in your collection as props into your components in React or Vue, or dynamically render the data using Vue binding directives if you choose not to use components.
* You may use any external packages you think are helpful. However, we should be able to install all dependencies and run your app properly by following the instructions in your repo’s README (hint: write an easy-to-follow README!)
---