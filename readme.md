<!--This would be a great lab for fist-to-five differentiation...also ask who has an API key already so they can skip step 1 if needed.-->

<!--It is CRITICAL that the instructor make a clear delineation between AJAX and Node requests.  Devs can NOT use their work from previous ajax lessons here.  We MUST point out that while this is analogous to their work yesterday, the main difference is that we are now making these requests from the BACK end, not the FRONT end.  Use pictures, ask devs to repeat this in their own words.  It cannot be overstated how confusing this can be without the proper framing. -->

# Node CLI Weather

Today we will use Node.js to make a request to **Weather Underground**.  Here are the steps to get set up.  If you get stuck, remember to **Read**, **Search**, then **Ask**.

1. Get an API key from [Weather Underground](https://www.wunderground.com/weather/api/).
2. Set up your initial npm environment.
3. Create `index.js`.
4. Place your API key in a separate `env.js` file.

### Getting an API key

Go to [Weather Underground](https://www.wunderground.com/weather/api/).  You will be prompted to sign up.  Sign up for the free plan.  Copy the API key you are given, but don't share it.

### Setting up a node environment

Do the following *inside your WDI work folder*.

1. Fork and clone this repo.
2. Enter the `node-cli-weather` directory.
3. Run `npm install` to install all the dependencies.

### index.js

1. **Require** the `request` library so you can reach the weatherUnderground service.
2. Look at the [Weather Underground API Documentation](https://www.wunderground.com/weather/api/d/docs) to find a way to get JSON weather data.
3. Make a request to Weather Underground to find Denver weather data.
4. Print this data to the console in the form "The weather in Denver is `<cloudy>`" or similar.
5. Test this to verify it works!

### env.js

1. Save your API key in an object.
2. Export that object.
3. Require it in `index.js`.
4. .gitignore the env.js file.
5. Test that your weather request still works!

<!--Make sure you model a solution, at least for the env.js before leaving. -->
