# LOL Champion Viewer

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently using plugin:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

-   This project also uses [SCSS](https://sass-lang.com/).

-   For routing, the project uses [react-router-dom](https://reactrouter.com/en/main)

-	Site can be viewed [Here](https://lol-champion-viewer.netlify.app/)

## Running the project

-   install dependencies `npm install`
-   run `npm run dev`

\*\* can be run with `docker-compose up --build`. for more information, read the [README.Docker.md](README.Docker.md).

-   to run linter: `npm run lint`
-   to run testing suite: `npm run test`

## ESLint/TSLint configuration

This project uses ESLint as well as TSLint. The configuration is based off of Vite's initial boilerplate. for more information and documentation, go to [https://typescript-eslint.io/getting-started/](https://typescript-eslint.io/users/configs).

## IDE Configuration

This project uses EditorConfig. for documentation, go to [https://editorconfig.org/](https://editorconfig.org/).

## Code Formatting Configuration

This project uses prettier. for documentation, go to [https://prettier.io/](https://prettier.io/docs/en/).

## Testing Suite Configuration

This project uses Vitest. for documentation, go to [https://vitest.dev/](https://vitest.dev/guide/).

Unit tests are placed in the same folder that the file being tested is in. Discuss with other collaborators on either a separate `__tests__` folder or self-contained with the testing component would fit your team.
