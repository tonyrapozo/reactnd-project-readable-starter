import React, { Component } from 'react';
import Header from './components/header';
import CategoryList from './components/categoryList';

import { getCategories } from '../store/categoryStore';
import { getPost, updatePost, insertPost } from '../store/postStore';
import { connect } from "react-redux";

class ViewPost extends Component {
    static contextTypes = {
        router: () => true
    }

    constructor(props) {
        super(props);
        this.state = {
            post: { id: Math.random().toString(16).substr(2), title: '', body: '', timestamp: Date.now(), author: '', category: '' }
        }
        if (props.match.params.id) {
            props.getPost(props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        const thisPostId = nextProps.match.params.id;
        if (thisPostId)
            this.setState({ post: nextProps.postReducer.posts[thisPostId], creating: false });
    }

    componentDidMount() {
        this.props.getCategories();
        this.setState({ post: { ...this.state.post } })
    }

    change = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState((prevState, props) => {
            prevState.post[name] = value;
            return prevState;
        });
    }

    savePost = (post) => {
        debugger;
        if (this.props.match.params.id) {
            this.props.updatePost(post);
        } else {
            this.props.insertPost(post);
        }
    }

    render() {
        const { categories } = this.props.categoryReducer;
        const { post } = this.state;
        return (
            <div className="App">
                <Header props={this.props} />
                <CategoryList categories={categories} path={document.location} />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {post.id}<br />
                                <input name="title" type="text" value={post.title} onChange={this.change} />
                                <input name="body" type="text" value={post.body} onChange={this.change} />
                                <input name="author" type="text" value={post.author} onChange={this.change} />
                                <input name="category" type="text" value={post.category} onChange={this.change} />
                                <button className="btn btn-primary" onClick={() => this.savePost(post)}>salvar</button>
                                <button className="btn btn-default">retornar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ categoryReducer, postReducer }) => ({ categoryReducer, postReducer });

export default connect(mapStateToProps, { getCategories, getPost, updatePost, insertPost })(ViewPost);