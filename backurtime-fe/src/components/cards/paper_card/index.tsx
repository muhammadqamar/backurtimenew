import Image from "next/image";
const PaperCard = ({
  image,
  number,
  text,
}: {
  image?: string;
  number?: string | number;
  text?: string;
}) => {
  return (
    <div className="text-black-normal flex min-h-[130px] w-full items-start gap-6 self-stretch bg-[url(/components/Paper.svg)] bg-center bg-no-repeat p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[url(/components/paper-card-bg-icon.svg)] bg-cover bg-center bg-no-repeat p-1">
        <Image
          src={image || "/icons/badge/badge-placeholder.png"}
          alt="badge"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <h4 className="font-cinzel text-black-normal text-2xl leading-[120%]! font-bold tracking-[.24px] uppercase">
          50000
        </h4>
        <p className="font-inter text-primitives-grey_900 text-base leading-[140%]! font-normal">
          totle earning
        </p>
      </div>
    </div>
  );
};

export default PaperCard;
