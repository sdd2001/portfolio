import type { MarkdownInstance } from "astro";
import type {
  ProjectFrontmatter,
  ProjectInfo,
} from "../models/project-info.ts";
import { getImage } from "./images.ts";

export const filesMapper = (
  files: Record<string, MarkdownInstance<ProjectFrontmatter>>,
): Array<ProjectInfo> =>
  Object.values(files)
    .map((file) => ({
      ...file.frontmatter,
      projectImage: getImage(file.frontmatter.projectImage),
      projectDescription: file.rawContent().trim(),
    }))
    .sort(
      (a, b) =>
        a.employer.localeCompare(b.employer) ||
        a.projectName.localeCompare(b.projectName),
    );

export const professionalProjectFiles = import.meta.glob<
  MarkdownInstance<ProjectFrontmatter>
>("../../projects/professional/*.md", { eager: true });

export const schoolProjectFiles = import.meta.glob<
  MarkdownInstance<ProjectFrontmatter>
>("../../projects/school/*.md", { eager: true });

export const personalProjectFiles = import.meta.glob<
  MarkdownInstance<ProjectFrontmatter>
>("../../projects/personal/*.md", { eager: true });
