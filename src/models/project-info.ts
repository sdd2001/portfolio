import type { SkillMap } from "./skill-map.ts";

export interface ProjectInfo {
  projectImage: ImageMetadata;
  employer: string;
  projectName: string;
  projectDescription: string;
  skillStack: Array<SkillMap>;
  site?: string;
  sourceCode?: string;
}