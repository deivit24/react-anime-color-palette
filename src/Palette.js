import React from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
// CSS

import './Palette.css';

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
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.handleFormat}
        />
        <div className="Palette-colors">
          {/* Bunch of Color Boxes */}
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default Palette;
