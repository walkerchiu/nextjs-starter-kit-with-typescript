# Next.js Starter Kit with TypeScript

## Get Started For IDE

### Prerequisites

- npm >= 8.11.0
- node >= 17.9.0

### Setting Up the Environment for Development

Git Commit Message

```sh
# commitlint
npm install
npx husky install
chmod a+x .husky/commit-msg
```

Runs Prettier on your changed files.

```sh
# pretty-quick
npx husky-init
npm install --save-dev prettier pretty-quick
npx husky set .husky/pre-commit "npx pretty-quick --staged"
```

## Building Up the Project for Development

### Install

```sh
npm install
```

### Usage

For development:

```sh
npm update
npm run dev
```

For production:

```sh
npm run build
npm run start
```
