import Badge from "./components/Badge";
import LoginForm from "./components/LoginForm";
import {
  ChatBubbleLeftRightIcon,
  DocumentDuplicateIcon,
  ServerStackIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

function App() {
  // const badges = [
  //   {
  //     id: 1,
  //     icon: (
  //       <UsersIcon
  //         stroke="white"
  //         fill="none"
  //         className="size-10"
  //         strokeWidth={1.5}
  //       />
  //     ),
  //     title: "Total Member",
  //     description: "23, 768",
  //     iconContainerClassName: "bg-emerald-500",
  //   },
  //   {
  //     id: 2,
  //     icon: (
  //       <DocumentDuplicateIcon stroke="white" fill="none" className="size-10" />
  //     ),
  //     title: "Total Post",
  //     description: "39, 265",
  //     iconContainerClassName: "bg-red-300",
  //   },
  //   {
  //     id: 3,
  //     icon: (
  //       <ChatBubbleLeftRightIcon
  //         stroke="white"
  //         fill="none"
  //         className="size-10"
  //       />
  //     ),
  //     title: "Total Comment",
  //     description: "142, 334",
  //     iconContainerClassName: "bg-amber-400",
  //   },
  //   {
  //     id: 4,
  //     icon: <ServerStackIcon stroke="white" fill="none" className="size-10" />,
  //     title: "Server Load",
  //     description: "34.12%",
  //     iconContainerClassName: "bg-blue-400",
  //   },
  // ];

  return (
    <>
      {/* lecture 4 */}
      {/* <div>
        <h1 className="text-red-500 font-bold text-4xl">Flags</h1>
        <div className="flex gap-14 flex-wrap">
          <div className="h-52 w-72 flex flex-row items-center mt-5 border">
            <div className="flex-1 bg-[#002654] h-full" />
            <div className="flex-1 bg-white h-full" />
            <div className="flex-1 bg-[#CD1227] h-full" />
          </div>
          <div className="h-52 w-72 flex flex-col mt-5 border border-black">
            <div className="flex-1 bg-[#002654] " />
            <div className="flex-1 bg-white " />
            <div className="flex-2 flex bg-[#CD1227] items-center justify-center">
              <div className="h-3/4 aspect-square rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#002654]" />
          </div>

          <div className="h-52 w-72 flex items-center justify-center mt-5 border border-black">
            <div className="bg-[#CD1227] h-2/4 aspect-square rounded-full" />
          </div>

          <div className="h-52 w-96 flex mt-5 border">
            <div className="flex-1 bg-[#CD1227] h-full" />
            <div className="flex flex-col flex-3">
              <div className="flex-1 bg-[#009E49] h-full" />
              <div className="flex-1 bg-white h-full" />
              <div className="flex-1 bg-black h-full" />
            </div>
          </div>

          <div className="h-52 w-96 flex flex-col mt-5 border relative">
            <div className="absolute border-t-[104px] border-b-[104px] border-t-transparent border-b-transparent  border-l-[200px] border-l-[#CE1126]"></div>
            <div className="flex-1 bg-[#009E49] h-full" />
            <div className="flex-1 bg-white h-full" />
            <div className="flex-1 bg-black h-full" />
          </div>
        </div>
      </div> */}

      {/* lecture 5 */}
      {/* <div>
        <LoginForm />
      </div> */}

      {/* lecture 6*/}
      {/* <div className="flex flex-row items-center gap-8 p-8 shadow">
        {badges.map((badge, index) => (
          <Badge
            key={index}
            icon={badge.icon}
            title={badge.title}
            description={badge.description}
            iconContainerClassName={badge.iconContainerClassName}
          />
        ))}
      </div>
      <div className="p-14">
        <p className="text-3xl font-bold">Faith</p>
        <div className="flex flex-row items-center gap-6">
          <div className="shadow-lg rounded-3xl px-6 py-9 mt-32">
            <div className=" drop-shadow-2xl text-shadow-2xl mx-auto -mt-44">
              <img src={"src/assets/quraan.png"} className="size-64" />
            </div>
            <p className="text-2xl font-semibold mt-16">QURAN RECITATION</p>
          </div>
          <div className="shadow-lg rounded-3xl px-6 py-9 mt-32">
            <div className=" mx-auto -mt-44">
              <img src={"src/assets/prayer.png"} className="size-64" />
            </div>
            <p className="text-2xl font-semibold mt-16">QURAN RECITATION</p>
          </div>
          <div className="shadow-lg rounded-3xl px-6 py-9 mt-32">
            <div className="drop-shadow-2xl mx-auto -mt-44">
              <img src={"src/assets/tasbeeh.png"} className="size-64" />
            </div>
            <p className="text-2xl font-semibold mt-16">QURAN RECITATION</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
