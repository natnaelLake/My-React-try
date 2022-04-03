import { Component } from 'react';

class SinglePost extends Component {
    constructor(props) {
      super(props)
      console.log('[single post] constructor called')
      
    }
    static getDrivedStateFromProps(props, state) {
        console.log('[single post] get derived called')
        return state
    }
    shouldComponentUpdate()
    {
        console.log('[single post] should component update fired')
        return true;
    }
    render() {
        console.log('[single post] render called')
        return (
            <div className='m-4 p-3 border border-gray-400 shadow'>
                <h3 className='text-xl font-bold text-blue-600'>
                    {this.props.title}
                </h3>
                <div>{this.props.description}</div>
                <div>{this.props.children}</div>
                {/* <div>{this.props.addpost}</div> */}
            </div>
        );
    }
    getSnapshotBeforeUpdate(prevState, prevProps)
    {
        console.log('[single post] component get mount calld')
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log(snapshot)
        console.log('[single post] snaphot fired here')
    }
    componentDidMount() {
        console.log('[single post ] component did mount called')
    }
    componentWillUnmount()
    {
        console.log('[single post]')
    }   
}

export default SinglePost;
