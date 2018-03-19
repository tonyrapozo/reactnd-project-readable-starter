import React from 'react';

const Header = (props) => {
    const myprops = props.props;
    let categoryName = "all";
    let category = myprops.categoryReducer.categories.filter(category => category.path === myprops.match.params.category);
    if (category.length > 0)
        categoryName = category[0].name;

    if (myprops.match.path === "/new")
        categoryName = "new post";

    return (
        <div className="App">
            <header className="topbar">
                <nav className="navbar top-navbar navbar-toggleable-sm navbar-light">
                    <div className="nav-header">
                        <h3>
                            <span>{categoryName}</span>
                            <button className="btn btn-primary float-right" onClick={() => myprops.history.push("/new")}>New</button>
                        </h3>
                    </div>
                </nav>
            </header>
        </div >
    );
};

export default Header;