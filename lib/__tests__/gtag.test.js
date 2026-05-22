import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { GA_MEASUREMENT_ID, pageview, event } from "../gtag";

describe("gtag helpers", () => {
  beforeEach(() => {
    global.window = {};
  });

  afterEach(() => {
    delete global.window;
  });

  it("sends pageview when gtag is available", () => {
    const gtagSpy = vi.fn();
    global.window.gtag = gtagSpy;

    pageview("/dashboard");

    expect(gtagSpy).toHaveBeenCalledWith("config", GA_MEASUREMENT_ID, {
      page_path: "/dashboard",
    });
  });

  it("does not throw when pageview is called without gtag", () => {
    expect(() => pageview("/dashboard")).not.toThrow();
  });

  it("sends event analytics payload when gtag is available", () => {
    const gtagSpy = vi.fn();
    global.window.gtag = gtagSpy;

    event({
      action: "click_cta",
      category: "engagement",
      label: "hero_button",
      value: 1,
    });

    expect(gtagSpy).toHaveBeenCalledWith("event", "click_cta", {
      event_category: "engagement",
      event_label: "hero_button",
      value: 1,
    });
  });

  it("does not throw when event is called without gtag", () => {
    expect(() =>
      event({
        action: "click_cta",
        category: "engagement",
        label: "hero_button",
        value: 1,
      }),
    ).not.toThrow();
  });
});
