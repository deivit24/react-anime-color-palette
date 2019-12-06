import React from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import style from './styles/PaletteStyles';
import PaletteFooter from './PaletteFooter';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

class SinglePalette extends React.Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
    this.handleFormat = this.handleFormat.bind(this);
  }
  handleFormat(val) {
    this.setState({
      format: val
    });
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showFullPalette={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <NavBar handleChange={this.handleFormat} showingAllColors={false} />
        {/* <h1>{this.props.colorId}</h1> */}
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(style)(SinglePalette);
