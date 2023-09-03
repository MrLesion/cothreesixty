# CoThreeSixty 360 image viewer

The web component can be initiated in multiple ways:

- By using attribute
  - See list of required and optional attributes below
- By using slots
  - Add a `<slot name="imageList">` to the component and add `<img />` elements to this `<slot>`
  - This eliminates the required attributes
- By adding image paths to the option `imageList`
  - Add an array of image paths to either `imageList`-attribute on the component or `imageList`-property in json
  - This eliminates the required attributes
- By json
  - Run the `init` function with a JSON-object argument
  - JSON-object should follow one of the patterns above
  - The attribute `initOnLoad` should be set to false

## Options

- `folder: ''` (Default: Empty string): The folder where the images are located. (Required)

- `filename: ''` (Default: Empty string): The common filename pattern for the images. (Required)

- `amount: 0` (Default: 0): The total number of images. (Required)

- `imageList: []` (Default: Empty array): An array of image URLs. (Optional)

- `startIndex: 0` (Default: 0): The index of the initial image to display. (Optional)

- `spinSpeed: 100` (Default: 100): The speed of auto-spin in milliseconds. (Optional)

- `autoSpin: false` (Default: false): Whether auto-spin is enabled or not. (Optional)

- `debug: false` (Default: false): Whether debugging mode is enabled or not. (Optional)

- `leadingZeroPadding: 0` (Default: 0): The number of leading zeros to pad image filenames with. (Optional)

- `initOnLoad: true` (Default: true): Whether to initialize on page load. (Optional)

- `width: 500` (Default: 500): The width of the canvas. (Optional)

- `height: 500` (Default: 500): The height of the canvas. (Optional)