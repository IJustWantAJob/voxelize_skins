/**
 * Skin Loader
 *
 * Extracts pixel regions from a 64x64 skin PNG and creates
 * individual textures for each face of each body part.
 */

/**
 * UV coordinates for a skin region
 */
interface UVRegion {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * All UV regions for a body part (6 faces)
 */
interface BodyPartUVs {
  front: UVRegion;
  back: UVRegion;
  left: UVRegion;
  right: UVRegion;
  top: UVRegion;
  bottom: UVRegion;
}

/**
 * Skin UV map for all body parts
 */
const SKIN_UV_MAP = {
  head: {
    front: { x: 8, y: 8, width: 8, height: 8 },
    back: { x: 24, y: 8, width: 8, height: 8 },
    left: { x: 0, y: 8, width: 8, height: 8 },
    right: { x: 16, y: 8, width: 8, height: 8 },
    top: { x: 8, y: 0, width: 8, height: 8 },
    bottom: { x: 16, y: 0, width: 8, height: 8 },
  },
  body: {
    front: { x: 20, y: 20, width: 8, height: 12 },
    back: { x: 32, y: 20, width: 8, height: 12 },
    left: { x: 16, y: 20, width: 4, height: 12 },
    right: { x: 28, y: 20, width: 4, height: 12 },
    top: { x: 20, y: 16, width: 8, height: 4 },
    bottom: { x: 28, y: 16, width: 8, height: 4 },
  },
  rightArm: {
    front: { x: 44, y: 20, width: 4, height: 12 },
    back: { x: 52, y: 20, width: 4, height: 12 },
    left: { x: 40, y: 20, width: 4, height: 12 },
    right: { x: 48, y: 20, width: 4, height: 12 },
    top: { x: 44, y: 16, width: 4, height: 4 },
    bottom: { x: 48, y: 16, width: 4, height: 4 },
  },
  leftArm: {
    front: { x: 36, y: 52, width: 4, height: 12 },
    back: { x: 44, y: 52, width: 4, height: 12 },
    left: { x: 32, y: 52, width: 4, height: 12 },
    right: { x: 40, y: 52, width: 4, height: 12 },
    top: { x: 36, y: 48, width: 4, height: 4 },
    bottom: { x: 40, y: 48, width: 4, height: 4 },
  },
  rightLeg: {
    front: { x: 4, y: 20, width: 4, height: 12 },
    back: { x: 12, y: 20, width: 4, height: 12 },
    left: { x: 0, y: 20, width: 4, height: 12 },
    right: { x: 8, y: 20, width: 4, height: 12 },
    top: { x: 4, y: 16, width: 4, height: 4 },
    bottom: { x: 8, y: 16, width: 4, height: 4 },
  },
  leftLeg: {
    front: { x: 20, y: 52, width: 4, height: 12 },
    back: { x: 28, y: 52, width: 4, height: 12 },
    left: { x: 16, y: 52, width: 4, height: 12 },
    right: { x: 24, y: 52, width: 4, height: 12 },
    top: { x: 20, y: 48, width: 4, height: 4 },
    bottom: { x: 24, y: 48, width: 4, height: 4 },
  },
};

/**
 * Extracted textures for a body part
 */
export interface BodyPartTextures {
  front: HTMLCanvasElement;
  back: HTMLCanvasElement;
  left: HTMLCanvasElement;
  right: HTMLCanvasElement;
  top: HTMLCanvasElement;
  bottom: HTMLCanvasElement;
}

/**
 * All extracted textures from a skin
 */
export interface SkinTextures {
  head: BodyPartTextures;
  body: BodyPartTextures;
  rightArm: BodyPartTextures;
  leftArm: BodyPartTextures;
  rightLeg: BodyPartTextures;
  leftLeg: BodyPartTextures;
}

/**
 * Load a skin and extract all UV regions
 *
 * @param skinUrl URL or path to the 64x64 skin PNG
 * @returns Promise resolving to all extracted textures
 */
export async function loadSkin(
  skinUrl: string
): Promise<SkinTextures> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";

    image.onload = () => {
      // Verify it's 64x64
      if (image.width !== 64 || image.height !== 64) {
        reject(
          new Error(
            `Invalid skin dimensions: ${image.width}x${image.height}. Expected 64x64.`
          )
        );
        return;
      }

      try {
        const textures: SkinTextures = {
          head: extractBodyPartTextures(image, SKIN_UV_MAP.head),
          body: extractBodyPartTextures(image, SKIN_UV_MAP.body),
          rightArm: extractBodyPartTextures(image, SKIN_UV_MAP.rightArm),
          leftArm: extractBodyPartTextures(image, SKIN_UV_MAP.leftArm),
          rightLeg: extractBodyPartTextures(image, SKIN_UV_MAP.rightLeg),
          leftLeg: extractBodyPartTextures(image, SKIN_UV_MAP.leftLeg),
        };

        resolve(textures);
      } catch (error) {
        reject(error);
      }
    };

    image.onerror = () => {
      reject(new Error(`Failed to load skin from: ${skinUrl}`));
    };

    image.src = skinUrl;
  });
}

/**
 * Extract all 6 face textures for a body part
 */
function extractBodyPartTextures(
  skinImage: HTMLImageElement,
  uvMap: BodyPartUVs
): BodyPartTextures {
  return {
    front: extractUVRegion(skinImage, uvMap.front),
    back: extractUVRegion(skinImage, uvMap.back),
    left: extractUVRegion(skinImage, uvMap.left),
    right: extractUVRegion(skinImage, uvMap.right),
    top: extractUVRegion(skinImage, uvMap.top),
    bottom: extractUVRegion(skinImage, uvMap.bottom),
  };
}

/**
 * Extract a specific UV region from the skin image
 */
function extractUVRegion(
  skinImage: HTMLImageElement,
  region: UVRegion
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = region.width;
  canvas.height = region.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get 2D context for canvas");
  }

  // Disable image smoothing for pixel-perfect rendering
  ctx.imageSmoothingEnabled = false;

  // Extract the region from the source image
  ctx.drawImage(
    skinImage,
    region.x,
    region.y,
    region.width,
    region.height,
    0,
    0,
    region.width,
    region.height
  );

  return canvas;
}

/**
 * Check if left arm/leg regions are transparent (need mirroring from right side)
 * This needs to be (more thoroughly) validated for different skins to ensure it works correctly
 */
export function shouldMirrorLeftSide(
  skinImage: HTMLImageElement,
  side: "arm" | "leg"
): boolean {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext("2d");
  if (!ctx) return false;

  ctx.drawImage(skinImage, 0, 0);

  // Check a sample pixel in the left arm/leg region
  const checkRegion = side === "arm"
    ? { x: 36, y: 52 } // Left arm front sample pixel
    : { x: 20, y: 52 }; // Left leg front sample pixel

  const imageData = ctx.getImageData(checkRegion.x, checkRegion.y, 1, 1);
  const alpha = imageData.data[3];

  // If alpha is 0, it's transparent and needs mirroring
  return alpha === 0;
}
