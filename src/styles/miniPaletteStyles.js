export default {
  root: {
    backgroundColor: '#e4e4e4',
    borderRadius: '5px',
    border: '3px solid #000',
    padding: '0.5rem',
    postion: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    textDecoration: 'none'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0, auto',
    position: 'auto',
    marginBottom: '-4px'
  }
};
