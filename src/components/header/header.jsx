
import { headerListItems as listItems } from "../../data/data";
import { Navi } from "../Navi/Navi";

export const Header = () => {
  return (
    <header className="h-24 bg-white flex flex-col items-center sm:flex-row sm:justify-between">
      <Navi listItems={listItems} />
    </header>
  );
};
