## Test Driven Development, ou Desenvolvimento Orientado a Testes

> É uma metodologia para desenvolvimento e escrita de códigos. Essa metodologia funciona da seguinte > maneira:
>
> Escrevemos um teste unitário que inicialmente irá falhar, já que o código testado ainda não foi implementado;
>
> Criamos o código que faça o teste passar, ou seja, a implementação da funcionalidade testada;
>
> Esse código deve satisfazer imediatamente a asserção que colocamos no nosso teste;
>
> Quando o código estiver implementado e o teste satisfeito podemos refatorar o código;
>
> E agora que a funcionalidade está criada, ela deve passar sem que seja necessário reescrever o teste.

[O que é TDD](https://cursos.alura.com.br/extra/alura-mais/o-que-e-test-driven-development-tdd--c1137)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run format` (lib Prettier)

Aplica a formatação definida no arquivo .prettierrc em todo o projeto!

**OBS: configurar settings.json(User Settings do VSCode):**

```
{
    "editor.fontSize": 20,
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "Default Dark+",
    "git.autofetch": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "editor.formatOnSave": true,
    "prettier.requireConfig": true,
    "editor.codeActionsOnSave": {
        "source..fixAll.eslint": true
    }
}
```

### Plugins do React

npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

**Como ficará o arquivo `.eslintrc`**

```
{
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
        "jsx": true
        }
    },
    "rules": {
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/self-closing-comp": "warn",
        "no-unused-vars": "off",
        "import/no-unresolved": "off"
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "jest": true,
        "node": true
    },
    "settings": {
        "react": {
'        "version": "detect"'
        }
    }
}
```

### Arquivo `package.json`:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "format": "prettier --write \"src/**/*{.js,.jsx}\"",
    "lint": "eslint \"src/**/*{.js,.jsx}\" --quiet",
    "eject": "react-scripts eject"
},

```

### `npm run lint` (lib Lint)

Aplica as regras de lint definidas em `.eslintrc` em todo o projeto!
