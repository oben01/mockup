class YadomsComponentCounter {
  constructor() {}

  propsKeys() {
    return ['value', 'unit'];
  }

  render(opts) {
    return `
      <div class="counter joliePosition">
        <div class="odometer" data-value="${opts.value}" data-unit="${opts.unit}">
        </div>
      </div>
    `;
  }

  style() {
    return `
      .counter .odometer {
        font-weight: bold;
        font-size: 1.25rem;
      }

      .counter .odometer .odometer-hacking-mark ~ .odometer-digit {
        background-image: linear-gradient(
          to bottom,
          #eee0d3 0%,
          #eee0d3 40%,
          #bbaa9a 60%,
          #eee0d3 80%,
          #eee0d3 100%
        );
        background-color: #fff5f5;
        color: #c53030;
      }

      .counter .odometer .odometer-suffix-mark {
        padding: 0 0.15rem;
      }
    `;
  }

  _odometerHack($element) {
    let $fms = $element.querySelectorAll('.odometer-formatting-mark');
    if ($fms.length) {
      let $fm = $fms[$fms.length - 1];
      $fm.classList.add('odometer-hacking-mark');
    }
    let $el = document.createElement('span');
    $el.className = 'odometer-formatting-mark odometer-suffix-mark text-lg';
    $el.innerHTML = $element.dataset.unit;
    let $inside = $element.querySelector('.odometer-inside');
    $inside.appendChild($el);
  }

  _transform($element) {
    let $counter = $element.querySelector('.odometer');
    let odo = new Odometer({
      el: $counter,
      val: 0,
      format: '(.ddd)',
      duration: 1000,
      minimumIntegerDigit: 9,
    });
    let self = this;
    $counter.addEventListener('odometerdone', (ev) => {
      self._odometerHack(ev.currentTarget);
    });
    odo.update($counter.dataset.value);
    this._odometerHack($counter);
  }

  init($element) {
    let self = this;
    Yadoms.loader(
      '/components/lib/odometer/odometer.min.js',
      '/components/lib/odometer/car.css'
    ).then(function () {
      self._transform($element);
    });
  }

  update($element, name, value) {}
  getProperty($element, name) {}
}

export { YadomsComponentCounter as YadomsComponent };
