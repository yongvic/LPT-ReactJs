import type { RouteObject } from "react-router-dom";

export const index = (componentPath: string): RouteObject => ({
  index: true,
  async lazy() {
    const { default: Component } = await import(`./${componentPath}`);
    return { Component };
  },
});

export const route = (path: string, componentPath: string): RouteObject => ({
  path,
  async lazy() {
    const { default: Component } = await import(`./${componentPath}`);
    return { Component };
  },
});
