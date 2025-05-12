import React from "react";
import App from "./App";
import { ReactLenis, useLenis } from "lenis/react";

export default function RootComponent() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <>
      <ReactLenis root>
        <App />
      </ReactLenis>
    </>
  );
}
