import "./dummy.scss";

/**
 * You don't need to edit this, they should function as is.
 */

function NavigationButton(buttonName: string, iconPath: string): CustomElementConstructor {
  const cls = class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

      // this.style.backgroundColor = componentTag;
      this.innerHTML = `
        <li>
          <button type="button">
            <img src="${iconPath}">
          </button>
        </li>
        `;
    }
  };
  customElements.define(componentTag, cls);
  return cls;
}

export const DummyComponentOne = createDummyComponent("component-1");
export const DummyComponentTwo = createDummyComponent("component-2");
export const DummyComponentThree = createDummyComponent("component-3");
export const DummyComponentFour = createDummyComponent("component-4");
export const DummyComponentFive = createDummyComponent("component-5");
