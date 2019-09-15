# Vue Firebase Library App

## Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```


##### Lints and fixes files
```
npm run lint
```

## Project Breakdown
App entry point is at `src/main.js`. This is where _Vue_ is initialized
and other modules needed for the bootstrapping of the app is loaded.

### Additional Modules
This app uses [vuefire](https://vuefire.vuejs.org) and [firebase](https://firebase.google.com/)
for authentication and [cloud firestore](https://firebase.google.com/docs/firestore) as a realtime database.

### VueFire Setup
[Vuefire](https://vuefire.vuejs.org) offers a great way to handle firestore realtime data
through its firestore plugin.

The plugin is registered as:
```ecmascript 6
import { firestorePlugin } from "vuefire";
```
and is made available to vue before vue gets mounted to the page:
```ecmascript 6
Vue.use(firestorePlugin);
```

### Firebase Setup
Before using firebase in any application, a firebase project needs
to be created in your [firebase console](https://console.firebase.google.com/).
The project should be created as a web project.

After creating the project, some firebase keys will be given to you for use
in the project.
Make a copy of `src/config/env.example.js` and save it as `src/config/env.js`.
The firebase keys gotten from your project dashboard should be added to
`src/config/env.js` accordingly.

And with that, firebase is set to be used 🔥🔥

### Authentication with Firebase
by @jamesjay4199

### Firestore with VueFire and Firebase
by @ochuii

### Deployment with firebase
by @umorenSamuel
