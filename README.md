Hello! This is Zeynep :) 

For docker:

docker pull zeynepaykal/unith-test:latest

docker run -p 3000:3000 zeynepaykal/unith-test:latest

For running the app:

npm install

npm run dev

For testing:

npm run test


------------------------------------------------------------------------------------------------------------------------

Libraries:
I have used React and Redux toolkit - Reducers can be found in itemsSlice.ts.
I would like to remind that state updates in reducers are automatically immutable thanks to 
the integrated Immer library inside Redux toolkit. Just wanted to make sure you don't worry about state updates.

Caching:
I save items in a cache array and assign a nanoId library for unique ids.

Performance:
For performance purposes, I used React.lazy, Suspense, memo and reselect features of React.

Testing:
For testing, I use Jest (hence needed the babel libraries too). Test was not asked in the assignment but 
I added a simple one which mimics the fetch and caching of the items.

CSS: 
I am using a grid style with my own file (not a framework).

Caching images: 
I tried to cache the images to the browser with Base64 string, but it was blocked by CORS policies. I would need to investigate more on that.

Looking forward to speak :)


