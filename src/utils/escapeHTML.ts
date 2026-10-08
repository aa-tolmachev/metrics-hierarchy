const ENTITIES: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

export const escapeHTML = (text: string) =>
	text.replace(/[&<>"']/g, (char) => ENTITIES[char]);
