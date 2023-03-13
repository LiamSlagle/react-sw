To run this application:

`git clone https://github.com/LiamSlagle/react-sw.git`

`npm run start`

And point your browser at `localhost:3000`

### Technologies used by this application

[Create React App](https://github.com/facebook/create-react-app)

[TypeScript](https://www.typescriptlang.org/)

[ReduxJS](https://redux.js.org/)

[Material UI](https://mui.com)

[React Router](https://reactrouter.com/en/main)

### My Process

After initializing the project with Create React App and configuring my development environment to my liking, I determined that based on the requirements, the app would only need two pages, one for searching for films, and one for viewing the film details. Both of these pages can live on their own route, with the latter requiring an ID to be part of the route. From there, I started building out the UI with Material's components, and included a custom theme.

For the API consumption portion of the search page, I wrote a custom React hook which utilizes the JavaScript fetch api to grab the data. On a successful response, the hook merges the results into the films slice of state I wrote with Redux Toolkit, which handles deduping automatically.

I decided to have the film details page select the film from the state by ID, rather than making a separate request, as I'd noticed the API had response times occasionally upwards of 5 seconds. This means that on a hard refresh, the state will be lost and the user will need to reenter their search, but prevents the user from needing to wait for a second API call to retreieve data that the app already has.

With the architectural decisions made and the top-level functionality implemented, all that was left to do by this point is continue improving the interface, and adding nice-to-haves where I could.
