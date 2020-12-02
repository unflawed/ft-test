import { errorUtil } from "./_errorUtil";
import axios from "axios";

/**
 * Returns an array of GET request promises for an array of URLs of type String
 * @param {String[]} urls
 * @returns {Promise[]}
 */
export async function requestMultipleUrls(urls: Array<string>) {
  // Check param is of type Array
  if (!urls.map) {
    throw new Error(errorUtil.messages.INVALID_URL);
  }
  const requestQueue = urls.map(async (url) => {
    // Vanilla JS type check for string value
    if (typeof url !== "string") {
      throw new Error(errorUtil.messages.INVALID_URL);
    }
    return await axios.get(url).then((response) => response.data);
  });
  return await Promise.all(requestQueue);
}
