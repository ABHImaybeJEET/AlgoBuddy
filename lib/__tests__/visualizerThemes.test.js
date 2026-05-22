import { describe, it, expect } from "vitest";
import {
  VISUALIZER_THEMES,
  getVisualizerTheme,
  getThemeClasses,
  getCardTheme,
} from "../visualizerThemes";

describe("visualizerThemes", () => {
  it("returns requested theme when it exists", () => {
    expect(getVisualizerTheme("Graph")).toBe(VISUALIZER_THEMES.Graph);
  });

  it("falls back to Array theme for unknown names", () => {
    expect(getVisualizerTheme("Unknown Theme")).toBe(VISUALIZER_THEMES.Array);
  });

  it("builds merged theme classes for known keys", () => {
    expect(getThemeClasses("Queue", "text")).toBe(
      "text-green-900 dark:text-green-100",
    );
  });

  it("returns empty class string for unknown keys", () => {
    expect(getThemeClasses("Queue", "doesNotExist")).toBe("");
  });

  it("builds card theme metadata and class groups", () => {
    const cardTheme = getCardTheme("Stack");
    expect(cardTheme).toEqual({
      color: "#2563eb",
      bgClasses: "bg-blue-100 dark:bg-blue-950/50",
      surfaceClasses: "bg-blue-50 dark:bg-blue-950/40",
      borderClasses: "border-blue-200 dark:border-blue-500/20",
      textClasses: "text-blue-900 dark:text-blue-100",
      lightBg: "blue-100",
      darkBgStyle: "dark:bg-blue-950/50",
      border: "border-blue-500/20",
    });
  });

  it("uses fallback theme data when card theme name is unknown", () => {
    const fallbackCardTheme = getCardTheme("Nope");
    expect(fallbackCardTheme.color).toBe(VISUALIZER_THEMES.Array.color);
    expect(fallbackCardTheme.bgClasses).toContain("bg-purple-100");
  });
});
