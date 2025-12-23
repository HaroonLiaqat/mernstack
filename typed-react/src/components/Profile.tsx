import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import type { User } from "../App";

type ProfileProps = {
  user: User;
  description?: string;
};

const Profile = ({ user, description = "hi" }: ProfileProps) => {
  return (
    <div className="flex items-center rounded-4xl border border-gray-300 shadow-xl px-10 py-8">
      <div className="w-32 h-32 rounded-full bg-red-300 relative">
        <img
          src={user?.avatar}
          alt="profile"
          className="h-full w-full rounded-full overflow-hidden object-cover"
        />
        <CheckBadgeIcon
          fill="blue"
          stroke="white"
          strokeWidth={1.5}
          className="w-12 h-12 absolute bottom-1 -right-3"
        />
      </div>
      <div className="ml-8 mr-10">
        <p className="text-3xl font-bold">{user?.name}</p>
        <p className="text-xl text-neutral-500 mt-2">
          {user?.description?.toUpperCase() ?? "Unknown Role"}
        </p>
        <p className="text-lg text-red-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Profile;
