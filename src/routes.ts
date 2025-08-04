import { index, route } from "./route-config";
import type { RouteObject } from "react-router-dom";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("projects", "routes/projects.tsx"),
  route("projects/:id", "routes/project-detail.tsx"),
  route("notes", "routes/notes.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:id", "routes/blog.$id.tsx"),
] satisfies RouteObject[];
