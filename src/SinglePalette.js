import React from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';

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
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        showlink={false}
      />
    ));
    return (
      <div className="Palette">
        <NavBar handleChange={this.handleFormat} showingAllColors={false} />
        {/* <h1>{this.props.colorId}</h1> */}
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SinglePalette;
