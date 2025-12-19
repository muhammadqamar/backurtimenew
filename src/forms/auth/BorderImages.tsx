import React, { Fragment } from "react";
import Image from "next/image";

const BorderImages = ({
  signIn,
  password,
}: {
  signIn?: boolean;
  password?: boolean;
}) => {
  return (
    <Fragment>
      {/* background color */}
      <div className="absolute top-1/2 left-1/2 h-[calc(100%-10px)] w-[calc(100%-10px)] -translate-1/2 rounded-[30px] bg-[linear-gradient(97deg,rgba(144,210,246,0.10)_5.72%,rgba(0,159,170,0.10)_38.32%,rgba(0,205,189,0.10)_84.96%,rgba(194,232,253,0.10)_110.09%)] bg-cover bg-center" />
      {signIn ? (
        <Fragment>
          {/* top border */}
          <Image
            src={"/pages/auth/sign-in/s-in-border-top.svg"}
            alt="top border"
            width={200}
            height={22}
            className="absolute top-0 left-1/2 h-auto! w-[calc(100%-32px)]! -translate-x-1/2 object-cover object-top sm:w-[calc(100%-54px)]!"
            priority
          />

          {/* right border */}
          <Image
            src={"/pages/auth/sign-in/s-in-border-right.svg"}
            alt="right border"
            width={34}
            height={200}
            className="absolute top-0 right-0 h-full w-auto! object-cover object-right"
            priority
          />

          {/* bottom border */}
          <Image
            src={"/pages/auth/sign-in/s-in-border-bottom.svg"}
            alt="bottom border"
            width={200}
            height={19}
            className="absolute bottom-0 left-1/2 h-auto! w-[calc(100%-32px)]! -translate-x-1/2 object-cover object-bottom sm:w-[calc(100%-54px)]!"
            priority
          />

          {/* left border */}
          <Image
            src={"/pages/auth/sign-in/s-in-border-left.svg"}
            alt="left border"
            width={34}
            height={200}
            className="absolute top-0 left-0 h-full w-auto! object-cover object-left"
            priority
          />
        </Fragment>
      ) : password ? (
        <Fragment>
          {/* top border */}
          <Image
            src={"/pages/auth/password/pass-border-top.svg"}
            alt="top border"
            width={200}
            height={22}
            className="absolute top-0 left-1/2 h-auto! w-[calc(100%-30px)]! -translate-x-1/2 object-cover object-top sm:w-[calc(100%-50px)]!"
            priority
          />

          {/* right border */}
          <Image
            src={"/pages/auth/password/pass-border-right.svg"}
            alt="right border"
            width={34}
            height={200}
            className="absolute top-0 right-0 h-full w-auto! object-cover object-right"
            priority
          />

          {/* bottom border */}
          <Image
            src={"/pages/auth/password/pass-border-bottom.svg"}
            alt="bottom border"
            width={200}
            height={19}
            className="absolute bottom-0 left-1/2 h-auto! w-[calc(100%-30px)]! -translate-x-1/2 object-cover object-bottom sm:w-[calc(100%-50px)]!"
            priority
          />

          {/* left border */}
          <Image
            src={"/pages/auth/password/pass-border-left.svg"}
            alt="left border"
            width={34}
            height={200}
            className="absolute top-0 left-0 h-full w-auto! object-cover object-left"
            priority
          />
        </Fragment>
      ) : (
        <Fragment>
          {/* top border */}
          <Image
            src={"/pages/auth/top-border.svg"}
            alt="top border"
            width={200}
            height={19}
            className="xsm:block! absolute top-0 left-1/2 hidden! h-[17px] min-h-4! w-[calc(100%-54px)]! -translate-x-1/2 object-cover object-top sm:h-auto!"
            priority
          />
          <Image
            src={"/pages/auth/border-top-mobile.svg"}
            alt="top border"
            width={200}
            height={19}
            className="xsm:hidden! absolute top-0 left-1/2 block! h-[17px] min-h-4! w-[calc(100%-54px)]! -translate-x-1/2 object-cover object-top sm:h-auto!"
            priority
          />
          {/* right border */}
          <Image
            src={"/pages/auth/right-border.svg"}
            alt="right border"
            width={34}
            height={200}
            className="absolute top-0 right-0 hidden! h-full w-auto! object-cover object-right sm:block!"
            priority
          />
          <Image
            src={"/pages/auth/border-right-mobile.svg"}
            alt="right border"
            width={34}
            height={200}
            className="absolute top-0 right-0 block! h-full w-auto! object-cover object-right sm:hidden!"
            priority
          />
          {/* bottom border */}
          <Image
            src={"/pages/auth/bottom-border.svg"}
            alt="bottom border"
            width={200}
            height={19}
            className="xsm:block! absolute bottom-0 left-1/2 hidden! h-auto! min-h-[19px]! w-[calc(100%-54px)]! -translate-x-1/2 object-cover object-bottom"
            priority
          />
          <Image
            src={"/pages/auth/border-bottom-mobile.svg"}
            alt="bottom border"
            width={200}
            height={19}
            className="xsm:hidden! absolute bottom-0 left-1/2 block! h-[18px]! min-h-[18px] w-[calc(100%-54px)]! -translate-x-1/2 object-cover object-bottom"
            priority
          />
          {/* left border */}
          <Image
            src={"/pages/auth/left-border.svg"}
            alt="left border"
            width={34}
            height={200}
            className="absolute top-0 left-0 hidden! h-full w-auto! object-cover object-left sm:block!"
            priority
          />
          <Image
            src={"/pages/auth/border-left-mobile.svg"}
            alt="left border"
            width={34}
            height={200}
            className="absolute top-0 left-0 block! h-full w-auto! object-cover object-left sm:hidden!"
            priority
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default BorderImages;
