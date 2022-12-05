
![logo](./public/logo.png)
# CODAC 
###  Code Academy Berlin Community App
### Developed by Students of the Academy
## Getting Started

First, install the node modules and run the development server:

```bash
npm install
# or
yarn
```
then
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder structure explanation
```markdown
├── @core **MaterialUI based CSS Library**
├── components **Home grown components**
├── componentsDemo **DEMO components for pages (to be moved to components folder if kept)**
├── configs **project configuration**
├── context **project context providers**
│   ├── authContext
├── graphql **queries and mutations for Code Academy Berlin Backend**
│   ├── _generated_ 
│   │   ├── index.ts **hooks and types generated by codegen script**
│   ├── queries.ts **queries and mutations to generate**
├── layouts **Home grown layouts**
├── navigation **Routing links for vertical menu**
├── pages **Pages rendered by Next.js**
│   ├── _app.tsx **entry point of Next.js wrapped by providers** 
│   ├── index.tsx **Landing page**
│   ├── dashboard.tsx **Main menu interface**
│   ├── auth **Auth routes**
│   ├── **ALL OTHER PAGES ARE CURRENTLY ONLY FOR DEMO**
├── public **Static assets (Images, Fonts)**
├── styles **global styles**
├── package.json
├── package-lock.json 
└── .gitignore
```
## Resources Next.js + Strapi + GraphQL
Typescript, NextJS, Strapi & JWT & GraphQL  

## Making it work
Inspired by: https://strapi.io/blog/build-a-blog-with-next-react-js-strapi-and-apollo     

#### Typescript & Apollo
https://www.apollographql.com/docs/react/development-testing/static-typing/        
https://www.apollographql.com/blog/getting-started-with-typescript-and-apollo-a9aa2c7dcf87/           

#### General Graphql
https://graphql.org/learn/queries/       
https://www.apollographql.com/blog/the-concepts-of-graphql-bc68bd819be3/     

#### jwt token & GraphQL
https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/
#### Apollo + SSR
https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
https://dev.to/angad777/setting-up-apollo-graphql-in-next-js-with-server-side-rendering-45l5         
https://dev.to/alexandrg/how-to-setup-apollo-client-in-order-to-perform-graphql-queries-with-nextjs-41fe         
#### Next.js Auth
https://hygraph.com/blog/nextjs-authentication
https://blog.loginradius.com/engineering/guest-post/jwt-vs-sessions/
https://www.reddit.com/r/nextjs/comments/svr3zy/authentication_with_nextjs_the_dos_and_donts_and/
#### NextJS with Strapi & Apollo
https://nec.is/writing/graphql-with-apollo-react-and-nextjs/       
https://strapi.io/blog/strapi-next-setup         

#### Apollo Caching
https://towardsdatascience.com/updating-apolloclient-cache-and-re-rendering-data-4537c11c6daf        
https://www.apollographql.com/blog/first-impressions-with-apollo-client-3-2ae2a069ab2f/        
https://www.apollographql.com/docs/react/caching/cache-interaction/            
https://www.apollographql.com/blog/first-impressions-with-apollo-client-3-2ae2a069ab2f/         


### submodule deploy script authorize cmd:
chmod u+x vercel-content-submodule.sh
in a linux shell

