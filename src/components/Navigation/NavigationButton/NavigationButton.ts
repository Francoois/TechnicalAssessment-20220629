import style from "./NavigationButton.scss";

export class NavigationButton extends HTMLElement {

  buttonName: string;
  iconPath: string

    constructor(buttonName: string, iconPath: string) {
      super();
      this.buttonName=buttonName;
      this.iconPath=iconPath;
    }

    connectedCallback() {
      // this.style.backgroundColor = componentTag;
      this.outerHTML = `
<!--        <slot> </slot>-->
        <li>
          <button type="button" class="nav-button">
            <img src="${this.iconPath}">
          </button>
        </li>
        `;
      this.outerHTML
    }
}
customElements.define("nav-button", NavigationButton );
