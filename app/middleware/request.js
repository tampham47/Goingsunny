/**
 * fetch
 * uri
 * params
 */

 const host = 'https://api.goingsunny.com/api/v1';

export default (uri, params) => {
  const url = `${host}${uri}`;
  console.log('request', uri, url, params);
  return fetch(url, params).then(res => {
    return res.json();
  })
};
