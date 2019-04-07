export class Component {

	/**
	 * @param element
	 */
	constructor(element) {

		this.exampleElement = element;
		this.exampleElementChild = this.exampleElement.find('[data-js-example-element-child]');
	}

	/**
	 * Init
	 */
	init() {
		this.someFunctionality();
	}

	/**
	 * Initialise click events
	 */
	someFunctionality() {

		console.log('this is a component');
	}

}

export default Component;
