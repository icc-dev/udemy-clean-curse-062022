(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  // property of element
  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  // Properties of input
  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElement {
    public element: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents = new InputEvents();
    constructor(value: string, placeholder: string, id: string) {
      this.element = new HtmlElement(id, 'input');
      this.attributes = new InputAttributes(value, placeholder);
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });
})();
