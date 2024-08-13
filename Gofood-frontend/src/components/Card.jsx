function Card({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-5 my-3 p-3 hover:scale-105 duration-200">
        <div className="card  w-92 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src="/Images/poetry.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">Free</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-400 duration-200 hover:text-white ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
