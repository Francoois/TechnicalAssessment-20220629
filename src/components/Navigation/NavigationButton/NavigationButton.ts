import "./NavigationButton.scss";

/**
 * You don't need to edit this, they should function as is.
 */

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
      this.innerHTML = `
        <li>
          <button type="button">
            <img src="${this.iconPath}">
          </button>
        </li>
        `;
    }
}
customElements.define("nav-button", NavigationButton );


// export const DummyComponentOne = createDummyComponent("component-1");
// export const DummyComponentTwo = createDummyComponent("component-2");
// export const DummyComponentThree = createDummyComponent("component-3");
// export const DummyComponentFour = createDummyComponent("component-4");
// export const DummyComponentFive = createDummyComponent("component-5");
