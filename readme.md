<!--This would be a great lab for fist-to-five differentiation...also ask who has an API key already so they can skip step 1 if needed.-->

<!--It is CRITICAL that the instructor make a clear delineation between AJAX and Node requests.  Devs can NOT use their work from previous ajax lessons here.  We MUST point out that while this is analogous to their work yesterday, the main difference is that we are now making these requests from the BACK end, not the FRONT end.  Use pictures, ask devs to repeat this in their own words.  It cannot be overstated how confusing this can be without the proper framing. -->

# Node CLI Weather

> Note: This will be a pair programming activity.  After the previous lesson, how comfortable are you with completing the steps below?  After a fist-to-five, find a similar number to pair up with.  Choose one computer to work on, and a driver to start coding.

Today we will use Node.js to make a request to **Weather Underground**.  Here are the steps to get set up.  If you get stuck, remember to **Read**, **Search**, then **Ask**.

1. Get an API key from [Weather Underground](https://www.wunderground.com/weather/api/).
2. Set up your initial npm environment.
3. Create `index.js`.
4. Place your API key in a separate `env.js` file.

### Getting an API key

>If you already have an API key from the last execise, you can skip this step.

1.Go to [Weather Underground](https://www.wunderground.com/weather/api/).  
2. Sign up for an account by clicking the "Join" link at the top right and following the steps.
3. Wait a few seconds, then check your email for a Verification email of Weather Underground. You may need to check your spam or other folders.
4. Click the "Validate Your Email" button.
5. Return to [Weather Underground](https://www.wunderground.com/)
6. Click the "More" dropdown and select "Weather API for Developers" near the bottom of the dropdown.
7. Click the "Pricing" tab to "purchase" a free key and follow the steps.
You may need to refresh the page if it claims you have not validated your email yet.
8. Your API key will be displayed on the page.


### Setting up a node environment

Do the following *inside your WDI work folder*.

1. Fork and clone this repo.
2. Enter the `node-cli-weather` directory.
3. Run `npm install` to install all the dependencies.

### index.js

1. **Require** the `request` [library](https://www.npmjs.com/package/request) so you can reach the weatherUnderground service.
2. Look at the [Weather Underground API Documentation](https://www.wunderground.com/weather/api/d/docs) to find a way to get JSON weather data.
3. Make a request to Weather Underground to find Denver weather data.
4. Print this data to the console in the form "The weather in Denver is `<cloudy>`" or similar.
5. Test this to verify it works!

### env.js
An `env.js` file is a great way to keep your API secret. We'll add our key to a seperate file, then list that file in our `.gitignore`, so that it's not pushed up to our remote repo. 

1. In your `env.js` file, turn your api key into a varible.
2. Export that variable.
<details><summary>What would that file look like?</summary>

'use strict'

const apikey = "12345678";

module.exports = apikey;

</details>
3. Require it in `index.js`.
4. [.gitignore](https://help.github.com/articles/ignoring-files/) the env.js file.
5. Test that your weather request still works!

<!--Make sure you model a solution, at least for the env.js before leaving. -->
