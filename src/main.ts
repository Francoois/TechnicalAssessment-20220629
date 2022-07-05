import './style.scss'

//default components to render from the Panels.json file. You don't need to edit them.
export * from "./dummy/dummy";


//export your components here to make them available at runtime 
export { SampleComponent } from './components/SampleComponent/SampleComponent'
export * from './components/Navigation/Navigation'

// example of nesting components dynamically
// to achieve this with shadow DOM components, you need to have a <slot> </slot> element in its shadow DOM.
// const navigationComponent = document.getElementById("navigation") as HTMLElement;
// navigationComponent.appendChild(new Navigation());
//
// const SlottedTitle = document.createElement("h2");
// SlottedTitle.textContent = "Slotted subtitle example";
// sampleComponent.appendChild(SlottedTitle);


//Start your code here
//You will need to create new components for this. 
//You can take inspiration from SampleComponent for how to structure them.
