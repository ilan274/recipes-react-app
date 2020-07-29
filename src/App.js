import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Meals from './pages/Meals';
import ComidasProvider from './context/ComidasProvider';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import MealsExplorer from './pages/MealsExplorer';
import RecipeDetailsMeals from './pages/RecipeDetailsMeals';
import RecipeDetailsCockTails from './pages/RecipeDetailsCockTails';
import MealsExplorerByIngredients from './pages/MealsExplorerByIngredients';
import MealsExplorerByArea from './pages/MealsExplorerByArea';
import FavoriteRecipesPage from './pages/FavoriteRecipesPage';
import DoneRecipes from './pages/DoneRecipes';
import NotFound from './pages/NotFound';

const MealsRoutes = () => (
  <Switch>
    <Route exact path="/comidas" render={(props) => <Meals {...props} type="meal" />} />
    <Route exact path="/bebidas" render={(props) => <Meals {...props} type="cocktail" />} />
  </Switch>
);

const RecipeDetailsMealsRoutes = () => (
  <Switch>
    <Route
      exact
      path="/comidas/:id"
      render={(props) => <RecipeDetailsMeals {...props} type="meal" />}
    />
  </Switch>
);

const RecipeDetailsCockTailsRoutes = () => (
  <Switch>
    <Route
      exact
      path="/bebidas/:id"
      render={(props) => <RecipeDetailsCockTails {...props} type="cocktail" />}
    />
  </Switch>
);

const InProgressRoutes = () => (
  <Switch>
    <Route
      exact
      path="/bebidas/:id/in-progress"
      render={(props) => <RecipeDetailsCockTails {...props} type="cocktail" />}
    />
    <Route
      exact
      path="/comidas/:id/in-progress"
      render={(props) => <RecipeDetailsMeals {...props} type="meal" />}
    />
  </Switch>
);

const ExplorarRoutes = () => (
  <Switch>
    <Route exact path="/explorar" component={Explorar} />
  </Switch>
);

const MealsExplorerRoutes = () => (
  <Switch>
    <Route
      exact
      path="/explorar/comidas"
      render={(props) => <MealsExplorer {...props} type="meal" />}
    />
    <Route
      exact
      path="/explorar/bebidas"
      render={(props) => <MealsExplorer {...props} type="cocktail" />}
    />
  </Switch>
);

const MealsExplorerByIngredientsRoutes = () => (
  <Switch>
    <Route
      exact
      path="/explorar/comidas/ingredientes"
      render={(props) => <MealsExplorerByIngredients {...props} type="meal" url="comidas" />}
    />
    <Route
      exact
      path="/explorar/bebidas/ingredientes"
      render={(props) => <MealsExplorerByIngredients {...props} type="cocktail" url="bebidas" />}
    />
  </Switch>
);

const MealsExplorerByAreaRoutes = () => (
  <Switch>
    <Route
      exact
      path="/explorar/comidas/area"
      render={(props) => <MealsExplorerByArea {...props} type="meal" />}
    />
    <Route exact path="/explorar/bebidas/area" component={NotFound} />
  </Switch>
);

const PerfilRoutes = () => (
  <Switch>
    <Route exact path="/perfil" component={Perfil} />
  </Switch>
);

const DoneRecipesRoutes = () => (
  <Switch>
    <Route exact path="/receitas-feitas" component={DoneRecipes} />
    <Route exact path="/receitas-favoritas" component={FavoriteRecipesPage} />
  </Switch>
);

const LoginRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
  </Switch>
);

function App() {
  return (
    <center>
      <div className="Container" id="meals">
        <ComidasProvider>
          {MealsRoutes()}
          {RecipeDetailsMealsRoutes()}
          {RecipeDetailsCockTailsRoutes()}
          {InProgressRoutes()}
          {ExplorarRoutes()}
          {MealsExplorerRoutes()}
          {MealsExplorerByIngredientsRoutes()}
          {MealsExplorerByAreaRoutes()}
          {PerfilRoutes()}
          {DoneRecipesRoutes()}
          {LoginRoutes()}
        </ComidasProvider>
      </div>
    </center>
  );
}

export default App;
