// import "./NavigationButton.scss";

export function createNavButton(componentTag: string, componentIcon: string): CustomElementConstructor {
  const cls = class extends HTMLLIElement {

    constructor() {
      super();
    }

    connectedCallback() {
      // this.classList.add("nav-button");
      this.classList.add(componentTag);

      this.innerHTML = `
        <link href="./src/components/NavigationButton/NavigationButton.scss" rel="stylesheet">
        <button type="button" class="nav-button">
          <img src="${componentIcon}" alt="icon"/>
        </button>
        `;
    }
  }
  customElements.define(componentTag, cls,{extends:'li'});
  return cls;
}