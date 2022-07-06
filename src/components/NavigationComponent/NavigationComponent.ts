import html from "./NavigationComponent.html?raw";
import json from "../../data/Panels.json";
import style from "./NavigationComponent.scss";
import {createNavButton} from "./NavigationButton/NavigationButton";

/**
 * Sample Component, importing Styles and HTML.
 * This component is then referenced in main.ts, to be defined at runtime.
 * This is a simple suggestion for a component system, you're free to organize your code however you want.
 */
export class NavigationComponent extends HTMLElement {
    listElement: HTMLUListElement;

    /** Warning
     * You cannot add attributes within the constructor, or alter its DOM. 
     * It will throw an error when trying to create it with document.createElement("sample-component"): 
     * DOMException: Failed to construct 'CustomElement': The result must not have attributes
     * If you really need to do something like this, add them in the connectedCallback function.
     * 
     * This is why we use the virtual DOM, to be able to initialize its content during the construction phase
     */
    constructor() {
        super();
        //create the shadowRoot
        this.attachShadow({mode: 'open'});

        //add HTML template and CSS to the component 
        this.shadowRoot!.innerHTML = html;
        const styleElement = document.createElement("style");
        styleElement.innerHTML = style;
        this.shadowRoot?.appendChild(styleElement);

        this.listElement = this.shadowRoot!.querySelector("#nav-button-list") as HTMLUListElement;

        this.renderFirstPanelNameExample();

        this.shadowRoot?.addEventListener('select', e => {
            let selectedButton = (<CustomEvent>e).detail.name;

            let listButton:NodeListOf<HTMLElement> = this.listElement.querySelectorAll("li");
            // sync selection for all items
            // @ts-ignore
            for (const button of listButton) {
                if(button.activated || button.className==selectedButton) button.toggleActivated();
            }
        });
    }

    renderFirstPanelNameExample() {
        json.panels.forEach(panel=>{
            let name:string = panel.content+"-button";
            const buttonComponent = createNavButton(name, panel.icon);
            this.listElement.appendChild(new buttonComponent());
        });
    }

    static get observedAttributes() { return ["selected"];}

    set selected(string:string){
        this.setAttribute("selected", string);
    }
    get selected(){
        let sel = this.getAttribute("selected");
        return (sel === null) ? 'none' : sel ;
    }

    /**
     * Is called once the component is initialized and added to the DOM
     * */
    connectedCallback() {}

    /**
     * This method is called everytime an attribute changes.
     * It is also called a first time after the constructor, and before connectedCallback,
     * for all attributes already present on the element before being added to the DOM.
     * @param name attribute name
     * @param oldValue old value
     * @param newValue new value
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (newValue != oldValue) {
            switch(name) {
                case "selected":
                    // this.titleElement.textContent = newValue;
                    break;
            }
        }
    }
}
// to make the custom element available by tag name
customElements.define("navigation-component", NavigationComponent);