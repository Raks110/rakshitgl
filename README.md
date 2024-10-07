Hi!

This code brews up my site- tucked in some dangling web in the long stack-overflown Spiderverse.

The project is solely built on **React** and hosted on **Google's App Engine**. The site is under construction. It will be up and running to its fullest soon!

## Building the project:
* run ```npm run local``` to build the project locally.
* This command starts the server on ```localhost:3000```. The port is configurable.

## Deployment:
* Currently the project is deployed on App Engine. The project provides the relevant files: app.yaml and .gcloudignore to assist with that.
* Create the build directory of the react-app.
  * Run ```npm run build```
* Deploy with ```gcloud app deploy```

## Upcoming features:
* Ability to remember the theme chosen by the user (with browser cache)
* List all projects and notes
* Responsive UI viewable on mobile phones
* View PDFs within the app (whenever any project has a relevant PDF users can read)
* A personalized section dedicated to the creator of this site
* Pages:
  * This section will host any web apps that can demonstrate projects I built
  * It will provide a snapshot for the user to experiment with the project before trying it locally
<br/>
A lot more is brewing. The astronaut is ready to explore unchartered territories!