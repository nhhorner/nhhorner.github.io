var map = L.map('map', {zoomControl: false}).setView([37.789234, -122.361497], 13);
L.tileLayer('http://{s}.tiles.mapbox.com/v3/nhhorner.aaf9a69b/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);
