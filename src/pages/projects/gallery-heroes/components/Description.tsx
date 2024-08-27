import { Subtitle } from "../../../../components/ui";

export const Description = () => {
  return (
    <div className='flex flex-col gap-7'>
      <Subtitle subtitle='Project Overview' />
      <div className='flex flex-col gap-3 text-lg'>
        <p>
          Welcome to the Heroes Gallery, a dynamic platform where you can
          explore and discover the fascinating world of Marvel and DC
          superheroes. Whether you're searching for specific characters or
          browsing through our extensive collection, the Heroes Gallery offers
          an engaging experience for all fans. Dive into the rich histories,
          unique abilities, and epic stories of your favorite heroes as you
          journey through our curated collection. This project aims to provide a
          comprehensive and immersive resource for anyone interested in the
          iconic figures that define the superhero universe.
        </p>

        {/* <p>
          I took User Interface ideas by visiting different types of websites of
          the same industry and even visited platforms like dribbble to get
          inspiration for building a good User Interface.
        </p> */}
        <p>Feel free to check out the Project by visiting the Live Link.</p>
      </div>
    </div>
  );
};
