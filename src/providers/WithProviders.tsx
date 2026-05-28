import { StrictMode, type ComponentType } from "react";
import { MantineProvider } from "@mantine/core";

export function withProviders(Component: ComponentType) {
  return function WrappedApp() {
    return (
      <StrictMode>
        <MantineProvider>
          <Component />
        </MantineProvider>
      </StrictMode>
    );
  };
}
