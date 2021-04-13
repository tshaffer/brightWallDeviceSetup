import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const useStyles = makeStyles({
  vl: {
    borderLeft: '6px solid green',
    height: '500px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-3px',
    top: '0',
  },
});

const AlignmentPattern = () => {

  const classes = useStyles();

  return (
    <div className={classes.vl}>
    </div>
  );

};

function mapStateToProps(state: any, ownProps: any): Partial<any> {
  return {
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AlignmentPattern);



