## Exercise 2: Create a front-end web app that displays a collection of things (React.js).
### Author: Amy Kim 


##### Requirement Specifications
---

**Option 1: Build a “bookshelf” app** 
** Our team decides not to do this exercise; I did individually for extra credit. **
###### All teams:
* Your goal is to create a front-end web app that displays a collection of things. This can be your favourite books, TV shows, animals, travel destinations, etc. => * I decided to display travel destination *
* The user should be able to see your entire collection on the homepage (i.e. the “preview” of each item). => * item component *
* The user should be able to click on an item in your collection to see additional info about it. For example, a book item might show author, genre, publication date, etc. * ItemDetail Component, and it lands another page by React Router *
* Create your component architecture however you see fit. React requires components while Vue does not, but using components in Vue can be helpful.
    * I divided into two components:
    ```
        <Collection /> - displays the complete collection on the home page
        <Item /> - displays the preview of one item. There are many items within your collection. And also, there is pop-up modal view for item detail.
    ```
* You can hard-code your data store (name, image, details, etc.) in JSON format. Pass the data for each item in your collection as props into your components in React or Vue, or dynamically render the data using Vue binding directives if you choose not to use components.
* You may use any external packages you think are helpful. However, we should be able to install all dependencies and run your app properly by following the instructions in your repo’s README (hint: write an easy-to-follow README!)


---

**Under my-app folder, there is one more READMe.md for this** 

##### external package
* I start to initialize react app by npm create-react-app my-app. Then, npm init react-app. Whenever I run the app, I do npm start.
* I attempted to use react-router-dom but currently displaying modal rather than navigating through router.
'''
* npm install react-router-dom
* npm install react-hot-loader
* npm install reactstrap
* npm install --save reactstrap react react-dom
* npm install react-responsive-modal
'''

##### file I worked on
'''
* src folder:  
    * index.js
    * App.js
    * Components folder: Collection (homepage), Item (preview + modal),
'''

##### Src Attributes
* for background image on homepage, I downloaded from Google Search: https://encykorea.com/wallpaper-world-map/world-map-wallpapers-vintage-wallpaper-world-map/

* Google Fonts
