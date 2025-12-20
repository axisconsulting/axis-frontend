export enum ImageState {
   LOADING = "LOADING",
   LOADED = "LOADED",
   ERROR = "ERROR",
}

export const MAX_IMAGE_LOAD_RETRIES = 2;

export const currentYear: number = new Date().getFullYear();

export const TEMP_URL = "https://fakeimage.com/400x300.png";
