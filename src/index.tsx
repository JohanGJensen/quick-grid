import React, { useMemo, useReducer, Children } from 'react';
import { reducer, initialState } from './reducer/reducer';
import { useBreakpoint } from './hooks/useBreakpoint';

interface component {
  component: object,
  span: number,
  vSpace: number,
  hSpace: number,
}

export const Grid = ({ children = undefined, columns = 12, verticalSpace = 0, horizontalSpace = 0, width = 100 }) => {
  const [, dispatch] = useReducer(reducer, initialState);
  const bp = useBreakpoint();

  React.useEffect(() => {
    console.log('adding event listener');
    window.addEventListener('resize', () => dispatch({ type: 'setdimension', payload: { width: window.innerWidth, height: window.innerHeight } }));

    return () => {
      console.log('removing event listener');
      window.removeEventListener('resize', () => dispatch({ type: 'setdimension', payload: { width: window.innerWidth, height: window.innerHeight } }))
    }
  }, []);

  const gridComponents = useMemo(() => {
    let vSpace = verticalSpace;
    let hSpace = horizontalSpace;

    return Children.map(children, (child: any) => {
      let component = child;
      let props = component.props || {};
      let span;

      if (!child) {
        return ({ component: null, span: 0, vSpace: 0, hSpace: 0 });
      }

      if (component.type !== GridComponent) {
        component = <GridComponent>{child}</GridComponent>
      }

      Object.keys(props.span).forEach(key => {
        if (key === bp) {
          span = props.span[key];

          return;
        } else {
          span = columns;

        }
      });

      return { component, span, vSpace, hSpace };
    });

  }, [children, verticalSpace, horizontalSpace, columns, bp]);

  return (
    <React.Fragment>
      <section className={'grid-container'} style={{ width: width >= 100 ? '100%' : width + '%' }}>
        {gridComponents.map((c: component, idx: number | undefined) => {
          const { component, span, vSpace, hSpace } = c;

          return (<div key={idx} className={`grid-component`} style={{
            width: `calc(${(width / columns) * span}% - ${vSpace}px)`,
            marginRight: `${vSpace}px`,
            marginBottom: `${hSpace}px`
          }} >{component}</div>);
        })}
      </section>
      <style>{`
                .grid-container {
                    height: auto;
                    display: flex;
                    flex-wrap: wrap;
                }

                .grid-component {
                    height: auto;
                    flex-shrink: 0;
                    background: lightgrey;
                }

                .grid-component:nth-child(even) {
                    background: grey;
                }

            `}</style>
    </React.Fragment>
  );
}

export const GridComponent = ({ children = undefined, span = { xs: 12, s: 12, m: 6, l: 2, xl: 2 } }) => {
  return (
    <React.Fragment>
      {span ? children : null}
    </React.Fragment>
  );
}