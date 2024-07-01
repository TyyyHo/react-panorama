import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, DeviceOrientationCamera } from "@babylonjs/core";

export const createScene = (canvas: HTMLCanvasElement, isPermissionAccess: boolean) => {
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  //camera
  if (isPermissionAccess) {
    const camera = new DeviceOrientationCamera("camera", new Vector3(0, 1, 0), scene);
    camera.attachControl(canvas, true);
    scene.activeCamera = camera;
  } else {
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 5, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.radius = 50;
    // limit zoom
    camera.lowerRadiusLimit = 15;
    camera.upperRadiusLimit = 175;
  }

  //light
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  //scene loop
  engine.runRenderLoop(() => {
    scene.render();
  });

  //resize
  window.addEventListener("resize", function () {
    engine.resize();
  });

  return scene;
};
