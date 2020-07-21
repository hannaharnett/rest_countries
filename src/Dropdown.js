import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ activatorText = 'Dropdown', items = [], onClick}) => {
    const activatorRef = useRef(null);
    const dropdownListRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = (event) => {
        setIsOpen(!isOpen);
    }
    const keyHandler = (event) => {
        if (event.key === 'Escape' && isOpen) {
            setIsOpen(false);
        }
    }
    const clickOutsidehandler = (event) => {
        if (dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)) {
            return
        } else {
            setIsOpen(false);
        }
    }
    useEffect(function setupListener() {
        if (isOpen) {
            dropdownListRef.current.querySelector('button').focus();
            window.addEventListener('mousedown', clickOutsidehandler)
        } 
        return function cleanupListener() {
            window.removeEventListener('mousedown', clickOutsidehandler)
        }
    }, [isOpen]);
    return (
        <div 
            className={styles.dropdownWrap}
            onKeyUp={keyHandler}
        >
            <button 
                aria-expanded={isOpen ? "true" : "false"}  
                onClick={clickHandler} 
                ref={activatorRef} 
                className={styles.dropdownButton}
            >
                {activatorText}
            </button>
            <ul  
                ref={dropdownListRef}
                className={`${styles.dropdownItemList} ${isOpen ? styles.active : ''}`}
            >
                {items.map((item, index) => {
                    return (
                    <li key={index} onClick={clickHandler}>
                        <button onClick={onClick} data-id={item}>{item}</button>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Dropdown;