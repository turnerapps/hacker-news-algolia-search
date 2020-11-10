# Hacker News Algolia Search Code Exercise

This code exercise was given to me to demonstrate my ability to use React and Redux to access an API. It was stated that in this case, UI design is not important; code cleanliness and clarity instead are paramount.

My original thought was to approach this like so:
- Clean up the scaffold
- Add a basic design
- Create components
- Create Redux store
- Create data binding, probably with thunks.

I ended up approaching it this way:
- Clean up CRA scaffold
- Add a basic design with components
- Experiment with API, create non-Redux version
- Create Redux store, improve functionality

The text of the exercise: 

```
Using React and Redux:
- Build an application that lets the user search the Hacker News Algolia API and displays a list of results (https://hn.algolia.com/api)
- Save the user's search terms in the Redux state (don't need to persist across sessions)

We're looking to see if what you know in React and Redux and querying an API. We're interested in whether you can write clean code and have the ability to learn/understand new technologies. We don't care about design/UI (for this project)

Resources:
- create-react-app
- HN search API: https://hn.algolia.com/api
- Redux intro: https://egghead.io/courses/getting-started-with-redux
```

*Note: though resources were given, I'll be using the format I'm used to for the Redux store, rather than spend time on a course.*