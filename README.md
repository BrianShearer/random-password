# Password Generator Starter Code
Your Task
This week’s Challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week’s coursework will teach you all the skills you need to succeed in this assignment.

The password can include special characters. If you’re unfamiliar with these, see this list of Password Special Characters from the OWASP Foundation (Links to an external site.).

User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
Mock-Up
The following image shows the web application's appearance and functionality:



In this challenge I used the prompt window function ask the user how long they wanted as a password and whether or not they wanted; uppercase, lowercase letters, numbers or symbols 
I started with one function Writepassword. I was unable to get more than one character at a time. I split the code into two functions. One, was the arrey function with the queryselector. The other had the for loop this worked. I need to research why. 
I used the modules on the robot to figure out the window.prompts. I used U tube to find examples of password generators. The utube videos helped me organize the functions and variables. There where a lot of advanced versions that where helpful.
