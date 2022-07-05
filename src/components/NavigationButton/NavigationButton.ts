import style from "./NavigationButton.scss";

export function createNavButton(componentTag: string, componentIcon: string): CustomElementConstructor {
  const cls = class extends HTMLLIElement {

    constructor() {
      super();

      const styleElement = document.createElement("style");
      styleElement.innerHTML = style;
      this.shadowRoot?.appendChild(styleElement);
    }

    connectedCallback() {
      // this.classList.add("nav-button");
      this.classList.add(componentTag);

      this.innerHTML = `
        <button type="button" class="nav-button">
          <img src="${componentIcon}" alt="icon"/>
        </button>
        `;
    }
  }
  customElements.define(componentTag, cls,{extends:'li'});
  return cls;
}