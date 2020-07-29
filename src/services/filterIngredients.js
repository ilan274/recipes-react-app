export function auxiliarFuncition(data) {
  const results = {};
  const arrayIngredients = data;
  const arrayIngredientsPos0 = Object.entries(arrayIngredients)[0];
  const arrayIngredientsPos1 = Object.entries(arrayIngredients)[1];
  arrayIngredientsPos0[1].forEach((el, i) => (results[el] = arrayIngredientsPos1[1][i]));
  return Object.entries(results);
}

export function filterIngredientsMeals(data) {
  return Object.entries(data)
    .reduce(({ ingredients, measure }, act) => {
      if (act[0].includes('strIngredient') && act[1] && act[1].length >= 1) ingredients.push(act[1]);
      if (act[0].includes('strMeasure') && act[1] && act[1].length >= 1) measure.push(act[1]);
      return { ingredients: [...ingredients], measure: [...measure] };
    }, { ingredients: [], measure: [] });
}

export function filterIngredientsCockTails(data) {
  return Object.entries(data)
    .reduce(({ ingredients, measure }, act) => {
      if (act[0].includes('strIngredient') && act[1] && act[1].length >= 1) ingredients.push(act[1]);
      if (act[0].includes('strMeasure') && act[1] && act[1].length >= 1) measure.push(act[1]);
      return { ingredients: [...ingredients], measure: [...measure] };
    }, { ingredients: [], measure: [] });
}
