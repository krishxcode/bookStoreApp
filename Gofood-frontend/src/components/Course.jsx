import { NavLink } from "react-router-dom";
import list from "../../public/list.json";
import Card from "../components/Card";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-28 text-center justify-center items-center ">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here!! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ad quia, id tempora in accusamus ipsa quam porro, hic iure sed ab
            amet nostrum delectus accusantium magni minima ipsum! Fugit sed
            tempore impedit eum, sapiente rem? Fugit, corrupti voluptas?
            Repellendus qui saepe eius dolores atque excepturi magnam eveniet,
            tenetur illo?
          </p>
          <NavLink to="/" className="btn mt-6 px-5 py-2 btn-secondary">
            Back
          </NavLink>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
