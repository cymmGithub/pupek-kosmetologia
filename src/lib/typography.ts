/**
 * Fixes Polish typography by adding non-breaking spaces after short words
 * that shouldn't be left alone at the end of a line (orphans/sieroty).
 */
export function fixPolishOrphans(text: string): string {
	// Single letter prepositions: a, i, o, u, w, z
	// Two letter words: do, na, po, za, od, we, ze, to, że, by, co, ni, no, on, ku, ta, tę
	// Three letter conjunctions: ale, ani, lub, czy, jak, lub
	return text
		.replace(/(\s)([aiouwzAIOUWZ])(\s)/g, "$1$2\u00A0")
		.replace(
			/(\s)(do|na|po|za|od|są|ze|to|że|by|co|ni|no|on|ku|ta|tę|ale|ani|lub|czy|jak|Ci)(\s)/gi,
			"$1$2\u00A0"
		);
}
