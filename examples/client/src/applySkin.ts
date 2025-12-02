/**
 * Apply Skin to Voxelize Character
 *
 * Takes extracted skin textures and applies them to a Voxelize character
 */

import * as VOXELIZE from "@voxelize/core";
import { SkinTextures } from "./skinLoader";

/**
 * Apply a complete skin to a Voxelize character
 *
 * @param character The Voxelize character to apply the skin to
 * @param skinTextures The extracted skin textures
 */
export function applySkin(
  character: VOXELIZE.Character,
  skinTextures: SkinTextures
): void {
  // Apply head textures
  character.head.paint("front", (ctx, canvas) => {
    ctx.drawImage(skinTextures.head.front, 0, 0, canvas.width, canvas.height);
  });
  character.head.paint("back", (ctx, canvas) => {
    ctx.drawImage(skinTextures.head.back, 0, 0, canvas.width, canvas.height);
  });
  character.head.paint("left", (ctx, canvas) => {
    ctx.drawImage(skinTextures.head.left, 0, 0, canvas.width, canvas.height);
  });
  character.head.paint("right", (ctx, canvas) => {
    ctx.drawImage(skinTextures.head.right, 0, 0, canvas.width, canvas.height);
  });
  character.head.paint("top", (ctx, canvas) => {
    ctx.drawImage(skinTextures.head.top, 0, 0, canvas.width, canvas.height);
  });
  character.head.paint("bottom", (ctx, canvas) => {
    ctx.drawImage(skinTextures.head.bottom, 0, 0, canvas.width, canvas.height);
  });

  // Apply body textures
  character.body.paint("front", (ctx, canvas) => {
    ctx.drawImage(skinTextures.body.front, 0, 0, canvas.width, canvas.height);
  });
  character.body.paint("back", (ctx, canvas) => {
    ctx.drawImage(skinTextures.body.back, 0, 0, canvas.width, canvas.height);
  });
  character.body.paint("left", (ctx, canvas) => {
    ctx.drawImage(skinTextures.body.left, 0, 0, canvas.width, canvas.height);
  });
  character.body.paint("right", (ctx, canvas) => {
    ctx.drawImage(skinTextures.body.right, 0, 0, canvas.width, canvas.height);
  });
  character.body.paint("top", (ctx, canvas) => {
    ctx.drawImage(skinTextures.body.top, 0, 0, canvas.width, canvas.height);
  });
  character.body.paint("bottom", (ctx, canvas) => {
    ctx.drawImage(skinTextures.body.bottom, 0, 0, canvas.width, canvas.height);
  });

  // Apply right arm textures
  character.rightArm.paint("front", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightArm.front, 0, 0, canvas.width, canvas.height);
  });
  character.rightArm.paint("back", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightArm.back, 0, 0, canvas.width, canvas.height);
  });
  character.rightArm.paint("left", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightArm.left, 0, 0, canvas.width, canvas.height);
  });
  character.rightArm.paint("right", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightArm.right, 0, 0, canvas.width, canvas.height);
  });
  character.rightArm.paint("top", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightArm.top, 0, 0, canvas.width, canvas.height);
  });
  character.rightArm.paint("bottom", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightArm.bottom, 0, 0, canvas.width, canvas.height);
  });

  // Apply left arm textures
  character.leftArm.paint("front", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftArm.front, 0, 0, canvas.width, canvas.height);
  });
  character.leftArm.paint("back", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftArm.back, 0, 0, canvas.width, canvas.height);
  });
  character.leftArm.paint("left", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftArm.left, 0, 0, canvas.width, canvas.height);
  });
  character.leftArm.paint("right", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftArm.right, 0, 0, canvas.width, canvas.height);
  });
  character.leftArm.paint("top", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftArm.top, 0, 0, canvas.width, canvas.height);
  });
  character.leftArm.paint("bottom", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftArm.bottom, 0, 0, canvas.width, canvas.height);
  });

  // Apply right leg textures
  character.rightLeg.paint("front", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightLeg.front, 0, 0, canvas.width, canvas.height);
  });
  character.rightLeg.paint("back", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightLeg.back, 0, 0, canvas.width, canvas.height);
  });
  character.rightLeg.paint("left", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightLeg.left, 0, 0, canvas.width, canvas.height);
  });
  character.rightLeg.paint("right", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightLeg.right, 0, 0, canvas.width, canvas.height);
  });
  character.rightLeg.paint("top", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightLeg.top, 0, 0, canvas.width, canvas.height);
  });
  character.rightLeg.paint("bottom", (ctx, canvas) => {
    ctx.drawImage(skinTextures.rightLeg.bottom, 0, 0, canvas.width, canvas.height);
  });

  // Apply left leg textures
  character.leftLeg.paint("front", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftLeg.front, 0, 0, canvas.width, canvas.height);
  });
  character.leftLeg.paint("back", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftLeg.back, 0, 0, canvas.width, canvas.height);
  });
  character.leftLeg.paint("left", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftLeg.left, 0, 0, canvas.width, canvas.height);
  });
  character.leftLeg.paint("right", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftLeg.right, 0, 0, canvas.width, canvas.height);
  });
  character.leftLeg.paint("top", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftLeg.top, 0, 0, canvas.width, canvas.height);
  });
  character.leftLeg.paint("bottom", (ctx, canvas) => {
    ctx.drawImage(skinTextures.leftLeg.bottom, 0, 0, canvas.width, canvas.height);
  });

  console.log("Skin applied to character successfully");
}
