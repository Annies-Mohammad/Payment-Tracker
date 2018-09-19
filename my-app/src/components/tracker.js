import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from '../mock/step1';
import Step2 from '../mock/step2';
import Step3 from '../mock/step3';
import Step4 from '../mock/step4';
import Step5 from '../mock/step5';
import Step6 from '../mock/step6';
import StepDelay from '../mock/stepDelay';
import Body1 from '../mock/body1';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
   return [
    "Transfer Confirmed",
    "Send Funds to OFX",
    "Received by OFX",
    "OFX processing transfer",
    "Funds Delay", // demo remove
    "Sent to recipient",
    "Received by recipient"
  ];
}

function getStepContent(step) {
  // handleIconClick(step, null);
  /*switch (step) {
    case 0:
      return "Transfer Confirmed";
    case 1:
      return "Send Funds to OFX";
    case 2:
      return "Received by OFX";
    case 3:
      return "Funds Delay: Your Money will be delayed because of US Bank Holiday!";
    case 4:
      return "OFX processing transfer";
    case 5:
      return "Sent to recipient";
    case 6:
      return "Received by recipient";
    default:
      return "";
  }*/
}

class HorizontalNonLinearStepperWithError extends React.Component {
  handleIconClick = (step, e) => {

    this.setState({
      activeStep: step, //for demo only
    });

    const stepDetails = [
      [0,'0'],
      [1,'1'],
      [2,'2'],
      [3,'3'],
      [4,'4'],
      [5,'5'],
    ];
    const { failedStepIndex, failedStepReason } = this.state;
    if(failedStepIndex && failedStepIndex >= 0){
      stepDetails.splice(failedStepIndex, 0, [failedStepIndex, failedStepReason]);
    }
    this.setState({
      currentStepDetail: stepDetails[step][1],
    });
  };

  state = {
    activeStep: 1,
    skipped: new Set(),
    failedStepIndex: 4, // demo only-1,
    failedStepReason: 'Funds Delay: Your Money will be delayed because of US Bank Holiday!',
    currentStepDetail: null,
  };

  componentDidMount() {
    this.handleIconClick(this.state.activeStep, null);
  }
  isStepOptional = step => {
    return false; //step === 3;
  };

  isStepFailed = step => {
    const { failedStepIndex } = this.state;
    return step === failedStepIndex;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  getIconUrl = (step, currentStep) => {
    const isCompleted = step < currentStep;
    const isCurrent = step === currentStep;
    const standardIcons = [
      'icons/tick-complete.svg',
      `icons/${isCompleted? 'send-funds-complete.svg': (isCurrent? 'send-funds-in-use.svg':'send-funds-awaiting.svg')}`,
      `icons/${isCompleted? 'ofx-complete.svg': (isCurrent? 'ofx-in-use.svg':'ofx-awaiting.svg')}`,
      `icons/${isCompleted? 'processing-complete.svg': (isCurrent? 'processing-in-use.svg':'processing-awaiting.svg')}`,
      `icons/${isCompleted? 'send-funds-complete.svg': (isCurrent? 'send-funds-in-use.svg':'send-funds-awaiting.svg')}`,
      `icons/${!isCurrent? 'received-awaiting.svg': 'received-in-use.svg'}`
    ];
    const { failedStepIndex } = this.state;
    if(failedStepIndex && failedStepIndex >= 0){
      standardIcons.splice(failedStepIndex, 0, '');
    }
    return standardIcons[step] || '';
  };

  getLabel = (index, currentStep, label, date = '') => {
    const dates = [
      '14/09/2018',
      '14/09/2018',
      '15/09/2018',
      '16/09/2018',
      '17/09/2018',
      '18/09/2018',
      'ETA: 20/09/2018',
    ];
    const isCompleted = index <= currentStep;
    return (<div>
      <div>{isCompleted ? <b>{label}</b> : <span  style= {{ color: 'rgba(0, 0, 0, 0.54)' }}>{label}</span>}</div>
      <div>{isCompleted ? <b>{dates[index].replace('ETA:','')}</b> : (dates[index].indexOf('ETA') >= 0 ? <span  style= {{ color: 'rgba(0, 0, 0, 0.54)' }}>{dates[index]}</span> : '')}</div>
    </div>);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption" color="error">
                  Alert message
                </Typography>
              );
            }
            if (this.isStepFailed(index)) {
              labelProps.error = true;
              labelProps.icon = (
                <div style={{ cursor: 'pointer' }} onClick={this.handleIconClick.bind(this,index)}>
                  <img alt="gd" src='icons/alert.jpg' width="40" height="40"/>
                </div>
              );
            } else {
              labelProps.icon = (
                <div style={{ cursor: 'pointer' }} onClick={this.handleIconClick.bind(this,index)}>
                  <img alt="gd" src={this.getIconUrl(index, activeStep)} width="40" height="40"/>
                </div>
              );
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
              <StepLabel {...labelProps}>{this.getLabel(index, activeStep, label, '19/09/2018')}</StepLabel>
            </Step>
            );
          })}
        </Stepper>
        <div style={{backgroundColor: 'white', 'marginTop': '0px', 'marginBottom': '50px'}}>
          <div style={{'paddingTop': '15px', 'paddingBottom': '30px'}}>
            {this.state.currentStepDetail && this.state.currentStepDetail === this.state.failedStepReason && <StepDelay delayReason={this.state.failedStepReason} />}
            {this.state.currentStepDetail && this.state.currentStepDetail === '0' && <Step1/>}
            {this.state.currentStepDetail && this.state.currentStepDetail === '1' && <Step2/>}
            {this.state.currentStepDetail && this.state.currentStepDetail === '2' && <Step3/>}
            {this.state.currentStepDetail && this.state.currentStepDetail === '3' && <Step4/>}
            {this.state.currentStepDetail && this.state.currentStepDetail === '4' && <Step5/>}
            {this.state.currentStepDetail && this.state.currentStepDetail === '5' && <Step6/>}
          </div>
        </div>
        <Body1 mapUrl={this.state.activeStep >= 2 && this.state.currentStepDetail !== '5'? 'img1.jpg': (this.state.currentStepDetail === '5'? 'end-map.jpg' :'img2.jpg')} expectedDate={'ETA: 14/09/2018'}/>

      </div>
    );
  }
}

HorizontalNonLinearStepperWithError.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalNonLinearStepperWithError);
