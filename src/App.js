import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import { generatePalette } from './ColorHelpers';

class App extends React.Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Redirect path="/error404" render={() => <h1>error 404</h1>} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[3])} />
      // </div>
    );
  }
}

export default App;
