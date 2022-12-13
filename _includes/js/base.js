// enable tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// copy link and show tooltip confirmation
function copyText(text, id) {
  navigator.clipboard.writeText(text).then(function() {
    let tooltipElement = document.getElementById(id);
    let tooltip = bootstrap.Tooltip.getInstance(tooltipElement);
    tooltip.show();
    setTimeout(() => { tooltip.hide(); }, 1000);
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}

// aplly filter after search typing delay
function search() {
  delay(function(){
    applyFilter();
  }, 200 );
}

// filter claims to ones that match search term
function applyFilter() {
  let searchInput = document.getElementById('searchInput');
  let searchText = searchInput.value.toLowerCase();
  let selectedFilter = document.querySelector('input[name="filter"]:checked').value;
  let claims = document.getElementsByClassName("claim");
  let noResults = document.getElementById('noResults');
  let matches = 0;
  for (let i = 0; i < claims.length; i++) {
    if (claims[i].classList.contains(selectedFilter) || selectedFilter == 'all') {
      let claimTitle = claims[i].getElementsByTagName("a");
      if (claimTitle[0].innerText.toLowerCase().match(searchText) != null) {
        claims[i].classList.remove("d-none");
        matches++;
      } else {
        claims[i].classList.add("d-none");
      }
    } else {
      claims[i].classList.add("d-none");
    }
  }
  if (matches == 0) {
    noResults.classList.remove("d-none");
  } else {
    noResults.classList.add("d-none");
  }
}

// general delay function
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();