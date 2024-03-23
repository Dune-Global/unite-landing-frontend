import Image from "next/image";
import { Button } from "../Button";
import LandingContainer from "../LandingContainer";

export default function Navbar() {
  return (
    <LandingContainer>
      <div className="py-">
        <div className="flex flex-row sm:justify-between gap-20 ">
          <div className="flex">
            <Image src="/logo/logo.png" alt="logo" width={100} height={100} />
          </div>
          <div className="flex flex-row gap-4  items-center sm:px-24">
            <div className="flex ">
              <Button className="p-5">Doctor</Button>
            </div>
            <div className="flex">
              <Button variant={"outline"} className="p-5">
                Patient
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LandingContainer>
  );
}
