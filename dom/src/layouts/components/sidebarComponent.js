import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    render() {
        return (
            <div className="side-bar">
                <ul>
                    <li>
                        <Link to="/dashboard">Staffs</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>Classes</li>
                </ul>
            </div>
        );
    }
}

export default SidebarComponent;