# Next.js Starter Kit with TypeScript and TailwindCSS

This is a starter kit for building modern React applications using Next.js, TypeScript, and TailwindCSS.

## Prerequisites

- node (>= 22.7.4)
- npm (>= 10.8.2)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:walkerchiu/nextjs-ts-tailwindcss-kit.git
   cd nextjs-ts-tailwindcss-kit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Initialize Husky:

   ```bash
   npx husky init
   ```

4. Run the prepare script:

   ```bash
   npm run prepare
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

2. Build the application for production:

   ```bash
   npm run build
   ```

3. Run the production build locally:

   ```bash
   npm start
   ```

4. Lint the code:

   ```bash
   npm run lint
   ```

## Pre-commit Hooks

This project uses `lint-staged` to run linters on staged files before committing. It ensures that your code meets the project's linting and formatting standards.

To manually run `lint-staged`, use the following command:

```bash
npx lint-staged
```

The pre-commit hooks configuration is defined in the `.pre-commit-config.yaml` file.

To set up pre-commit hooks, run the following command:

```bash
# Install pre-commit to manage git hooks
brew install pre-commit

# Install the git hook scripts.
pre-commit install

# Run against all the files.
pre-commit run --all-files
```

## Learn More

To learn more about Next.js, TypeScript, and TailwindCSS, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
