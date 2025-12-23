import Profile from "./components/Profile";

export type User = {
  name: string;
  description?: string;
  avatar: string;
};

function App() {
  const user1: User = {
    name: "Talen Dias",
    description: "UX Designer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuhYpkT0AmlJQJPQUeWcESNqNT4dd4E48CQ&s",
  };
  const user2: User = {
    name: "John Doe",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuhYpkT0AmlJQJPQUeWcESNqNT4dd4E48CQ&s",
  };
  const user3: User = {
    name: "Jane Doe",
    description: "",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuhYpkT0AmlJQJPQUeWcESNqNT4dd4E48CQ&s",
  };
  return (
    <>
      {/* lecture 7 */}
      <h1 className="text-red-500 font-bold text-4xl">Components</h1>
      <div className="flex md:flex-row flex-col my-6 px-6 gap-6">
        <Profile user={user1} description="Hello 1" />
        <Profile user={user2} description="Hello 2" />
        <Profile user={user3} />
      </div>
    </>
  );
}

export default App;
