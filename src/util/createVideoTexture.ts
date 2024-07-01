import { CreatePlane, Scene, StandardMaterial, VideoTexture, Vector3, ActionManager, ExecuteCodeAction } from "@babylonjs/core";

export const createVideoTexture = (scene: Scene) => {
  const videoPlane = CreatePlane("plane", { size: 1, width: 116, height: 72 }, scene);
  const material = new StandardMaterial("videoMaterial", scene);
  const videoTexture = new VideoTexture("videoTexture", "/video/sky.mp4", scene);
  material.diffuseTexture = videoTexture;
  videoPlane.material = material;

  videoPlane.position = new Vector3(110, 25, -50);
  videoPlane.rotation = new Vector3(0, Math.PI / 2 + 0.35, 0);

  const actionManager = new ActionManager(scene);
  videoPlane.actionManager = actionManager;
  videoPlane.actionManager.registerAction(
    new ExecuteCodeAction(ActionManager.OnPickTrigger, () => {
      if (videoTexture.video.paused) {
        videoTexture.video.play();
      } else {
        videoTexture.video.pause();
      }
    })
  );

  return { videoPlane, videoTexture };
};
