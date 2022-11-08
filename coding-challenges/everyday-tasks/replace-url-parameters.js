// Write a function to Replace parameters in url

const replaceParamsInUrl = (url, replacements) => {
  return replacements.reduce((accumulator, replacement) => {
   return accumulator.replace(":"+replacement.from, replacement.to)
  }, url)
}

const initialUrl = "/posts/:postId/comments/:commentId";

const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);

console.log(resultUrl);

/**
 * Here we are looping through every element of array of `parameters object` that we pass as argument to `replaceParamsInUrl` function
 * We use reduce function
 * Initial value of accumulator is set as `initialUrl` parameter
 * We run `replace` function to update parameters in url to new values
 */