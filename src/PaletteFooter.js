import React from 'react';
import { withStyles } from '@material-ui/styles';
import style from './styles/footerPaletteStyles';
class PaletteFooter extends React.Component {
  render() {
    const { paletteName, emoji, classes } = this.props;
    return (
      <div>
        <footer className={classes.paletteFooter}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default withStyles(style)(PaletteFooter);