Detailed tree view
```
codac-ts-frontend-students
├─ .gitignore
├─ .gitmodules
├─ codegen.yml
├─ components
│  ├─ cohort
│  │  └─ CohortCard.tsx
│  ├─ common
│  │  └─ BrandStyle.tsx
│  ├─ dashboard
│  │  └─ ProgressBar.tsx
│  ├─ jobs-page
│  │  └─ JobsCard.tsx
│  ├─ landing-page
│  │  ├─ BerlinSkyline.js
│  │  └─ TronGridPlane.tsx
│  ├─ libs
│  │  ├─ react-apexcharts
│  │  │  └─ index.ts
│  │  ├─ react-datepicker
│  │  │  └─ index.ts
│  │  └─ scroll-to-top
│  │     └─ index.tsx
│  ├─ lms-page
│  │  └─ LmsContentContainer.tsx
│  └─ profile-page
│     ├─ TabAccount.tsx
│     ├─ TabInfo.tsx
│     └─ TabSecurity.tsx
├─ componentsDemo
├─ content
│  ├─ career
│  ├─ data
│  ├─ web
├─ contexts
│  ├─ authContext.tsx
│  └─ settingsContext.tsx
├─ graphql
│  ├─ global
│  │  └─  __generated__
│  │     └─ types.ts
│  ├─ mutations
│  │  ├─ jobs.graphql
│  │  ├─ user.graphql
│  │  └─ __generated__
│  │     ├─ jobs.ts
│  │     └─ user.ts
│  └─ queries
│     ├─ jobs.graphql
│     ├─ students.graphql
│     ├─ user.graphql
│     └─ __generated__
│        ├─ jobs.ts
│        ├─ students.ts
│        └─ user.ts
├─ hooks
│  ├─ useAuth.ts
│  ├─ useLmsNavigation.ts
│  └─ useSettings.ts
├─ layouts
│  ├─ appBar
│  │  ├─ AppBarContent.tsx
│  │  ├─ Header.tsx
│  │  └─ ThemeController.tsx
│  ├─ auth
│  │  ├─ NotificationDropdown.tsx
│  │  ├─ UserDropdown.tsx
│  │  └─ UserIcon.tsx
│  ├─ BlankLayout.tsx
│  ├─ Footer.tsx
│  ├─ leftNav
│  │  ├─ CollapsibleLi.tsx
│  │  ├─ LeftNavBar.tsx
│  │  └─ NavContent.tsx
│  ├─ MainLayout.tsx
│  ├─ types.ts
│  └─ utils.ts
├─ lib
│  ├─ apolloClient.ts
│  ├─ createEmotionCache.ts
│  └─ lmsContent.ts
├─ navigation
│  └─ vertical
│     ├─ index.ts
│     └─ lms.ts
├─ next.config.js
├─ next.d.ts
├─ package.json
├─ pages
│  ├─ 401.tsx
│  ├─ 404.tsx
│  ├─ 500.tsx
│  ├─ api
│  │  ├─ lms-links.ts
│  │  └─ user.ts
│  ├─ auth
│  ├─ dashboard.tsx
│  ├─ index.tsx
│  ├─ jobs.tsx
│  ├─ lms
│  │  ├─ lms.d.ts
│  │  └─ [[...page]].tsx
│  ├─ login.tsx
│  ├─ pagesDemo
│  │  ├─ cards
│  │  │  └─ index.tsx
│  │  ├─ form-layouts
│  │  │  └─ index.tsx
│  │  ├─ icons
│  │  │  └─ index.tsx
│  │  ├─ register
│  │  │  └─ index.tsx
│  │  ├─ tables
│  │  │  └─ index.tsx
│  │  └─ typography
│  │     └─ index.tsx
│  ├─ profile.tsx
│  ├─ _app.tsx
│  └─ _document.tsx
├─ public
│  ├─ assets
│  │  ├─ lmslinks.json
│  │  ├─ lmspages.json
│  │  ├─ logo.png
│  │  └─ logo.svg
│  ├─ favicon.ico
│  └─ fonts
│     └─ codacA2.woff2
├─ README.md
├─ styles
│  ├─ globals.css
│  └─ LmsContentContainer.module.css
├─ theme
│  ├─ breakpoints
│  │  └─ index.ts
│  ├─ globalStyles.ts
│  ├─ overrides
│  │  ├─ accordion.ts
│  │  ├─ alerts.ts
│  │  ├─ avatars.ts
│  │  ├─ backdrop.ts
│  │  ├─ button.ts
│  │  ├─ card.ts
│  │  ├─ chip.ts
│  │  ├─ dateTimePicker.ts
│  │  ├─ dialog.ts
│  │  ├─ divider.ts
│  │  ├─ index.ts
│  │  ├─ input.ts
│  │  ├─ link.ts
│  │  ├─ list.ts
│  │  ├─ menu.ts
│  │  ├─ pagination.ts
│  │  ├─ paper.ts
│  │  ├─ popover.ts
│  │  ├─ rating.ts
│  │  ├─ select.ts
│  │  ├─ snackbar.ts
│  │  ├─ switches.ts
│  │  ├─ table.ts
│  │  ├─ tabs.ts
│  │  ├─ timeline.ts
│  │  ├─ toggleButton.ts
│  │  ├─ tooltip.ts
│  │  └─ typography.ts
│  ├─ palette
│  │  └─ index.ts
│  ├─ shadows
│  │  └─ index.ts
│  ├─ spacing
│  │  └─ index.ts
│  ├─ ThemeComponent.tsx
│  ├─ themeConfig.ts
│  ├─ ThemeOptions.ts
│  └─ typography
│     └─ index.ts
├─ tsconfig.json
├─ utils
│  ├─ create-emotion-cache.ts
│  ├─ hex-to-rgba.ts
│  └─ IsLinkActive.ts
├─ vercel-content-submodule.sh
├─ vercel-submodule-workaround.sh
└─ yarn.lock

```