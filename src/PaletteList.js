import React from 'react';
import MiniPalette from './MiniPalette';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import style from './styles/paletteListStyles';

class PaletteList extends React.Component {
  goToPalette(id) {
    console.log('Hi');
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>AnimeColors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <Link to={`/palette/${palette.id}`}>
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(PaletteList);
