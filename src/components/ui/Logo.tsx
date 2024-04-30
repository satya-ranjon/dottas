import { lusitana } from "@/components/ui/font";
import { DotChartOutlined } from "@ant-design/icons";

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <DotChartOutlined className="text-5xl rotate-[15deg]" />
      <p className="text-[44px]">dotWork</p>
    </div>
  );
}
