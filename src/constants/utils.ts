export enum ImageState {
   LOADING = "loading",
   LOADED = "loaded",
   ERROR = "error",
}

export const MAX_IMAGE_LOAD_RETRIES = 2;

export const currentYear: number = new Date().getFullYear();
