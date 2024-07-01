import Image from "next/image";
import { ReactNode } from "react";
import CustomLink from "./customLink";

export default function FloorPlan(): ReactNode {
  return (
    <section className="relative overflow-scroll w-full h-auto xl:w-fit xl:h-[90%] flex justify-center scrollbar-hide">
      <Image className="w-fit h-full" priority src="/building.webp" alt="平面圖" width={1200} height={674} />
      <CustomLink name={"roof"} position={"left-[0%] top-[0%] landscape:left-[26%] landscape:top-[30%]"} />
      <CustomLink name={"councilroom"} position={"landscape:left-[45%] landscape:top-[31%]"} />
      <CustomLink name={"library"} position={"right-[0%] top-[0%] landscape:right-auto landscape:left-[61%] landscape:top-[31%]"} />
      <CustomLink name={"lobby"} position={"left-[0%] bottom-[0%] landscape:left-[20%] landscape:bottom-[53%]"} />
      <CustomLink name={"corridor"} position={"bottom-[0%] landscape:left-[62%] landscape:bottom-[47%]"} />
      <CustomLink name={"theater"} position={"right-[0%] bottom-[0%] landscape:right-auto landscape:left-[76%] landscape:bottom-[60%]"} />
    </section>
  );
}
