# A Starter Kit for Front-End Dev using Nuxt / SCSS

## Install
### Dependencies
Install [yarn](https://yarnpkg.com/lang/fr/docs/install)

### To do
```sh
yarn
```
**Well done !**

Everything is ready to code ;)

## To code
```sh
yarn dev
```

## To export in HTML files
```sh
yarn generate
```
And copy the `dist` folder

## Others
- [Knacss](https://www.knacss.com/) is automatically installed. If you want to use it, you can import it from `node_modules` in your scss files like `assets/stylesheets/style.scss`.
- [Sitemap](https://github.com/nuxt-community/sitemap-module)
- [PWA](https://pwa.nuxtjs.org/)
- [lozad](https://github.com/ax2inc/lozad-module)
- SVG inline loader
- [fontawesome](https://github.com/FortAwesome/Font-Awesome)

### Add lozad in your img
- Add `lozad` class in your img
- Add mounted function in your template which contains
```js
mounted () {
	this.$lozad.observe();
},
```
