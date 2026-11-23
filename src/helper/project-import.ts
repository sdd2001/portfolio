import type { MarkdownInstance } from "astro";
import type {
  ProjectFrontmatter,
  ProjectInfo,
} from "../models/project-info.ts";
import { getImage } from "./images.ts";

export const fileMapper = (
  file: MarkdownInstance<ProjectFrontmatter>,
): ProjectInfo => ({
  ...file.frontmatter,
  projectImage: getImage(file.frontmatter.projectImage),
  projectDescription: file.rawContent().trim(),
});

export const professionalProjectFiles = import.meta.glob<
  MarkdownInstance<ProjectFrontmatter>
>("../../projects/professional/*.md", { eager: true });

export const schoolProjectFiles = import.meta.glob<
  MarkdownInstance<ProjectFrontmatter>
>("../../projects/school/*.md", { eager: true });
