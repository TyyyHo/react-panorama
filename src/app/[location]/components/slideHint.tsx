import { ReactNode } from "react";
import Image from "next/image";
import { useHintStore } from "@/app/store/hintStore";

export default function SlideHint(): ReactNode {
  const { isHintTrigger, setHintTrigger } = useHintStore();
  const isPointerHide = isHintTrigger ? "z-[-1] opacity-0" : "z-[-1] xl:z-[1000] xl:opacity-1";
  return (
    <button onClick={hideHint}>
      <Image
        className={`${isPointerHide} absolute bottom-[20dvh] portrait:bottom-[44dvh] w-[6dvw] xl:w-[5dvw] h-auto transition-all delay-1000 animate-hint`}
        src="/icon/pointer.svg"
        alt="請滑動！"
        width={30}
        height={30}
      />
    </button>
  );

  function hideHint(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setHintTrigger(true);
  }
}
