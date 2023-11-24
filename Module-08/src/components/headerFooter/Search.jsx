import searchImg from "../../assets/search.svg";

export default function Search() {
  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
      <img className="inline h-4 cursor-pointer" src={searchImg} alt="Search" />
    </div>
  );
}
