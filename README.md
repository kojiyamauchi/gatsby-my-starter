<h1 align="center">
  🌴<br>
  Gatsby.js My Starter
</h1>  

<p align="center"><a href="https://kojiyamauchi.github.io/gatsby-my-starter/">https://kojiyamauchi.github.io/gatsby-my-starter</a></p>

## ⛵️ Base Starter.  
  - [Gatsby's Default Starter.](https://github.com/gatsbyjs/gatsby-starter-default)  
  
ー  
  
## ⛵️ Usage.  
  - Development.
    - `yarn dev`
  - Build.
    - `yarn build`  
  
ー  
  
## 🖋 Memo.
  - After first Install, Asked to Install `@types/vfile-message` Again After Starting Up Development Environment.  
  Adjust `remark` Version, Used in Each Module.  
  `resolutions -> remark -> 12.*.*` on package.json.
  
ー  
  
## ✋ TODO.
  - When Building in CI, `WebpackError: ReferenceError: React is not defined` Occur.  
  Maybe, the Version of React Installed in the Each Module Does Not Yet Match @17.  
  Temporary -> Add `yarn.lock`  
  - When Development or Build, Error Below on Terminal.  
  `(node:67113) [ESLINT_LEGACY_ECMAFEATURES]`  
  Maybe, Bad Way to Write `short-uuid/.eslintrc`.  
  Temporary -> Add `.yarnclean` & Ignoring `short-uuid/.eslintrc`  
  - When Using Contentful in Gatsby.js Causes an Error Around GraphQL Images.  
  Maybe Something Around `gatsby-source-contentful/src/fragments.js` is Wrong.  
  Temporary -> Add `.yarnclean` & Ignoring `gatsby-source-contentful/src/fragments.js`  
    - <https://github.com/gatsbyjs/gatsby/issues/16455>
  - @types/styled-components When Install Latest Version, @types/react-native's Installed Together.  
  Temporary -> Add `.yarnclean` & Ignoring `@types/react-native`
    - <https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33311>  
  - Styled Components Autofix Stylelint Doesn't Work Yet.  
  Maybe Auto Fix of Stylelint Doesn't Work in Template Literals.  
  So, Display Only Warning on the Terminal.
    - <https://github.com/styled-components/stylelint-processor-styled-components/issues/264>  
    - <https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#9100>  

  <h2 align="center">🏝</h2>  
