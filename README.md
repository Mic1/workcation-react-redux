# Towards a suite of reusable React components for the modern website.

## Project uses a port of the Tailwind Vue tutorials to React and Redux as its base application.

## A work in progress.

The jury is still out on whether Tailwind's extensive html in-line css class verbosity
masks the basic html structure of components enough to make coding slow and difficult.

The recommendation of Adam Watham ("Mr Tailwind") is, rather than using the @apply directive
excessively to lift up the in-line css, to create multiple small components that thin out the code
to make the main components more legible.

This project intends to create a suite of smaller reusable components that can be used plug-and play
like lego bricks to construct the look and feel of today's modern web sites.

This version uses React, Redux and Tailwind. There will be a parallel project using
Svelte, Svelte Stores (hopefully, if not fall back to Redux) and Tailwind.

A reusable component can also have its own data. Or in "reusable" terms communicate with and manipulate
the framework's data. A reusable login component that slots into a reusable site header where various login
components could be interchanged, must be able to set an 'isLoggedIn' flag in a generic e.g. Redux framework
where all other reusable components can go to find out whether a user is logged in so that they can update
their internal state to enable buttons, menu items etc.

The hope is to slowly pull apart a great example of a modern website - the Tailwind Workcation tutorials - 
into multiple reusable small components that communicate with a generic data/state framework.

## Getting Started

1. Install dependencies `yarn install` or `npm install`
2. Run the dev server `yarn start` or `npm run start`
