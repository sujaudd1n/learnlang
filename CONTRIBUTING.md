# Contributing

First of, thank you for considering a contribution to LearnLang! We
appreciate your interest and look forward to reviewing your
contributions.

These guidelines outline the process for submitting changes, reporting
issues, and engaging with our community, as well as providing an
overview of our project's workflow. By following these guidelines,
you'll be able to make high-quality contributions that align with our
project's goals and values, helping us maintain a healthy and
productive project environment.

You can contribute in the following ways:

* Create or improve language guides in the `public/languages` directory.
* Suggest or improve learning steps.
* Provide links to blogs or websites that offer useful information for
learning new languages.

## Write guide for a language

- Get an open-source icon for the language.
- Create a language object in **src/App.jsx** using `createLanguageObject`
function and add it the the `languages` array.
- Create a file in **public/languages** named as the final part of path
field in the langauge object with '.md' appended.

Example for  JavaScript:

- Create object with `createLanguageObject("JavaScript", "/languages/javascript", "#F7DF1E", "/icons/javascript.svg")`
- The filename should be `javascript.md` in **public/languages**.
