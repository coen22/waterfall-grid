import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'waterfall.js/src/waterfall.js';

/**
 * `waterfall-grid`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WaterfallGrid extends PolymerElement {
  static get template() {
	return html`
		<style>
		  :host {
			display: block;
			box-sizing: border-box;
		  }
		</style>
		<slot></slot>
		`;
	}
  
	ready() {
		super.ready();
	}

	attached() {
		Polymer.dom.flush();
		waterfall(Polymer.dom(this).node);
	}
}

window.customElements.define('waterfall-grid', WaterfallGrid);
