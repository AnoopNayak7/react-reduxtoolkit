import React from "react";

const MovieCard = ({ data }) => {
//   console.log("card in", data);
  return (
    <div>
      <div className="!border hover:cursor-pointer border-black hover:border-secondary bg-primary bxsdw rounded-xl min-h-[310px]  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
        <div><img className="rounded-t-xl px-2 py-2 w-full h-[250px]" src={data.Poster} /></div>
        <div className="text-white text-sm text-center font-semibold py-2">{data.Title}</div>
        {/* <div className="flex justify-between">
            <div className="text-white">
                {data.Year}
                <div className="text-xs font-semibold -mt-2 text-center">year</div>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default MovieCard;
