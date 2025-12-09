import Header from "@/components/common/Header";

import { ProfileDetails, ProfileInformation } from "@/components/pages/profile";

export default function ProfilePage() {
  return (
    <div className="flex min-h-dvh w-full flex-col gap-y-8">
      <Header title="Profile" />
      <div className="mt-[47px] flex w-full flex-col gap-y-16 px-[133px]">
        <ProfileInformation />
        <ProfileDetails />
      </div>
    </div>
  );
}
