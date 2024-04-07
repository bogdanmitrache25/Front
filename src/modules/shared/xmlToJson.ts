import X2JS from "x2js";

export const xmlToJson = (xml: string) => {
  const result = new X2JS().xml2js(xml);
  return flattenNestedObject(removeUnderscoreRecursive(result));
};

function removeUnderscoreRecursive(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const newObj: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = key.startsWith("_") ? key.replace(/^_+/, "") : key;

      newObj[newKey] =
        typeof obj[key] === "object"
          ? removeUnderscoreRecursive(obj[key])
          : obj[key];
    }
  }

  return newObj;
}

function flattenNestedObject(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const childKeys = Object.keys(obj[key]);
      if (childKeys.length === 1 && childKeys[0] === key) {
        result[key] = obj[key][key];
      } else {
        result[key] = flattenNestedObject(obj[key]);
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
