import Section from "./Section";
import Article from "./Article";
import Aside from "./Aside";

const PageBody = () => {
  return (
    <div className="flex flex-1 flex-row bg-red-50">
      <div className="flex-2">
        <Section />
        <Article />
      </div>
      <Aside />
    </div>
  );
};

export default PageBody;
