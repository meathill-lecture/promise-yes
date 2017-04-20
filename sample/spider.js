/**
 * Created by Meathill on 2017/4/20.
 */
let url = ['http://blog.meathill.com/'];
function fetchAll(urls) {
  return urls.reduce((promise, url) => {
    return promise.then( () => {
      return fetch(url);
    });
  }, Promise.resolve());
}
function fetch(url) {
  return spider.fetch(url)
    .then( content => {
      return saveOrOther(content);
    })
    .then( content => {
      let links = spider.findLinks(content);
      return fetchAll(links);
    });
}
fetchAll(url);