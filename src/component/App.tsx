import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeStyles } from '@material-ui/core/styles';
import { 
  serialNumber,
  videoWallRowIndex,
  videoWallColumnIndex,
 } from '../config/config';

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const useStyles = makeStyles({
  parentDiv: {
    position: 'relative',
    // height: '1080px',
    height: '100%',
  },
  App: {
    // background: linear - gradient(90deg, #753CD9, #290D5B),
    background: 'lightBlue',
    minHeight: '100vh',
    color: 'white',
    fontFamily: "PTSans",
    textAlign: 'center',
  },
  AppHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  logoContainerStyle: {
    height: '346px',
    width: '1603px',
    margin: '100px 10px 5px 10px',
    position: 'absolute',
    // background: url('BrightSign_logo_white.png') no-repeat 50% 80%',
    backgroundSize: '400px',
  },
  bodyDiv: {
    marginTop: '22%'
  }

});

const App = (props: any) => {

  const classes = useStyles();

  console.log('render app');
  
  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <div className={classes.logoContainerStyle} />
      </header>
      <div className={classes.bodyDiv}>
        BrightWall Device Setup
        <p>Serial Number:&nbsp;&nbsp;{serialNumber}</p>
        <p>Row Index:&nbsp;&nbsp;{videoWallRowIndex}</p>
        <p>Column Index:&nbsp;&nbsp;{videoWallColumnIndex}</p>
      </div>
    </div>
  )
};

function mapStateToProps(state: any, ownProps: any): Partial<any> {
  return {
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

