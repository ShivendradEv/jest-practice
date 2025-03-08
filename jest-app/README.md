# Configure jest
Jest and react testing library configuration in vite project

## Steps
- npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom @testing-library/user-event
- npm install --save-dev jest-environment-jsdom
- npm install identity-obj-proxy --save-dev
- create **jest.config.js**
```js
export default {
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
```
- create **.babelrc**
```js
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
- create **jest.setup.js**
```js
import "@testing-library/jest-dom";
```
- add below script in **package.json**
```js
"scripts": {
  "test": "jest --watchAll"
}
```
- now create test files
