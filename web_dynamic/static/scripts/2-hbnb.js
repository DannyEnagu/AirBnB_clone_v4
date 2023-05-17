$(function () {
  function addToSelectedAmenities () {
    const selectedAmenity = [];
    $.each($('input:checked'), function (i, input) {
      selectedAmenity.push($(input).data('name'));
    });
    $('div.amenities h4').empty();
    if (selectedAmenity.length) {
      $('div.amenities h4').append(selectedAmenity.join(', '));
    }
  }
  $('input[type=checkbox]').on('change', addToSelectedAmenities);

  // Request the API status
  $.get('/api/v1/status', function (data, status) {
    if (data.status === 'OK') {
      // Add the 'available' class to the API status div
      $('div#api_status').addClass('available');
    } else {
      // Remove the 'available' class to the API status div
      $('div#api_status').removeClass('available');
    }
  });
});
