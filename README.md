# Recipes React App
This was an amazing project I had the opportunity to develop with other 3 friends from Trybe (Luiz Fernando, Luiz Gustavo mostly on design & Gabriel).

We used Trello (Kanban) to share 88 tasks between us and make this amazing Recipes React App Project.

# Details
The idea was to have a login and password as homepage.
As soon as the user logs in (not connected to db yet), he'll be redirected to the meals page:![meals page](http://i.imgur.com/l9M7eHL.png)
PS: the email is checked using regex, so does the password. The password must be over 6 characters. Only then the login button is enabled.

When this happens, a localStorage is set up with the key "email" and value as the email the user entered.

The user have the ability to list by categories (top navigation bar) or search for a specific meal.
In the footer, you have the option to switch over to cocktails recipes.
![cocktails recipes](http://i.imgur.com/6aJRhBS.png)

When a user clicks on any recipe, it creates a localStorage "inProgressRecipes" key and the value being
`{cocktails: {}, meals: {}`
and adds the recipe number (same as url) as value for either the cocktails OR meals key (depending which one the user's at).
In the example below, the user accessed the cocktail recipe number 17222
![cocktail 17222](http://i.imgur.com/7ZiJhLg.png)

If he clicks on start recipe ("Iniciar Receita"), the ingredient steps changes to checkbox, and those are saved inside this localStorage object to keep the progress in case the user closes the app.
![recipes checkbox](http://i.imgur.com/UyEewYU.png)

# Libraries / API
* React
	 * React Router
	 * React Hooks
	 * React Context Api for state management 
* We used `fetch` method to call the API.
* The API used in this project was [http://themealdb.com/](http://themealdb.com/), which is AMAZING!

* Styling (mobile adapted) was made using pure CSS

### We ran the CodeClimate using the Airbnb Standards rules on the entire project.
	
# Run locally
1) Clone or download the repository
2) Install dependencies with `npm install`
3) Enter the project folder and run `npm start`
4) Visit `http://localhost:3000/recipes-react-app/`

Thanks for visiting :)