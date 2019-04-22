# BC ACF Blocks

This provides 4 React blocks to the system. They all use Redux for state management. It is an adaptation of the origin ACF Blocks package from Acquia designed to work with the [BigCommerce ACF module](https://github.com/thirdandgrove/acf_bc).

This relies on the `react_block` module, which in turn is an extension of the `pdb` module.

For the **Buy Now** component to work you need to add your BigCommerce instance base URL to the 'constants.js' file.

These components are managed and build using webpack, so each component is an individual item. This makes it more robust and reliable, but it also adds potential bloat to the page load.

You will need to determine if you want to follow a similar approach, OR use more direct components that inherit the same React and Redux libraries from the `react_block` module.

Just a reminder that ACF is a reference architecture, and you will need to evaluate your own needs and build your own solution appropriately. Each ecommerce integration is different. Feel free to use or extend these components if they are valuable. However, the expectation is that most projects will require their own custom components due to theming, layout, deign, and desired UX.
