(() => {

  // arreglo de temperaturas celsius
  const arrayOfCelciusGrades = [33.6, 12.34];

  // Dirección ip del servidor
  const serverIp = '123.123.123.123';

  // Listado de usuarios
  const listOfUsers = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

  // Listado de emails de los usuarios
  const emailList = listOfUsers.map( user => user.email );

  // Variables booleanas de un video juego
  const canJump = false;
  const canRun = true;
  const hasItems = true;
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const initTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const elapsedTime = new Date().getTime() - initTime;


  // Funciones
  // Obtiene los libros
  function getBooks() {
      throw new Error('Function not implemented.');
  }

  // obtiene libros desde un URL
  function getBooksByUrl(u: string) {
      throw new Error('Function not implemented.');
  }
  
  // obtiene el área de un cuadrado basado en sus lados
  function getArea( s: number ) {
      throw new Error('Function not implemented.');
  }

  // imprime el trabajo
  function printJobs() {
      throw new Error('Function not implemented.');
  }

})();