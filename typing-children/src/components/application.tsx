/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[];
 * React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */

import React from "react";
import { PropsWithChildren } from "react";

type BoxProps = {
  randomProp?: string;
  children?: React.ReactNode;
};

//or

type BoxPropsPropsGeneric = PropsWithChildren<{}> & {
  randomProp?: string;
};

//or

type BoxPropsPropsGeneric2 = PropsWithChildren<{
  randomProp?: string;
  style?: React.CSSProperties | undefined;
}>;

const Box = ({ children, style }: BoxPropsPropsGeneric2) => {
  return (
    <section
      className="m-4"
      style={{
        ...style,
        padding: "1em",
        border: "5px solid purple"
      }}
    >
      {children}
    </section>
  );
};

const Application = () => {
  return (
    <main className="m-8">
      <Box>
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box>
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
    </main>
  );
};

export default Application;
