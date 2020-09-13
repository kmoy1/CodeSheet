import React from 'react';
import PropTypes from 'prop-types';
import { firestoreGet } from '../Firebase/api';
import { Grid } from '@material-ui/core';
import Toolbar from './Toolbar';
import NotebookContent from './NotebookContent';
import Loading from '../Loading/Loading';
import './Notebook.scss';

class Notebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [],
            question: [],
            solution: [],
            loading: true,
        }
    }

    componentDidMount() {
        const { router } = this.props;
        const notebookId = router.location.pathname.split('/')[2];
        firestoreGet('notebook', notebookId).then((res) => {
            const d = res.data();
            this.setState({
                input: d.input,
                question: d.question,
                solution: d.solution,
                loading: false,
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <div className='notebook-page'>
                <div className='notebook-header'>
                    <Grid container>
                        <Grid item xs={2}>
                            SATYRN LOGO
                        </Grid>
                        <Grid item xs={2}>
                            TITLE OF NOTEBOOK
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={4}>ACCOUNT STUFF (LOGIN/LOGOUT)</Grid>
                    </Grid>
                </div>
                <div className='notebook-toolbar'>
                    <Toolbar />
                </div>
                <div className='notebook-content-outer'>
                    <NotebookContent
                        input={this.state.input}
                        question={this.state.question}
                        solution={this.state.solution}
                    />
                </div>
            </div>
        )
    }
}

Notebook.propTypes = {
    router: PropTypes.object,
}

export default Notebook;