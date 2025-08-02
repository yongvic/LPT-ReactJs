import type { RouteObject } from "react-router-dom";

export const index = (componentPath: string): RouteObject => ({
  index: true,
  lazy: () => import(`./${componentPath}`),
});

export const route = (path: string, componentPath: string): RouteObject => ({
  path,
  lazy: () => import(`./${componentPath}`),
});
