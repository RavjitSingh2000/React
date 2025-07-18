import { useState } from "react";
import MenuList from "./menuList";


export default function MenuItem({ item }) {

    const [displayChildren, setDisplayChildren] = useState({});

    function handleDisplayChildren(getCurrentLabel) {
        setDisplayChildren({ ...displayChildren, [getCurrentLabel]: !displayChildren[getCurrentLabel] })
    }

    return (
        <li className="menu-item-container">
            <span>
                <span>{item.label}</span>
                {
                    item && item.children && item.children.length > 0 ? (<span onClick={() => handleDisplayChildren(item.label)}> {
                        displayChildren[item.label] ? ' -' : ' +'
                    }</span>) : null
                }
            </span>
            {
                item && item.children && item.children.length > 0 && displayChildren[item.label] ? <MenuList list={item.children} /> : null
            }
        </li>
    )
}
