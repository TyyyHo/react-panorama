import { ReactNode } from "react";
import Image from "next/image";
import { useAccessStore } from "@/app/store/accessStore";

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}

export default function RequestPermission(): ReactNode {
  const { isPermissionAccess, setIsPermissionAccess } = useAccessStore();
  function askPermission(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    if (isPermissionAccess) return;
    const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;

    if (typeof requestPermission === "function") {
      requestPermission()
        .then((response) => {
          if (response === "granted") {
            setIsPermissionAccess(true);
          } else {
            alert("已停用環景功能，請完全關閉瀏覽器再開啟來重置設定");
          }
        })
        .catch((error) => {});
    } else {
      alert("限行動裝置使用");
    }
  }
  return (
    <button onClick={askPermission}>
      <Image
        className="absolute right-4 bottom-[3dvh] portrait:right-[40dvw] portrait:bottom-[20dvw] portrait:w-[20dvw] w-[6dvw] xl:hidden "
        src="/icon/360.svg"
        alt="開啟環景"
        width={30}
        height={30}
      />
    </button>
  );
}
