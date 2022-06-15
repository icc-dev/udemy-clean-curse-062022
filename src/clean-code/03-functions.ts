(() => {

  interface IMovie {
    movieId?: string;
    title?: string;
    description?: string;
    rating?: number;
    cast?: string[]
  }

  interface IActor {
    actorId?: string;
    firstName: string;
    birthdate: Date;
  }

  function getMovieById( id: string ) {
      console.log({ id });
  }

  function getActorsMovie( { movieId }: IMovie ) {
      console.log({ movieId });
  }

  function getActorBiografy( { actorId }: IActor ) {
      console.log({ actorId });
  }
  
  function addMovie(newMovie: IMovie) {
      console.log({ ...newMovie });
  }

  function addActor(actor: IActor): boolean {
      
    const existsActor = existsActorByName(actor.firstName);
    
    if (existsActor) {
      console.log('[addActor]: Actor already exists');
      return false;
    }
    console.log('[addActor]: Actor Added');
    return true;        

  }

  function existsActorByName(firstName: string): boolean {
    return firstName === 'fernando';
  }
})();
