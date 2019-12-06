import React from 'react';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
// CSS
import 'emoji-mart/css/emoji-mart.css';
import { withStyles } from '@material-ui/styles';
import style from './styles/PaletteStyles';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({
      level
    });
  }
  handleFormat(val) {
    this.setState({
      format: val
    });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        moreUrl={`/palette/${id}/${color.id}`}
        showFullPalette={true}
      />
    ));
    return (
      <div className={classes.palette}>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.handleFormat}
          showingAllColors={true}
        />
        <div className={classes.paletteColors}>
          {/* Bunch of Color Boxes */}
          {colorBoxes}
        </div>
        {/* <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer> */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(style)(Palette);
