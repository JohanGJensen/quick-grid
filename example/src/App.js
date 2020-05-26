import React from 'react'

import { Grid, GridComponent } from 'quick-grid';

function App() {
  const [toggle, setToggle] = React.useState(true);

  const span1 = {
    xs: 12,
    s: 12,
    m: 6,
    l: 6,
    xl: 6,
  };

  const span2 = {
    xs: 12,
    s: 12,
    m: 6,
    l: 6,
    xl: 3,
  };

  const span3 = {
    xs: 12,
    s: 12,
    m: 6,
    l: 6,
    xl: 2,
  };

  const span4 = {
    xs: 12,
    s: 12,
    m: 6,
    l: 6,
    xl: 1,
  };

  return (
    <>
      {/* <Grid width={'50%'} ></Grid> */}
      {toggle ? <Grid columns={12} verticalSpace={10} horizontalSpace={15}>
        {/* <GridComponent span={6}> */}
        <GridComponent span={span1}>
          <p>col6</p>
        </GridComponent>
        {/* <GridComponent span={3}> */}
        <GridComponent span={span2}>
          <p>col3</p>
        </GridComponent>
        {/* <GridComponent span={3}> */}
        <GridComponent span={span2}>
          <p>col3</p>
        </GridComponent>
        {/* <GridComponent span={1}> */}
        <GridComponent span={span4}>
          <p>col1</p>
        </GridComponent>

        <GridComponent span={span1}>
          <p>col6</p>
        </GridComponent>
        {/* <GridComponent span={3}> */}
        <GridComponent span={span2}>
          <p>col3</p>
        </GridComponent>
        {/* <GridComponent span={3}> */}
        <GridComponent span={span2}>
          <p>col3</p>
        </GridComponent>
        {/* <GridComponent span={1}> */}
        <GridComponent span={span4}>
          <p>col1</p>
        </GridComponent>
      </Grid> : null}
      <button onClick={() => { setToggle(!toggle) }}>click</button>
    </>
  );
}

export default App
