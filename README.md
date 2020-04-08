# import-as-string

Import the contents of any file into a Node.js ES module as a string.

## Installation

```sh
npm install import-as-string
```

## Usage

```js
import importAsString from "import-as-string";
const schema = importAsString("./schema.graphql");

console.log(typeof schema); // "string"
```

## Arguments

`importAsString` accepts two arguments:

- `specifier`: Required. The file to import. May be a relative or absolute path, a file in an NPM package, etc.
- `encoding`: Optional. If the encoding of the file being imported from isn't UTF8, specify the encoding.
