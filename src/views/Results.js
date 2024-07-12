export function showResults() {
  const result = JSON.parse(sessionStorage.getItem("bestDaysOff")) || [];
  document.getElementById("app").innerHTML = `
        <holiday-result result='${JSON.stringify(result)}'></holiday-result>
    `;
}
