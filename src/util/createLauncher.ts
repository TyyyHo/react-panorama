import { Scene, Vector3, Color4, CreateCylinder } from "@babylonjs/core";

const black = new Color4(0, 0, 0, 1);
const silver = new Color4(250, 250, 250, 1);
export const createLauncher = (scene: Scene | null) => {
  const triangle = CreateCylinder("cylinder", { tessellation: 3, faceColors: [black, black, black], height: 3, diameter: 30 }, scene);
  triangle.name = "videoLauncher";
  triangle.position = new Vector3(129, 30, -72);
  triangle.rotation = new Vector3(Math.PI / 2, Math.PI / 2 + 0.4, 0);

  return triangle;
};
