# FT Developer Technical Test

Write a JavaScript package that is able to:

-   fetch an array of URLs which contain JSON data
-   return their contents in a promise

When writing this package, you should consider:

-   Error states
-   Testing
-   Documentation
-   Choice of dependencies

---

## Getting Started

### Running the app

```
yarn && yarn start
```

In the terminal, cd to the root of the project and run `yarn && yarn start` this will install all dependencies and run the app.

### Tests

```
yarn test:watch
```

In the root of the project run `yarn test:watch` this will run all tests with Jest.

---

## Technology Decisions

### Functional / declarative approach

I felt that this task was best suited to this paradigm. I saw a more a natural fit for single-purpose pure functions and less value in using classes in this specific case.

### Axios

Axios syntax is 1 less LOC than `isomorphic-unfetch` and is very well maintained. This libary is easily mocked with `jest-mock-axios` so I chose it for code velocity. Given more time, I would refactor to use `isomorphic-unfetch` due to it's 66% smaller file size (15KB vs 5KB GZipped).

### TypeScript

I find TypeScript helps balance my velocity and quality by enforcing strongly typed code, leading to fewer type-related errors. This also helps me document the code and use syntactic sugar like ESNext imports, aliases and other features.

### TSJest

Jest has an intuitive test syntax and easy to configure and works intuitively with TypeScript, async/await and Axios.

---

## Concessions

-   I have not put in any pre-commit hooks in here for linting
-   I have not publicly published this NPM module, if I were to do so I would `npm publish --access public` or configure an `.npmrc` file.
-   There are no E2E tests
-   Package not bootstrapped with Nx or Lerna for at-scale code sharing
