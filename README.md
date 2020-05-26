# quick-grid

> A set of grid components to use in your React project to create a responsive layout

[![NPM](https://img.shields.io/npm/v/quick-grid.svg)](https://www.npmjs.com/package/quick-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save quick-grid
```

## Usage

```tsx
import React from 'react'
import { Grid, GridComponent } from 'quick-grid';

function App() {

  return (
    <>
      <Grid columns={12} verticalSpace={10} horizontalSpace={15} width={100}>
        {/* <GridComponent span={6}> */}
        <GridComponent span={xs: 12, s: 12, m: 6, l: 6, xl: 1}>
          <p>I am text inside a grid component!</p>
        </GridComponent>
      </Grid>
    </>
  );
}
```

### Grid

> The <Grid> Component is the container in which your <GridComponents> will go. 
> Columns specifies the the number of columns the grid holds and spans over.
> Horizontal and Vertical -space are padding are margin values between the components.
> Width is calculated in percentage.

### GridComponent

> The <GridComponent> is the responsive component that will be adjusted in columns it occupies based on the screensize of the device.
> it takes an object like `{xs: 12, s: 12, m: 6, l: 6, xl: 1}`. Each property is a value that will occupy that many columns from the <Grid> at each given breakpoint.
> If a property is not specified it will be set to 100% of the columns value.

## License

MIT © [JohanGJensen](https://github.com/JohanGJensen)
