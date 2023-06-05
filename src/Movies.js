import React from 'react';
import { useGlobalContext } from './Context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie , isLoading} = useGlobalContext();
if (isLoading) {
  return(
    <div>
      loading......
    </div>
  )
}
  return (
    <div className="container">
      <div className="row">
        {movie?.map((curMovie) =>{
          const {Title} = curMovie;
        const movieName = Title.substring(0,15);
        return(

          <div key={curMovie.imdbID} className="col-3">
            <NavLink to={`movie/${curMovie.imdbID}`} className="text-center text-secondary text-decoration-none fw-bold">
              <section className="border border-3 m-2 p-4 d-flex flex-column justify-content-between bg-white" >
                <div className='pb-2'>{movieName.length >= 15 ? `${movieName}...` : movieName}</div>
                <div className="d-flex align-items-center border rounded "style={{ height: '200px' }}>
                  <img src={curMovie.Poster } className="img-fluid w-100 h-100" alt={curMovie.Title} />
                </div>
              </section>
            </NavLink>
          </div>
       )} )}
      </div>
    </div>
  );
};

export default Movies;
