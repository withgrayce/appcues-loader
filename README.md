# appcues-loader

Async loader for the Appcues JS API written in typescript with promises.

This package makes no changes to the functionality of the Appcues JS API, it merely provides an easy way to load it asynchronously and then execute calls against the API in a Typescript project.

## Installation

```
$ npm install --save appcues-loader
```

## Usage

```typescript
import { Appcues, Loader } from 'appcues-loader';

const loader = new Loader(yourAccountId);
loader.load().then((appcues: Appcues) => {
  appcues.page();
  appcues.identify(userId, { user: 'properties' });
});
```

The API only supports the `push` call, which is documented [here](https://www.klaviyo.com/docs/getting-started).
