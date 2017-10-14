/**
 * fetch
 * uri
 * params
 */

 const host = 'https://api.goingsunny.com/api/v1';

export default (uri, params) => {
  const url = `${host}${uri}`;
  return fetch(url, params).then(res => {
    return res.json();
  })
};
