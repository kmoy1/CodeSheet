import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Radio, FormControl, FormControlLabel, FormGroup, RadioGroup, TextField, Typography } from '@material-ui/core';

class NotebookContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [...Array(props.question.length).keys()].map((i) => this.defaultValue(props.input[i])),
        }
    }

    defaultValue(input) {
        if (input.includes('MC SELECT')) {
            let length = input.split('MC SELECT')[1].split(',').length;
            return [...Array(length).keys()].map(() => 0);
        }
        return null;
    }

    handleChange = (i, value, option=null) => {
        if (option === 'select') {
            let input = this.state.input;
            const inputArray = [];
            for (let k in input[i]) {
                inputArray.push((parseInt(k) === value) ? 1 - input[i][k] : input[i][k]);
            }
            input[i] = inputArray;
            this.setState({ input: input });
        } else {
            let input = this.state.input;
            input[i] = value;
            this.setState({ input: input });
        }
    }

    renderRadio(i, choicesString) {
        return (
            <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={this.state.input[i]} onChange={(e) => this.handleChange(i, e.target.value)}>
                {choicesString.split(',').map((choice) => <FormControlLabel key={choice} value={choice} control={<Radio />} label={choice} />)}
            </RadioGroup>
            </FormControl>
        )
    }

    renderSelect(i, choicesString) {
        const choices = choicesString.split(',');
        return (
            <FormControl component="fieldset">
            <FormGroup>
            {[...Array(choices.length).keys()].map((choice) => <FormControlLabel
                control={<Checkbox checked={(this.state.input[i][choice] === 1)} onChange={(e) => this.handleChange(i, choice, 'select')} name={choices[choice]} />}
                label={choices[choice]}
                key={choices[choice]}
            />)}
            </FormGroup>
            </FormControl>
        )
    }

    renderRow(i) {
        const { input, question } = this.props
        return (
            <div className='notebook-content-row' key={i}>
                <Typography variant='h6'>{question[i]}</Typography>
                {(input[i].includes('NUMBER') || input[i].includes('ONELINE')) && <TextField fullWidth />}
                {(input[i].includes('BOX')) && <TextField fullWidth multiline rows={3} />}
                {(input[i].includes('MC RADIO')) && this.renderRadio(i, input[i].split('MC RADIO')[1])}
                {(input[i].includes('MC SELECT')) && this.renderSelect(i, input[i].split('MC SELECT')[1])}
            </div>
        )
    }

    render() {
        const values = [...Array(this.props.question.length).keys()];
        return (
            <div className='notebook-content-inner'>
                {values.map((i) => this.renderRow(i))}
            </div>
        )
    }
}

NotebookContent.propTypes = {
    input: PropTypes.array,
    question: PropTypes.array,
    solution: PropTypes.array,
}

export default NotebookContent;