// src/constants/assets.ts
export const BASE_CDN_URL = "https://assets.sfuaxisconsulting.com";
const BASE = BASE_CDN_URL.replace(/\/+$/, ""); // trim trailing slash

/**
 * Generates a full URL for an asset based on the provided path.
 * Ensures there are no duplicate slashes in the final URL.
 * @param path - The relative path to the asset.
 *
 * @example
 *  assetUrl("logos/foo.png") -> `https://assets.../logos/foo.png`
 */
export function assetUrl(path: string) {
   const cleanPath = path.replace(/^\/+/, ""); // trim leading slash
   return `${BASE}/${cleanPath}`;
}
