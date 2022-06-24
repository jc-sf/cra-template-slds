## Absolute Imports

### Usage:

With [jsconfig.json](/template/jsconfig.json) file, you can clean up your imports using absolute paths. For instance, instead of importing files like:

```js
import Header from '../../../../../components/Header'
```

you can instead import files like:

```js
import Header from 'components/Header'
```
