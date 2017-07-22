# babel-plugin-remove-attribute [![CircleCI](https://circleci.com/gh/rtymchyk/babel-plugin-remove-attribute.svg?style=svg)](https://circleci.com/gh/rtymchyk/babel-plugin-remove-attribute) [![npm version](https://badge.fury.io/js/babel-plugin-remove-attribute.svg)](https://badge.fury.io/js/babel-plugin-remove-attribute)
Plugin to remove a single attribute from JSX elements.

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
When locating elements for testing (e.g. React, Selenium), it's common to do so via a class on the element. This couples styling with testing though, so it's a better idea to use a custom attribute on the elements. You can then use the plugin for production code to remove these from the DOM, if you care enough.
