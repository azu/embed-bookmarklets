# embed-bookmarklets

embed-bookmarklets embed bookmarlets fetched from `href=<bookmarklets url>` to a.href.

## Installation

```html
<script src="http://azu.github.io/embed-bookmarklets/embed-bookmarklets.js"></script>
```

## Usage

You should define embed position.

Target `<a>` element should has `rel="bookmarklets"`.

```html
<p>Drop & Drop <a href="./where-page-in-slide.js" rel="bookmarklets">where-page-in-slide</a> to bookmark toolbar.</p>
<script src="http://azu.github.io/embed-bookmarklets/embed-bookmarklets.js"></script>
```

Result ===>

```html
<p>Drop & Drop <a href="javascript:..." rel="bookmarklets">where-page-in-slide</a> to bookmark toolbar.</p>
```

DEMO : [http://azu.github.io/where-page-in-slide/](http://azu.github.io/where-page-in-slide/ "where-page-in-slide")

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT