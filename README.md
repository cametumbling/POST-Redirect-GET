# POST-Redirect-GET

## Installation

-   npm i
-   npm start

## Description

This dynamic server-side web app demonstrates the POST-redirect-GET pattern for handling both valid and invalid form data. It is built on Node and Express, and uses the template engine Handlebars for handling the front-end.

#### Developer Notes

While I work predominantly with React, I thought it would be overkill for this project, and I was eager to try a different approach. For the same reason, I have tried not to use other libraries to achieve the aims of this project, aside from testing (Jest), styling (Bootstrap), and express-session.

#### Structure

-   app.js --> the entrypoint and the app routing/logic, needs refactoring
-   /services/validationService.js --> validation logic
-   /views

#### Security

Data security is always important, but especially so at the NHS, where PII is frequently handled. For that reason, this app features the following data security strategies:

-   Front and back-end validation

    -   Aside from "required", front-end validation has been commented out in order to demonstrate back-end logic.

    -   I assumed the following validation critera: alphanumeric, no leading space, max 10 chars (as given)

-   Context stored in session only
-   Data is transferred in the request body

#### Testing

-   Jest is used to run one simple test on the /success path
-   npm test

#### Accessibility

-   ARIA tags are used, including the added paragraph id="input-maxlength" for screen readers.

## Next Steps

-   Refactoring for improved code reuse
-   Back-button handling for success page
-   Testing

---

## Background

POST-redirect-GET is a standard pattern used within web application development. It provides a clean separation of concerns when using web
interfaces to update data (POST) and subsequently view data (GET), with a redirect as a seamless transition between the two operations.

## Requirements

-   Write a simple web application that uses the POST-redirect-GET pattern.
-   The web application should show a data entry page with a single text field and button for user interaction.
-   On receiving valid data the web application should show a simple success page.
-   The text field should be validated to a maximum of 10 characters.
-   The code handling POST-redirect-GET logic for valid and invalid data should be easily re-usable.

## Acceptance Criteria

GIVEN a user has entered the text '0123456789'
WHEN the data is submitted
THEN the success page is shown

---

GIVEN a user has entered the text '0123456789A'
WHEN the data is submitted
THEN an error message is shown on the data entry page

---

GIVEN a user has submitted the text '0123456789A'
AND an error message has been displayed
WHEN the user refreshes the data entry page
THEN the same content is displayed without any error message
