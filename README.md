# Towards a suite of reusable React components for the modern website.

## Project uses a port of the Tailwind Vue tutorials to React and Redux as its base application.

## A work in progress.

The Tailwind Vue tutorials are an excellent example of the layout of a modern responsive website
and was chosen as the base for this project.

With the advent of projects such as https://bit.dev/, suites of smaller reusable components that can be used plug-and play like lego bricks to construct the look and feel of today's modern web sites are
"coming into their own". Coupled with Vue "slots", Svelte "slots" and React "RenderProps", it is now possible to decouple a tight parent-child component relationship and still maintain relationships that communicate data
and props for rendering.

A reusable component can also have its own data. A reusable login component that slots into a reusable
site header where various login components could be interchanged, must be able to set an 'isLoggedIn' flag that all other reusable components can go to find out whether a user is logged in so that they can update
their internal state to enable buttons, menu items etc.

This project will explore how a reusable Redux "framework" could be used to bind reusable gui components together,
where the React/Vue/Svelte components might come with Redux state and Redux actions that can be plugged into the Redux framework.

This version uses React, Redux and Tailwind. There will be a parallel project using
Sveltekit/Svelte, Svelte Stores (hopefully, if not fall back to Redux) and Tailwind.

- step 1: publish an attractive modern website
  - start breaking down into smaller reusable plug and play gui components with their own redux components

## Getting Started

1. Install dependencies `yarn install` or `npm install`
2. Run the dev server `yarn start` or `npm run start`
