(() => {

  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
      { id: 1, forDelete: false },
      { id: 2, forDelete: false },
      { id: 3, forDelete: true },
      { id: 4, forDelete: false },
      { id: 5, forDelete: false },
      { id: 7, forDelete: true },
  ]; 
  
  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map( file => file.forDelete );

  // Bad
  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };

  // Better
  class User { };
  interface User { };


  // Todo: Tarea
      
  // día de hoy - today
  const now = new Date();
  
  // días transcurridos - elapsed time in days
  const elapsedDays: number = 23;
  
  // número de archivos en un directorio - number of files in directory
  const numberOfFiles = 33;
  
  // primer nombre - first name
  const firstName = 'Fernando';
  
  // primer apellido - last name
  const lastName = 'Herrera';

  // días desde la última modificación - days since modification
  const daysSinceUpdate = 12;
  
  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;


})();



