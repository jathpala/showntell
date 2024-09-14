import "./styles/main.scss"

// Dynamically import all .svelte files in the lib/containers directory
const modules = import.meta.glob([
    "./lib/containers/*.svelte",
    "./lib/layouts/*.svelte"
]);

// Helper function to convert PascalCase to kebab-case
function pascalToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

for (const path in modules) {
  modules[path]().then((module) => {
    // Extract the component name from the file path
    const componentName = path.match(/\/([^\/]+)\.svelte$/)[1];

    // Convert PascalCase to kebab-case for the custom element name
    const customElementName = `snt-${pascalToKebab(componentName)}`;

    // Register the custom element
    customElements.define(customElementName, module.default.element);
  });
}
