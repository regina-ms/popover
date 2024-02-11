/* eslint-disable no-param-reassign */
import data from './data';

export default class Popover {
  constructor(elementClass) {
    this.popovers = data;

    this.elements = document.querySelectorAll(`.${elementClass}`);

    this.onElClick = this.onElClick.bind(this);
    this.elements.forEach((el) => el.addEventListener('click', this.onElClick));
  }

  onElClick(e) {
    const popover = e.target.querySelector('.popover');

    if (popover) {
      popover.remove();
    } else {
      this.showPopover(e.target);
    }
  }

  init() {
    this.elements.forEach((el, index) => {
      el.dataset.id = this.popovers[index].id;
    });
  }

  showPopover(element) {
    const popover = this.popovers.find((p) => p.id === element.dataset.id);

    const popoverEl = document.createElement('div');
    popoverEl.classList.add('popover');
    popoverEl.dataset.id = popover.id;

    const titleEl = document.createElement('div');
    titleEl.classList.add('popover-title');
    titleEl.textContent = popover.title;

    const contentEl = document.createElement('div');
    contentEl.classList.add('popover-content');
    contentEl.textContent = popover.text;

    popoverEl.append(titleEl, contentEl);
    element.append(popoverEl);
  }
}
