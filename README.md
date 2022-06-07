# News Analyzer

App for fetching, visuallizing and analyzing news articles with ease.
This app uses the `newsapi` in order to get the latest and greatest of stories

## Table of Contents

- [Technologies]
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Technologies

- backend : Nodejs
    - express as an http server
    - passport for authentication strategy session-holding
    - mongoDB and mongoose for DB and ORM

- frontend : React
    - react tagcloud for creating the word cloud
    - react router for routing between URI's and protecting restricted endpoints

## Thought Process

As a modern app, we would like to rely on micro-services and de-couple as much as possible.
Therefor, front and back are two seperate services (in this exercise - two different projects)

We need to confirm that a user is authorized - we'll try to achive this by creating an authentication route 
and responding with a unique token if the auth'ed successfully

The app is suppose to handle large amounts of requests - treating the fetching of the data as a seperate endpoint will allow us to monitor, cache or memoize
and store results in a DB for quicker serving

## routes
- Login
- main application route ('\')
- Logout
- news API fetching

## Problems we had in the way
- Authentication was harder than expected
- Dealing with usage loads - we haven't implemented any load balancing for the app (nginx or similar)
- connecting the services was harder than expected