import React from 'react';
import { withStyles } from '@material-ui/styles';
import style from './styles/miniPaletteStyles';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const mini = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{mini}</div>
      <h5 className={classes.title}>
        {paletteName}{' '}
        <span className={classes.emoji}>
          {/* <img src={emoji} alt="" /> */}
          {emoji}
        </span>
      </h5>
    </div>
  );
}

export default withStyles(style)(MiniPalette);
