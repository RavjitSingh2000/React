import "./tree-view.css";
import MenuList from "./child-components/menuList";

export default function TreeView({ menus = [] }) {
    return (
        <article className="tree-view-container">
            <h2>Tree View / Menu UI / Recursive Navigation Menu</h2>
            <MenuList list={menus} />
        </article>
    )
}