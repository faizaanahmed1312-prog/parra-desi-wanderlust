import goaImg from "@/assets/dest-goa.jpg";
import manaliImg from "@/assets/dest-manali.jpg";
import baliImg from "@/assets/dest-bali.jpg";
import rajasthanImg from "@/assets/dest-rajasthan.jpg";
import keralaImg from "@/assets/dest-kerala.jpg";

export const tripImages: Record<string, string> = {
  goa: goaImg,
  manali: manaliImg,
  bali: baliImg,
  rajasthan: rajasthanImg,
  kerala: keralaImg,
};

// Resolve a trip image from explicit URL, slug, or destination name.
export const resolveTripImage = (opts: {
  image_url?: string | null;
  slug?: string | null;
  destination?: string | null;
}): string | undefined => {
  if (opts.image_url) return opts.image_url;
  const keys = [opts.slug, opts.destination]
    .filter(Boolean)
    .map((s) => s!.toLowerCase());
  for (const k of keys) {
    for (const key of Object.keys(tripImages)) {
      if (k.includes(key)) return tripImages[key];
    }
  }
  return undefined;
};
