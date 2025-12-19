export default function AuthDivider() {
  return (
    <div className="relative z-1 flex w-full items-center gap-x-5">
      <div className="h-px w-full bg-white/10" />
      <span className="font-inter text-grey-light text-base font-normal">
        or
      </span>
      <div className="h-px w-full bg-white/10" />
    </div>
  );
}
