import Popover from '../Popover';

describe('class Popover', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div class="popover-btn">Btn</div>';

    const popovers = new Popover('popover-btn');
    popovers.init();
  });

  test('should create data-id', () => {
    const el = document.querySelector('.popover-btn');

    expect(el.dataset.id).toBeDefined();
  });

  test('should show popover', () => {
    const el = document.querySelector('.popover-btn');

    el.click();

    expect(el.firstElementChild.classList.contains('popover')).toBeTruthy();
  });

  test('should remove popover', () => {
    const el = document.querySelector('.popover-btn');

    el.click();

    expect(el.firstElementChild).toBeNull();
  });
});
