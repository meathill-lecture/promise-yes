Reveal.initialize({
  history: true,
  dependencies: [
    {
      src: './node_modules/reveal.js/plugin/markdown/marked.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: './node_modules/reveal.js/plugin/markdown/markdown.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: './node_modules/reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});

if (location.search.match(/print/gi)) {
  var link = document.createElement( 'link' );
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = './node_modules/reveal.js/css/print/pdf.css';
  document.getElementsByTagName( 'head' )[0].appendChild( link );
}