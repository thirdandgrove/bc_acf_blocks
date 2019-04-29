# BC ACF Blocks

This provides 4 React blocks to the system. They all use Redux for state management. It is an adaptation of the origin ACF Blocks package from Acquia designed to work with the [BigCommerce ACF module](https://github.com/thirdandgrove/acf_bc).

This relies on the `react_block` module, which in turn is an extension of the `pdb` module.

For the **Buy Now** component to work you need to add your BigCommerce instance base URL to the `components/packages/core/constants.js` file.

These components are managed and build using webpack, so each component is an individual item. This makes it more robust and reliable, but it also adds potential bloat to the page load.

You will need to determine if you want to follow a similar approach, OR use more direct components that inherit the same React and Redux libraries from the `react_block` module.

Just a reminder that ACF is a reference architecture, and you will need to evaluate your own needs and build your own solution appropriately. Each ecommerce integration is different. Feel free to use or extend these components if they are valuable. However, the expectation is that most projects will require their own custom components due to theming, layout, deign, and desired UX.


## License

Copyright 2019 Third and Grove

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
