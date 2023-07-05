# AngularTasks

This is a project working with a variety of Angular Tasks you may see throughout your projects.  It was a challenge for me, but I really enjoyed it. 

## Task 1

Create an Angular/React component called "Counter" that displays a number.

1. Initialize the number to 0.
2. Display the number in the component's template.
3. Add two buttons to the template: "Increment" and "Decrement".
4. Implement the functionality to increment and decrement the number when the corresponding buttons are clicked. If the value is 0, disable the "Decrement" button.
5. Update the displayed number in real-time as it changes.

## Task 2

Create an Angular/React component called "To-Do List" that displays a List of Items.

The To-Do List component should have the following elements:

* An input field of type text where users can enter the content of a new to-do item.
* An "Add" button next to the input field to add the new item to the list.
* A label with the text "Items" below the input field.
* A list area where the added to-do items will be displayed.
* 
The user flow should be as follows:

* The user enters the content of a to-do item in the input field.
* The user clicks the "Add" button.
* The content of the new to-do item is added to the list area below the input field.
* The input field is cleared, and ready for the user to enter another to-do item.
  
Each added to-do item in the list should have the following:

* The content of the item.
* A "Remove" button next to the item content.
* When the user clicks the "Remove" button, the corresponding to-do item is removed from the list.
* The user can repeat the process of entering content, clicking the "Add" button, and removing items as desired.

## Task 3

Create an Angular/React component called "Form Validations" that displays a registration form. The form should include the following input fields with corresponding labels:

1. Name: A text input field where the user must enter their name.
2. Email: An email input field where the user must enter a valid email address.
3. Contact: A text input field where the user must enter a 10-digit contact number.
4. Password: A password input field where the user must enter a password with a minimum of 8 characters.

Additionally, include a submit button below the form. The submit button should be initially disabled. It should only become enabled when all the input fields have valid values based on the following criteria:

* The Name field should not be empty.
* The Email field should contain a valid email address with the '@' symbol.
* The Contact field should contain exactly 10 digits.
* The Password field should have a minimum length of 8 characters.
* Once the submit button is enabled, the user can click on it to submit the form. “ When the form is submitted, display the values entered by the user below the submit button ”.

## Task 4

Create a static product data array inside the component with some sample product details like name, price, and description.

In the template, display the product data array in a table format, with columns for name, price, and description. Each row should represent a single product.

Above the table, add an input search field. This field will be used to filter the product data based on user input.

Implement the search functionality. When the user types into the search field, dynamically filter the product data array to display only the products that match the search query. The search should be case-insensitive, meaning it should not distinguish between uppercase and lowercase characters.

As the user continues typing or modifies the search query, update the table in real-time to reflect the filtered results. The table should only display the products that match the current search query.

## Task 5

Create an Angular/React component called "ImageUpload" that allows users to upload an image file and displays the uploaded image in a circular format. 

Use Case:

* Users can able to upload an image file and see the image displayed in a visually appealing circular shape. This will allow the User to easily upload and preview images within my application.

Requirements:

* The component should include an input file control that allows users to select an image file from their local system.
* When an image file is selected, it should be displayed in a circular format within the component.

## Task 6
Create an Angular/React component called "User-Details" that allows users to get HTTP data from the  API and displays the user details in Template.

Use Case: Display User Details from API

* As a user, I want to see the details of users obtained from an API.
* When I access the "User-Details" component, it should make an HTTP request to the API endpoint: API URL: https://jsonplaceholder.typicode.com/users.
* Once the API response is received, the component should display a table with the following user details:

user details 

id, 
name, 
email, 
phone
 
* Each row in the table should represent a user, and the columns should display the corresponding user details.
* The user details should be displayed in an organized and visually appealing manner.

