// export default  Shimmer;
const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center " data-testid="shimmer">
        <div className="mt-4 font-xl flex-wrap"> If website takes time to load, then Download Chrome extension <span className="text-yellow-800 font-bold border border-yellow-950 p-2 rounded-full hover:bg-yellow-500"><a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">Cors</a></span> and enable it, <a href="https://www.youtube.com/watch?v=KruSUqLdxQA" className="text-yellow-800 font-bold border border-yellow-950 p-2 rounded-full hover:bg-yellow-500">Demo</a> to use cors</div>
        <div className="flex flex-wrap justify-center">
          {Array(10)
            .fill([])
            .map((e, index) => (
              <div key={index} className="shadow-lg m-3 p-3 w-72 h-72">
                <div className="w-full h-1/2 border rounded-sm bg-64 custom-linear-gradient animate-shimmer"></div>
                <div
                  className="w-[90%] h-[10%] mt-3 border rounded-sm
                 bg-64 custom-linear-gradient animate-shimmer "
                ></div>
                <div className="w-[70%] h-[7%]  mt-3 border rounded-sm bg-64 custom-linear-gradient animate-shimmer"></div>
                <div className="w-[70%] h-[7%]  mt-3 border rounded-sm bg-64 custom-linear-gradient animate-shimmer"></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Shimmer;
