import FloorPlan from "@/components/floorPlan";

export default function Home() {
  return (
    <>
      <FloorPlan />
      <h3 className="absolute top-12 landscape:hidden text-lg md:text-3xl font-bold">行動設備建議轉為橫向觀看</h3>
    </>
  );
}
