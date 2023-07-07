## Next.js Starter with Atomic Design and Tailwind CSS

This is a starter repository for Next.js [Learn](https://nextjs.org/learn) projects. It includes the following features configured:

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) and [clsx](https://www.npmjs.com/package/clsx)
- [PostCSS](https://postcss.org/) with [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

I also recommend this VS Code extensions: [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). They are configured to work with this project.

## Atomic Design

The folder structure is organized according to the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology. For this repository, the components are organized in the following folders:

- **atoms**: the smallest components, such as buttons, inputs, etc.
- **molecules**: components that are composed of atoms.
- **organisms**: components that are composed of atoms, molecules and other organisms.

There are some components so you can see how they work. Feel free to delete them and create your own.

I also added some `@layers` inside of `globals.css` so you can check how they work and implement them in your project.

There is a `types.d.ts` file, this file is used to declare types and import them in the project. I added some types to help you get started.

## Getting Started

First, install the dependencies:

```bash
pnpm i
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

_This project uses [pnpm](https://pnpm.io/) as the package manager. You can use `npm` or `yarn` if you prefer._

## TailwindCSS helper: clx

> /utils/clx.ts

clx is a helper function that allows you to use [Tailwind-Merge](https://www.npmjs.com/package/tailwind-merge) and [clsx](https://www.npmjs.com/package/clsx) together.

Let's say you have the following component:

```tsx
const Input = ({ isError, ...props }) => (
  <button className={clx('p-4 bg-blue', isError && 'bg-red')} />
)
```

```tsx
<Input isError />
```

If the error prop is `true`, the className will first be resolved to `"p-4 bg-blue bg-red"` by clsx, and then to `"p-4 bg-red"` by twMerge.

**Feel free to experiment with the folder structure to fit your needs. If you find an issue or have recomendations, please, open an issue or pull request :)**
