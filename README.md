# Description

This GitHub repo is the Frontend part of a project called "Aniki". The backend part of the website can be found in the following link: https://github.com/Anikiorg/Aniki-app-backend 
"Aniki" is an anime list website, a forum of sorts, in which users can access information of different anime, review them and modify different preference lists. Unauthenticated users are unable to comment or add, but they can still access anime information.

# Instructions

To run this app on your computer:
- git clone this repo as well as the backend one 
- install all dependencies:
    - npm install, 
    - npm i react-scripts@latest, 
    - npm install -D tailwindcss postcss autoprefixer,
    - npx tailwindcss init -p, 
    - npm i -D daisyui@latest
- create an .env file in the root and add an environment variable: REACT_APP_API_URL=http://localhost:5005 
- in the server terminal type npm run dev; in the client terminal type npm start

# Demo

https://aniki-app.netlify.app/ 