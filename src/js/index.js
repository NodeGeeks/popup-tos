window.$scope = {};
window.$scope.tos = {};

function declineTOS() {
  localStorage.setItem('agreed-to-tos', false);
  window.location.replace(window.$scope.tos.config.forward_url);
}
function acceptTOS() {
  localStorage.setItem('agreed-to-tos', true)
}