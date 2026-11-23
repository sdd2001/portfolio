import { icon as renderIcon } from "@fortawesome/fontawesome-svg-core";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Built once per module load. Solid wins over brands, brands over regular,
// matching the lookup order the link component used before.
const iconsByName = new Map<string, IconDefinition>();
for (const pack of [far, fab, fas]) {
  for (const definition of Object.values(pack)) {
    iconsByName.set(definition.iconName, definition);
  }
}

/**
 * Returns the SVG markup for a Font Awesome icon by name, e.g. "github".
 * Returns undefined when no name is given; throws on an unknown name.
 */
export function getIconHtml(name?: string): string | undefined {
  if (name === undefined) return undefined;

  const definition = iconsByName.get(name);
  if (!definition) {
    throw new Error(`Unknown Font Awesome icon: ${name}`);
  }

  return renderIcon(definition, {
    attributes: { "aria-hidden": "true" },
    styles: { width: "1em", height: "1em" },
  }).html.join("");
}
