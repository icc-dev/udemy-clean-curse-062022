(() => {
  const fruitColors = [
    {
      color: 'red',
      fruits: ['manzana', 'fresa']
    },
    {
      color: 'yellow',
      fruits: ['piña', 'banana']
    },
    {
      color: 'purple',
      fruits: ['moras', 'uvas']
    }
  ]

  function isRedFruit( fruitName: string ): boolean {
    const fruits = ['manzana', 'cereza', 'ciruela']
    return fruits.includes(fruitName);
  }

  function getFruitsByColor( fruitColor: string ): string[] {
    const fruitsName = fruitColors.find(({ color }) => { return color === fruitColor});
    if (!fruitsName) throw new Error("The color must be: red, yellow, purple");
    return fruitsName.fruits;
  }

  // Simplificar esta función
  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if ( !isFirstStepWorking ) return 'First step broken.'
    if ( !isSecondStepWorking ) return 'Second step broken.'
    if ( !isThirdStepWorking ) return 'Third step broken.'
    if ( !isFourthStepWorking ) return 'Fourth step broken.'
    return 'Working properly!';
  }


  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




