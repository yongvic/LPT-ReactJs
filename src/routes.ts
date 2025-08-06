import { index, route } from "./route-config";
import type { RouteObject } from "react-router-dom";

export default [
  index("routes/signup.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("projects", "routes/projects.tsx"),
  route("projects/:id", "routes/project-detail.tsx"),
  route("notes", "routes/notes.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:id", "routes/blog.$id.tsx"),
  route("home", "routes/home.tsx"),
  route("pokemons", "routes/pokemons.tsx"),
  route("pokemons/:id", "routes/pokemon-detail.tsx"),
] satisfies RouteObject[];
