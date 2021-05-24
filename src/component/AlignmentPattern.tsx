import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { getScreenHeight, getScreenWidth } from '../selector';

export interface AlignmentPatternProps {
  screenWidth: number;
  screenHeight: number;
}

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
  vl: {
    background: 'lightBlue',
    borderLeft: '6px solid green',
    height: '500px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-3px',
    top: '0',
  },
  bodyDiv: {
    marginTop: '22%'
  },
  alignmentPattern: {
    background: 'url(alignmentPattern.png)',
    backgroundRepeat: 'repeat',
    backgroundSize: '1040px 216px',
    width: '1040px',
    height: '216px',
  }
});

const AlignmentPattern = (props: AlignmentPatternProps) => {

  console.log('AlignmentPattern: render');

  const classes = useStyles();
  /*
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <div className={classes.logoContainerStyle} />
        </header>
        <div className={classes.bodyDiv}>
          BrightWall Device Setup
          <p>Serial Number:&nbsp;&nbsp;{'xx068'}</p>
          <p>{'master'}</p>
          <p>{'slave'}</p>
        </div>
      </div>
    );
  */

  console.log('alignmentPattern props');
  console.log(props.screenWidth);
  console.log(props.screenHeight);

  const background: string = 'url(alignmentPattern.png)';
  const backgroundRepeat: string = 'repeat';
  // const backgroundSize: string = '1920px 1080px';
  const width: string = '1920px';
  const height: string = '1080px';

  //     <div className={classes.alignmentPattern} />

  // const divStyle = {
  //   background: 'url(alignmentPattern.png)',
  //   backgroundRepeat: 'repeat',
  //   width: '1920px',
  //   height: '1080px',
  // };

  // width: width,
  // height: height,

  const divStyle = {
    background: background,
    backgroundRepeat: backgroundRepeat,
    width: props.screenWidth,
    height: props.screenHeight,
  };

  return (
    <div style={divStyle}/>
  );
};

function mapStateToProps(state: any, ownProps: any): Partial<any> {
  return {
    screenWidth: getScreenWidth(state),
    screenHeight: getScreenHeight(state),
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AlignmentPattern);

/*
import classLevelStyles from '../styles/cell.css';

const style = {
    width:  this.calcWidth()  + 'px',
    height: this.calcHeight() + 'px',
};

<div className={classLevelStyles} style={style} />
*/

/*
// cell.css

.cell {
  width: var(--width);
  height: var(--height);
}
Then you can supply the values of the CSS variables in a parent container (CSS variables also cascade down):

<div style={{ '--width': `${something}px`, '--height': `${something}px` }}>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
*/
/*
<div style={{ height: '10%' }}>
  Hello World!
</div>
*/
/*
<span style={{float:'right'}}>Download Audit</span>
*/
