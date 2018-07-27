# Kraftylab

Project Team Members:

- Richard Kim
- Sam Torosyan
- Jane Asawa
- Shri Narayanan

![krafty](https://user-images.githubusercontent.com/34262469/43171876-2d2f9f7e-8f61-11e8-8892-f0015cc05003.gif)


## Application Concept and Motivation

• Kraftylab is a website dedicated to hosting craft making classes, specifically tailored to make products from scratch.

• Goal: create an easy and efficient booking process for people to attend classes.

• Make the booking process simpler and the UI/UX accommodating enough to anyone who expresses interest in booking and buying a class to attend

• Efficiently store data to be saved on backend for categorization, analysis and updating, in case of refunds, booking errors, etc

## Technologies used

• Bootstrap was utilized for the website template, while handlebars stored the HTML and text elements to be displayed on the website page (via res.render).

• Express routing tied together all of the pages together via GET commands (/form, /schedule, /index). POST was used to intake form input and sent to a MySQL database using sequelize.

• Front end Jquery made it possible to access city and date times via button clicks from the index, while GET commands display information on the schedule page.

• Javascript (via API AJAX calls) were made in the controllers section to find and create information to be exported to the ’tables’ page in the kraftylab database (class name, date/time, attendance, etc).

•Models held arrays filled with variables (as categories) used to populate data into said categories in MySQL. Two tables, buyers and classes, were made.

Live Application link access: https://murmuring-springs-92667.herokuapp.com/
