# Flexible Cookies 🍪

[![NPM version](https://img.shields.io/npm/v/flexible-cookies.svg)](https://www.npmjs.com/package/flexible-cookies)
[![Build Status](https://travis-ci.org/pierrecabriere/flexible-cookies.svg?branch=master)](https://travis-ci.org/pierrecabriere/flexible-cookies)

**flexible-cookies is a flexible way to manage cookies in javascript/node.js.**

---

# Installation
```
npm install --save flexible-cookies
```

# Basic Usage

```js
import { Cookies } from 'flexible-cookies';
// or default import
import Cookies from 'flexible-cookies/cookies'
```

## Set cookie

```js
Cookies.set('COOKIE-NAME', 'COOKIE-VALUE', options);
```

## Get cookie

```js
const cookieValue = Cookies.get('COOKIE-NAME', options);
```

## Delete cookie

```js
Cookies.delete('COOKIE-NAME', options);
```

# Configuration

You can specify a source where **flexible-cookies** will read/edit the cookie.<br/>
By default, the source is `document` (which is the browser working-behavior) but you can change it to make cookies working in a server context:
```js
Cookies.set('CONTEXT-COOKIE', 'Hello !', {
  source: ctx.req.headers
});
const cookieValue = Cookies.get('CONTEXT-COOKIE', {
  source: ctx.req.headers
});
console.log(cookieValue) // Hello !
```

## Cookie validity duration

By default, the cookie is valid until the browser session is closed, but you can increase the validity duration of the cookie:
```js
Cookies.set('ONE-YEAR-VALID-COOKIE', 'COOKIE-VALUE', {
  days: 365
});
```

## Cookie path

```js
Cookies.set('SPECIFIC-PATH-COOKIE', 'COOKIE-VALUE', {
  path: '/'
});
```

# 🚀