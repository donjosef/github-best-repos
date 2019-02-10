import React, { Component } from 'react';
import { getReadMe } from '../../api/api';
import { parseHtml, walkTheNode } from '../../utilities/utilities';
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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            const { owner, repo } = this.props.match.params;

            getReadMe(owner, repo)
                .then(markdown => {
                    this.setState({ markdown })
                })
        }
    }

    render() {
        /*
            * marked return a string representing the html
            * parse that string, so one can walks recursively the dom
            * reset alignment of text and remove all images from original markdown, to avoid layout problems
            * set as innerHtml of this component
        */
        const htmlInString = marked(this.state.markdown);
        const parsed = parseHtml(htmlInString);
        walkTheNode(parsed, (node) => {
            if (node.nodeType === 1) {
                if (node.getAttribute('align')) {
                    node.removeAttribute('align');
                }
                if (node.nodeName === 'IMG') {
                    node.remove();
                }
            }
        });
        return <div className="readme-page" dangerouslySetInnerHTML={{ __html: parsed.innerHTML }}></div>
    }
}


export default ReadMePage;
