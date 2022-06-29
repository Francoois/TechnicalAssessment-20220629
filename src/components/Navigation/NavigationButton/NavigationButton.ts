import "./NavigationButton.scss";

/**
 * You don't need to edit this, they should function as is.
 */

function createDummyComponent(componentTag: string): CustomElementConstructor {
  const cls = class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.classList.add("dummy-component");
      this.classList.add(componentTag);

      this.style.backgroundColor = componentTag;
      this.innerHTML = `
            <h1>${componentTag.split("-").join(" ")}</h1> 
            <container> 
                <div class="block-1"> </div>
                <div class="block-2"> </div>
                <div class="block-3"> </div>
            </container>
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
