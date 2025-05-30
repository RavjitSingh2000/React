import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordion() {

    //single item selection
    const [selectedItem, setSelectedItem] = useState(null);

    function handleSingleItemSelect(getItemId) {
        let selected;
        if (getItemId === selectedItem) {
            selected = null;
        } else {
            selected = getItemId
        }
        setSelectedItem(selected);
    }

    //multiple item selection
    const [multipleSelect, setMultipleSelect] = useState(false);
    const [multipleItems, setMultipleItems] = useState([]);

    function handleMultipleItemSelection() {
        setMultipleSelect(!multipleSelect);
    }

    function handleMultipleItemSelect(getItemId) {
        let multipleItemsClone = [...multipleItems];
        const indexOfCurrentItem = multipleItemsClone.indexOf(getItemId);

        if (indexOfCurrentItem === -1) {
            multipleItemsClone.push(getItemId);
        } else {
            multipleItemsClone.splice(indexOfCurrentItem, 1);
        }
        setMultipleItems(multipleItemsClone);
    }

    return (
        <div className="accordion-body">
            <h2>ACCORDION</h2>
            <div className="accordion-wrapper">
                <span className="accordion-wrapper-span">
                    <button
                        onClick={() => { handleMultipleItemSelection() }}
                        className={multipleSelect ? `color-green` : `color-red`}
                    >{multipleSelect ? `Enable multi Select` : `Disable multi select`}</button>
                </span>
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) =>
                        (<section className="accordion-item" key={dataItem.key}>
                            <div
                                className="accordion-item-question-wrapper"
                                onClick={multipleSelect ?
                                    () => handleSingleItemSelect(dataItem.id) :
                                    () => handleMultipleItemSelect(dataItem.id)
                                }
                            >
                                <h3 className="accordion-item-question">{dataItem.id + ". "}{dataItem.question}</h3>
                                <span className={selectedItem === dataItem.id || multipleItems.indexOf(dataItem.id) == dataItem.id ? `span-arrow span-arrow-selected` : `span-arrow`}>^</span>
                            </div>
                            {
                                selectedItem === dataItem.id || multipleItems.indexOf(dataItem.id) == -1 ?
                                    (
                                        <p className="accordion-item-answer">{dataItem.answer}</p>
                                    ) : null
                            }
                        </section>
                        ))
                    )
                        :
                        (<span className="data-error"> NO DATA FOUND</span>)
                }
            </div>
        </div>
    );
}

export default Accordion;