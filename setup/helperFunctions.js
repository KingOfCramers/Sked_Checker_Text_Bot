const getNode = query => document.querySelector(query);
const getNextNode = query => document.querySelector(query).nextSibling;
const getText = query => document.querySelector(query).textContent.trim();
const getNextText = query => document.querySelector(query).nextSibling.textContent
const makeArray = query => Array.from(document.querySelectorAll(query));

const clean = item => item.replace(/\s\s+/g, ' ').trim();
const makeCleanArray = query => Array.from(document.querySelectorAll(query)).map(x => clean(x));
