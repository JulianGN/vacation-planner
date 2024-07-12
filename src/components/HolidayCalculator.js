class HolidayCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
              /* Add your styles here */
          </style>
          <h1>Find the Best Days Off</h1>
          <form id="holidayForm">
              <label for="holidays">Enter Local Holidays (YYYY-MM-DD):</label><br>
              <textarea id="holidays" name="holidays" rows="4" cols="50"></textarea><br>
              <input type="submit" value="Calculate">
          </form>
      `;
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#holidayForm")
      .addEventListener("submit", this.calculateBestDaysOff.bind(this));
  }

  async calculateBestDaysOff(event) {
    event.preventDefault();

    // TODO
    // const holidays = this.shadowRoot
    //   .querySelector("#holidays")
    //   .value.split("\n")
    //   .map((date) => date.trim());
    // const response = await fetch("/api/holidays/calculate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ holidays }),
    // });
    // const result = await response.json();
    // sessionStorage.setItem("bestDaysOff", JSON.stringify(result.bestDaysOff));
    // page("/results");
  }
}

customElements.define("holiday-calculator", HolidayCalculator);
