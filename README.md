<div align="center">
  <h1>gatsby-remark-images-grid</h1>
  <br/>
  <p>
    <img src="./logo.png" alt="gatsby-remark-images-grid" height="100px">
  </p>
  <br/>

[![Npm version][badge-npm]][npm]
[![Npm downloads][badge-npm-dl]][npm]
[![MIT license][badge-licence]](./LICENCE.md)
[![PRs welcome][badge-prs-welcome]](#contributing)

</div>

---

`gatsby-remark-images-grid` create a `<figure>` tag for you containing:

-   A responsive CSS grid with your images
-   A `<figcaption>` tag, optionally

You can, of course, choose the maximum columns number.
Layout will be responsive and display less columns with small screens.

![example](./screenshots/screenshot_1.png)

## Getting started

[![gatsby-remark-images-grid](https://nodei.co/npm/gatsby-remark-images-grid.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gatsby-remark-images-grid/)

You can download `gatsby-remark-images-grid` from the NPM registry via the
`npm` or `yarn` commands

```shell
yarn add gatsby-remark-images-grid
npm install gatsby-remark-images-grid --save
```

## Usage

1.  Add the plugin in your `gatsby-config.js` file:

```js
module.exports = {
    plugins: [
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    // Make CSS grids available
                    // without options
                    "gatsby-remark-images-grid"
                    // or
                    // with options
                    {
                        resolve: "gatsby-remark-images-grid",
                        options: {
                            className: "myCustomClassName",
                            gridGap: "20px",
                            margin: "20px auto",
                        },
                    },
                ],
            },
        },
    ],
}
```

> Note: If you use others images remark plugins, put `gatsby-remark-images-grid` first because images are not images nodes before being wrapped by a grid

2.  Use grid layout in your markdown

-   Use the _markdown_ `code` syntax
-   Use `grid` for the lang followed by the number of columns you want and the caption (optional) separated by a _pipe_ (`|`)

````markdown
```grid|2|My super images!
![](../photo1.jpg)
![](../photo2.jpg)
```

```grid|3
![](../photo3.jpg)
![](../photo4.jpg)
![](../photo5.jpg)
```

```grid|4
![](../photo6.jpg)
![](../photo7.jpg)
![](../photo8.jpg)
![](../photo9.jpg)
```
````

## Props

| Name      | PropType | Description                        | Default                  | Example             |
| --------- | -------- | ---------------------------------- | ------------------------ | ------------------- |
| className | string   | Custom className                   | "gatsbyRemarkImagesGrid" | "myCustomClassName" |
| gridGap   | string   | Grid gap (horizontal and vertical) | -                        | "20px"              |
| margin    | string   | Margin around grid                 | -                        | "20px auto"         |

## Contributing

-   ⇄ Pull/Merge requests and ★ Stars are always welcome.
-   For bugs and feature requests, please [create an issue][github-issue].

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details

[badge-npm]: https://img.shields.io/npm/v/gatsby-remark-images-grid.svg?style=flat-square
[badge-npm-dl]: https://img.shields.io/npm/dt/gatsby-remark-images-grid.svg?style=flat-square
[badge-licence]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[badge-prs-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[npm]: https://www.npmjs.org/package/gatsby-remark-images-grid
[github-issue]: https://github.com/xuopled/gatsby-remark-images-grid/issues/new
