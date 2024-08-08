import FloatLink from "@/components/float-link";
import Image from "next/image";

export default function Home() {
  return (
   <div className="h-full">
      <div className="grid grid-cols-2 border border-white">
        <div>

          
        </div>
        <div className="bg-tertiare">
          <Image src="/huro.png" alt="la photo du boss" width={"100"} height={"100"} className="w-full"/>
        </div>
      </div>



   </div>
  );
}
