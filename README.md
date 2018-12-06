# Bookstore Demo

Bookstore demo based on Node.js & React.js.<br>See working demo at: <a href="http://bookstoredemo.joaquinastelarra.com">http://bookstoredemo.joaquinastelarra.com</a>

## INSTALL

This guide assumes you have GIT, Node (latest version) & SQLite3 previously installed.<br><br>

1) Clone repo `git clone git@gitlab.com:joaquinlarra/bookstore-demo.git` in your sites folder.<br>
2) install dependencies `cd bookstore-demo && npm run install`.<br>
3) Configure Backend:<br>
    1 - Copy the .dist config file to default.json `cp backend/config/default.dist.json backend/config/default.json`<br>
    2 - edit default.json : `nano backend/config/default.json`, replace value of [FULL SYSTEM PATH] in "sqlite" param with  the system path of project's root folder.
   

## RUN APP

1) To run app, open 2 terminal tabs and type a single command on each one:<br>
    1- `npm run backend` to run backend in `localhost:3030` (Port should be available!)<br>
    2- `npm run frontend` to run frontend in `localhost:3000` (Port should be available!)<br><br>
    
2) Testing endpoints: in root folder type `cd backend && run test`<br>


NOTE:
UI is responsive. In listings, in mobile layout, some fields are missing.


    Copyright (C) 2018  Joaquin Astelarra

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.