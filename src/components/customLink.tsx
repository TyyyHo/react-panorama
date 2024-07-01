import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { Location } from "@/app/type";

export default function CustomLink({ name, position }: { name: Location; position: string }): ReactNode {
  let text: string = "roof";
  switch (name) {
    case "roof":
      text = "屋頂";
      break;
    case "councilroom":
      text = "會議室";
      break;
    case "library":
      text = "圖書館";
      break;
    case "lobby":
      text = "大廳";
      break;
    case "corridor":
      text = "穿廊";
      break;
    case "theater":
      text = "劇院";
      break;
  }

  return (
    <Link className={`group/link absolute ${position} bg-gray-200 rounded-full xl:p-1 border-2 border-slate-500`} href={`/${name}`}>
      <Image className="inline w-6 h-3 xl:h-6" src={`/icon/${name}.svg`} alt={name} width={30} height={30} />
      <p className="inline xl:hidden group-hover/link:inline mr-2 xl:ml-1 text-sm">{text}</p>
    </Link>
  );
}
