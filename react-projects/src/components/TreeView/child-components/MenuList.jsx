import MenuItem from "./menuItem";


export default function MenuList({ list = [] }) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length ? list.map((listItem, key) => (<MenuItem item={listItem} />)) : "Empty List"
            }
        </ul>
    )
}
