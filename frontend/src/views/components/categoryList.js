import React from 'react';
import Category from '../components/category'

const CategoryList = (props) => {
    const { categories, path } = props;
    return (
        <aside className="left-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className={path.pathname === "/" ? "active" : ""}>
                            <Category category={{ path: "../", name: "all" }} />
                        </li>
                        {
                            categories.map(category => {
                                return <li key={category.path} className={path.pathname.indexOf(`/${category.path}`) >= 0 ? "active" : ""}>
                                    <Category category={category} />
                                </li>
                            })
                        }
                    </ul>
                </nav>
        </aside>
    );
};

export default CategoryList;