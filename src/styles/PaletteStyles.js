export default {
  palette: {
    height: '98vh',
    display: 'flex',
    flexDirection: 'column'
  },

  paletteColors: {
    height: '90%'
  },

  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
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
      backgroundColor: 'rgba(255,255,255, 0.5) ',
      fontSize: '1rem',
      lineHeight: '30px',
      color: 'white',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'white',
        color: 'black',
        transition: 'all .3s ease-in-out'
      }
    }
  },

  paletteFooter: {
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  emoji: {
    fontSize: '1rem',
    margin: '1rem'
  }
};
