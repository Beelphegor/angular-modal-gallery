Sometimes, shy developers have really good ideas. So don't be shy and open an issue! :)


If you want to help me, modify the source code, but **before to create a pull request, follow these steps**

**Attention! This is really important**
Every time you'll run `npm install` inside a demo's folder, you must rebuild the library with `npm run build`


1. `npm install -g lite-server @angular/cli` (on macOS use `sudo npm install -g lite-server @angular/cli`)
2. remove all `node_modules`, `.awt`, `aot` and `dist` folders in both `demo/systemjs`, `demo/webpack` and `demo/angular-cli` folders (if necessary)
3. `npm install` (from the root of this project)
4. `npm run clean:all`
5. `cd demo/systemjs`
6. `npm install`
7. `cd ../..`
8. `cd demo/webpack`
9. `npm install`
10. `cd ../..`
11. `cd demo/angular-cli`
12. `npm install`
13. `cd ../../..`
14. `npm run build`
15. `npm run test` => if everything is ok, try to open `./coverage/html/index.html` with the `code coverage`
16. `npm run docs` => try to open `./docs/index.html` with the `internal library documentation`
17. `cd demo/systemjs`
18. `npm start` => if everything is ok (also in browser's console), kill the process and go to the next step
19. `cd ../..`
20. `cd demo/webpack`
21. `npm start` => if everything is ok (also in browser's console), kill the process and go to the next step
22. `npm run build:dev`
23. `cd dist`
24. `lite-server` => if everything is ok (also in browser's console), kill the process and go to the next step
25. `cd ..`
26. `npm run build:prod`
27. `cd dist`
28. `lite-server` => if everything is ok (also in browser's console), kill the process and go to the next step
29. `cd ..`
30. `npm run build:prod:aot` (if necessary re-follow all the steps from the beginning)
31. `cd dist`
32. `lite-server` => if everything is ok (also in browser's console), kill the process and go to the next step
33. `cd ../../..`
34. `cd demo/angular-cli`
35. `npm start` => if everything is ok (also in browser's console), kill the process and go to the next step
36. `npm run build`
37. `cd dist`
38. `lite-server` => if everything is ok (also in browser's console), kill the process and go to the next step
39. `cd ..`
40. `npm test` => if everything is ok, kill the process and go to the next step
41. **If it is ok, create your pull request**




-Only for the author-
how to publish this on npm

1. `npm version patch` (x.x.3) or `npm version minor` (x.3.0) or `npm version major` (3.x.x)
2. `npm run clean:all`
3. `npm run build`
4. `npm publish bundle`
5. `git push origin master`
6. `git push origin vx.x.x`  <-- tag name created by npm version (for instance v3.0.1)