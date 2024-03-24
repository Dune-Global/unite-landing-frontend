import Image from "next/image";
import LandingContainer from "../LandingContainer";
import footerlinks from "@/data/footer/links";
import Link from "next/link";
import { Divide } from "lucide-react";
import { Year } from "@/helpers/getDate";

export default function Footer() {
  return (
    <div className="bg-ugray-100 pt-10">
      <LandingContainer>
        <div className="divide-y-2 divide-ugray-200 ">
          <div className="flex sm:flex-row flex-col justify-between ">
            <div className="flex items-center pb-5 justify-center">
              <Image
                src={"/logo/logo.png"}
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="flex gap-5 items-center sm:flex-row flex-col sm:pb-0 pb-5">
              {footerlinks.map((item) => (
                <div key={item.id} className="">
                  <Link className="flex" href={item.link}>
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center py-5">
            &copy;{Year} Unite. All Rights Reserved.
          </div>
        </div>
      </LandingContainer>
    </div>
  );
}
