# Building an Intro component with sign-up form from frontendmentor.io. [Here it is live](https://kariandreah.github.io/intro-component-with-signup-form/)

## Day 1:
Designed the desktop version. Need to add the form validations and make the app responsive as well. Figured out how to toggle an error. But need to figure out how to show the image in the input. 
-Figured out how to show image by using it as background in input. Also just hid attributes that show when you don't put in valid values. 
**Issues**
Making placeholder dissapear when the value in invalid. 

## Day 2: 
Figured out how to change placeholders on focus, and when values are invalid. 

## Day 3:
Found a bug where the password wouldn't show error when empty if there is a valid email. It's because I had the else statement from the 'email' block before the if statement for the 'password' block. So the function was exiting before getting to the 'password' block. 


# Frontend Mentor - Intro component with sign up form

![Design preview for the Intro component with sign up form coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this introductory component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

