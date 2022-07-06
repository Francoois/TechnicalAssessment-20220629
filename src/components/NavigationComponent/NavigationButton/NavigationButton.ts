export function createNavButton(componentTag: string, componentIcon: string): CustomElementConstructor {
  const cls = class extends HTMLLIElement {

    public static readonly selected:string = "selected";
    activated:boolean = false;

    constructor() {
      super();

      // add click listener
      this.addEventListener('click', () => {
        this.triggerSelected();
      });
    }

    triggerSelected() {
      let event = new CustomEvent('select', {
        bubbles: true,
        detail: {
          name: componentTag
        }
      });
      this.dispatchEvent(event);
    }

    toggleActivated=()=>{
      this.activated=!this.activated;

      if(this.activated){
        this.classList.add(cls.selected);
      } else {
        this.classList.remove(cls.selected);
      }
    }

    connectedCallback() {
      // this.classList.add("nav-button");
      this.classList.add(componentTag);

      this.innerHTML = `
<!--        <link href="./src/components/NavigationButton/NavigationButton.scss" rel="stylesheet">-->
        <button type="button" class="nav-button">
          <img src="${componentIcon}" alt="icon"/>
        </button>
        `;
    }
  }
  customElements.define(componentTag, cls,{extends:'li'});
  return cls;
}