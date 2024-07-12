class HolidayResult extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                /* Add your styles here */
            </style>
            <div id="result"></div>
        `;
  }

  connectedCallback() {
    const result = JSON.parse(this.getAttribute("result")) || [];
    this.shadowRoot.querySelector(
      "#result"
    ).innerText = `Best Days Off: ${result.join(", ")}`;
  }
}

customElements.define("holiday-result", HolidayResult);
