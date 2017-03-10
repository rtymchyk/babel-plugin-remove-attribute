# babel-plugin-remove-attribute [![CircleCI](https://circleci.com/gh/rtymchyk/babel-plugin-remove-attribute.svg?style=svg)](https://circleci.com/gh/rtymchyk/babel-plugin-remove-attribute) [![npm version](https://badge.fury.io/js/babel-plugin-remove-attribute.svg)](https://badge.fury.io/js/babel-plugin-remove-attribute)
Plugin to remove a single attribute from JSX.

## Usage
.babelrc
```javascript
{
  plugins: [
    ..., 
    ['babel-plugin-remove-attribute', { 
      attribute: (attribute name here),
    }], 
    ...,
  ],
}
```

## Motivation
When locating elements for testing (e.g. React, Selenium), it's common to do this via a class on the element. This couples styling with testing, which is something you don't want, so you probably use a custom attribute on the elements. You also might not want your production code riddled with these attributes either.
