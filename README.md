# Towards a suite of reusable React components for the modern website.

## Project uses a port of the Tailwind Vue tutorials to React and Redux as its base application.

## A work in progress.

The Tailwind Vue tutorials are an excellent example of the layout of a modern responsive website
and was chosen as the base for this project. Especially to cover all use cases this example was also chosen because of its take on responsive design. If component behaviours and looks are too different between media breaks, the convoluted conditionals within the css quickly become convoluted, and a better design can be to duplicate the component with the correct css for different breaks. In this example the site header with drop and filter components, and different sidebar solutions for different screen widths will test our reusable component strategy.

With the advent of products like Shopify (https://www.shopify.com/) and projects such as https://bit.dev/, suites of smaller reusable components that can be used plug-and-play like lego bricks to construct the look and feel of today's modern web sites are getting closer. Shopify charges $79 a month and requires learning its own templating
language ("Liquid") that is based on Ruby, but that does include the hosting environment. Bit.dev components are certainly not plug-and-play. Other solutions such as WordPress have been labelled "convoluted"

This project aims to investigate how close we can get to plug-and-play components with standard open source tools
including obviously html, css and javascript, and frameworks such as react and svelte (strictly not a framework
but a compiler), and state management tools such as redux.

State management tools will be very important to the solution. Many components not only require internal state data, but need to communicate data to the "outside world". Bit.dev has some great components, but they need integrating in many cases because of their "standalone" construction.

Redux will save the day here, or to be more specific Redux Toolkit. Redux Toolkit reduces the complexity of using Redux and the amount of boilerplate code that has to be coded.

An example of a reusable component is a "Google Logon" component. It might slot into a reusable site header component.

A reusable component can also have its own data. A reusable login component that slots into a reusable
site header where various login components could be interchanged, must be able to set an 'isLoggedIn' flag that all other reusable components can go to find out whether a user is logged in so that they can update
their internal state to enable buttons, menu items etc.

Using Redux Toolkit, the Google Logon component could come with its own slice and selectors, all of which are plugged in (copy/paste), and any other component that needs to know logon status, just needs to know the name of the selector to call.

This project will explore how a Redux "framework" could be used to bind reusable gui components together,
where the React/Vue/Svelte components might come with Redux state and Redux actions that can be plugged into the Redux framework.

This version uses React, Redux and Tailwind. There will be a parallel project using
Sveltekit/Svelte, Svelte Stores (hopefully, if not fall back to Redux) and Tailwind.

- step 1: publish an attractive modern website
  - start breaking down into smaller reusable plug and play gui components with their own redux components

## Getting Started

1. Install dependencies `yarn install` or `npm install`
2. Run the dev server `yarn start` or `npm run start`
