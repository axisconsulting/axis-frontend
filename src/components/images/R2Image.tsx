import React from "react";
import { assetUrl } from "$constants/image-utils/assets";

type R2ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
   /** Path inside R2 bucket, e.g. "clients/acme.svg" */
   path: string;

   /**
    * Optional fallback:
    * - R2 path: "placeholders/image_not_found.jpg"
    * - Absolute URL
    * - Public asset: "/image_not_found.jpg"
    */
   fallbackPath?: string;
};

/**
 * Resolve any image reference into a usable src string.
 */
function resolveSrc(input: string): string {
   if (input.startsWith("http")) return input;
   if (input.startsWith("/")) return input;
   return assetUrl(input);
}

export const R2Image = React.forwardRef<HTMLImageElement, R2ImageProps>(function R2Image(
   {
      path,
      fallbackPath = "/image_not_found.jpg",
      loading = "lazy",
      decoding = "async",
      ...imgProps
   },
   ref
) {
   const initialSrc = React.useMemo(() => {
      return resolveSrc(path);
   }, [path]);

   const fallbackSrc = React.useMemo(() => {
      return resolveSrc(fallbackPath);
   }, [fallbackPath]);

   const [src, setSrc] = React.useState(initialSrc);

   React.useEffect(() => {
      setSrc(initialSrc);
   }, [initialSrc]);

   const handleError = React.useCallback(() => {
      setSrc(fallbackSrc);
   }, [fallbackSrc]);

   return (
      <img
         ref={ref}
         src={src}
         loading={loading}
         decoding={decoding}
         onError={handleError}
         {...imgProps}
      />
   );
});
