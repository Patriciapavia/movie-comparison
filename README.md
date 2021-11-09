# Prince's Theatre

## Getting Started

This is a [React.js](https://reactjs.org/) app with [material-ui](https://mui.com/).


- Navigate to the `movie-comparison` directory in your terminal
- Install the dependencies `npm install or yarn install`
- Start the server `npm run start`

Open [http://localhost:3000](http://localhost:3000) with your browser, and you should see the home page.



## The challenge 

I started out with building a react component and rendering out the movie list.The challenge that I'm facing is that two providers are returning two separate arrays, there is no way that I can compare the price from two different arrays. So I start to just render a movie list from one provider to make sure that all the react components work and I can fetch movies and store them in redux state. After that I started to think of a way to compare the price from two provider, the only way that i can think of is (“there could be a better way than this”) I have to combine two array and created a new array with price has array of two provider, so I can compare by price[0] which is filmworld and price[1] which is cinemaworld. so eventually i get the result that i was looking for
 
## What I could improve

I could first think of what the core problem is and plan what to do first so I would solve the same problem with less amount of time

# Techstack and why I use it

## react with redux
because states will no longer need to be lifted up. it is makes it easier to trace which action causes any change. The component does not need to provide any state or method for its children components to share data among themselves.

# axios
Axios give ability to monitor request progress This is more of a question between XMLHttpRequest (which powers axios) or Fetch API. Fetch API currently does not provide any way to get notified of the request progress, a feature which powers feedback mechanism for large file uploads for example. Axios, on the other hand, has this functionality built in.

## redux-devtools-extension
  It is very helpful tool that you can visualize actions and state changes that take place in a redux state in the application.


