# Bookstore Demo

Bookstore demo based on Node.js & React.js.

## INSTALL

This guide assumes you have GIT, Node (latest version) & SQLite3 previously installed.<br><br>

1) Clone repo `git clone git@gitlab.com:joaquinlarra/bookstore-demo.git` in your sites folder.<br>
2) install dependencies `cd bookstore-demo && npm run install`.<br>
3) Configure Backend:<br>
    1 - Copy the .dist config file to default.json `cp backend/config/default.dist.json backend/config/default.json`<br>
    2 - edit default.json : `nano backend/config/default.json`, replace value of [FULL SYSTEM PATH] in "sqlite" param with  the system path of project's root folder.
   

## RUN APP

1) To run app, open 3 terminal tabs and type a single command on each one:<br>
    1- `npm run db` to run sqlite3.<br>
    2- `npm run backend` to run backend in `localhost:3030` (Port should be available!)<br>
    3- `npm run frontend` to run frontend in `localhost:3000` (Port should be available!)<br><br>
    
2) Testing endpoints: in root folder type `cd backend && run test`<br>


