import React, { Component } from 'react';
import { getReadMe } from '../../api/api';
const marked = require('marked');

class ReadMePage extends Component {

    state = {
        markdown: ""
    }

    componentDidMount() {
        const { owner, repo } = this.props.match.params;

        getReadMe(owner, repo)
            .then(markdown => {
                this.setState({ markdown })
            })
    }

    render() {
        return <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
    }
}

export default ReadMePage;
