# Project Overview

Using Backbone, I develop a single page app that tracks the user's calorie intake, and optionally, other health-related metrics. Typing food names into the search field will display a list of matching foods as provided by the health API. Users will be able to select an item from the list, and the item will be added to the list of foods the user is tracking. The total calorie count will also update to reflect the new daily total.

## Screen shot from project
![Alt text](https://github.com/TViPE/FEND-Health-Tracker/blob/master/img/screenshot_00.png)

## Why this Project?

It's important that web developers have experience with multiple organizational libraries and frameworks. This experience is important to employers, and helps reiterate that there are many different tools for organizing applications.


## How will this help my career?

* Employers are looking for developers who have experience with multiple libraries and frameworks, and who are willing and able to learn new ones.
* This project will further your experience building applications, specifically with Backbone



# How to run the application
1. Clone or download the responsitory
2. Extract the zip file after downloading.
3. Click on index.html to run the application.
4. If you modify the code and create your own health tracker app:
- Please make sure that you have a good and fundalmental understanding of Backbone.js and MVC design pattern. 
- The project is divided into 3 parts: view, model, and collection.
- View will include AppView, ResultView, and FoodView. AppView is the entire application view that contain ResultView and FoodView. Based on the result returned from Nutrionix API (enter food item name in search input field and click search button), the ResultView will display the result table containing item name, brand name, and calories, and a button that let the user add that item to their list. The result returned from Nutrionix API also create a collection storing that data aray. Each data represents a model with 3 attributes: itemName, brandName, and calories.
- After picking the desired food item, the user can search for different food item and choose the food item based on the result table.
- The total calories will be calculated based on selected foods.


