import MenuList from "./menuList";


export default function MenuItem({ item }) {
    return (
        <li className="menu-item-container">
            <span>{item.label}</span>
            {
                item && item.children && item.children.length > 0 ? <MenuList list={item.children} /> : null
            }
        </li>
    )
}
