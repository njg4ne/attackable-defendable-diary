// https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const welcome = document.querySelector("#welcome");
if (Boolean(user)) {
  const toInsert = DOMPurify.sanitize(user); // protection: sanitization
  welcome.textContent = `Welcome back, ${toInsert}!`; // protection: safe sink
}
document.getElementById("xss-example").textContent =
  "?user=You<img hidden src='/fake-endpoint' onerror=alert(1);>";

// basic app functionality
const STORAGE_KEY = "diaryContent";
const diaryForm = document.getElementById("diaryForm");
function onInput(inputEvent) {
  window.localStorage.setItem(STORAGE_KEY, inputEvent.target.value);
}
function onPageLoad() {
  if (!diaryForm.diary) return;
  diaryForm.diary.value = window.localStorage.getItem(STORAGE_KEY) ?? "";
  diaryForm.diary.addEventListener("input", onInput);
}
window.addEventListener("load", onPageLoad);
