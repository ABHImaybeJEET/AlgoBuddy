import { describe, it, expect } from "vitest";
import { MODULE_MAPS } from "../modulesMap";

const UUID_V4_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe("MODULE_MAPS", () => {
  it("contains expected algorithm keys", () => {
    const requiredKeys = [
      "linearSearch",
      "binarySearch",
      "bubbleSort",
      "mergeSort",
      "quickSort",
      "pushPop",
      "enqueueDequeue",
      "queueLinkedList",
    ];
    for (const key of requiredKeys) {
      expect(MODULE_MAPS).toHaveProperty(key);
    }
  });

  it("maps every module to a UUIDv4 id", () => {
    for (const value of Object.values(MODULE_MAPS)) {
      expect(typeof value).toBe("string");
      expect(value).toMatch(UUID_V4_PATTERN);
    }
  });

  it("does not contain duplicate module ids", () => {
    const allValues = Object.values(MODULE_MAPS);
    const uniqueValues = new Set(allValues);
    expect(uniqueValues.size).toBe(allValues.length);
  });
});
