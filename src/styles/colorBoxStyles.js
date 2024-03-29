import chroma from 'chroma-js';
export default {
  colorBox: {
    width: '20%',
    height: props => (props.showFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.08 ? 'white' : 'black',
    background: props =>
      chroma(props.background).luminance() <= 0.08
        ? 'rgba(255,255,255,.7)'
        : 'rgba(0,0,0,.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
    '&:hover': {
      transition: 'all .5s ease-in-out',
      backgroundColor: props =>
        chroma(props.background).luminance() <= 0.08 ? 'black' : 'white',
      color: props =>
        chroma(props.background).luminance() >= 0.08 ? 'black' : 'white'
    }
  },
  copyButton: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: props =>
      chroma(props.background).luminance() <= 0.08
        ? 'rgba(255,255,255,.7)'
        : 'rgba(0,0,0,.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: props =>
      chroma(props.background).luminance() >= 0.08 ? 'white' : 'black',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    opacity: '0'
  },
  boxContent: {
    position: 'absolute',
    padding: '10px',
    width: '100%',
    left: '0px',
    bottom: '0px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '2rem',
      textTransform: 'uppercase',
      zIndex: '26'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100'
    }
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: '0.4s ease-in-out',
    transitionDelay: '0.2s',
    textTransform: 'uppercase'
  }
};
