(($) => {
    $('.banner-slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        pauseOnHover: false
    });

    /*Map Init*/
    if ($('#jetties-map')) {
        const jettiesMap = new google.maps.Map(document.getElementById('jetties-map'), {
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: {lat: 6.528447469405323, lng: 3.3989773845835876}
        });

        let locations = [
            {lat: 6.45354658330338, lng: 3.4532063074734194, name: 'Five Cowries Creek', address: 'Five Cowries, Falomo, Lagos'},
            {lat: 6.4425746111204845, lng: 3.4271200670832047, name: 'LASWA Boat Jetty', address: 'LASWA Jetty, Falomo, Ikoyi, Lagos'},
            {lat: 6.436591487619947, lng: 3.441863664675323, name: 'Lekki Addax Jetty', address: 'Lekki Addax Jetty, Lekki, Lagos'},
            {lat: 6.442374155981122, lng: 3.427020224753982, name: 'Lagferry Boat', address: 'Lagferry, Falomo, Lagos'},
            {lat: 6.51506058853579, lng: 3.6055057977665785, name: 'Tarzan Jetty', address: 'Tarzan Jetty, Ajah, Lagos'},
            {lat: 6.528447469405323, lng: 3.3989773845835876, name: 'Bariga Waterfront Jetty', address: 'Bariga Waterfront Jetty, Bariga, Lagos'},
            {lat: 6.6051547903878065, lng: 3.486502705247242, name: 'Ikorodu Jetty', address: 'Ikorodu Ferry Terminal, Ikorodu'},
            {lat: 6.6051547903878065, lng: 3.486502705247242, name: 'Ijede Jetty', address: 'Ijede Rd, Ikorodu 104101, Ikorodu'},
            {lat: 6.433735690775096, lng: 3.3455677554561136, name: 'Tin Can Island Jetty', address: 'Tin Can Island, Apapa, Lagos'},
            {lat: 6.439305187082332, lng: 3.359061353589322, name: 'Liverpool', address: 'Apapa 102272, Lagos'},
            {lat: 6.463654844250036, lng: 3.417702370778653, name: 'Texas Ferry', address: '12D Osbourne Foreshore Estate Phase II, Osborne Rd, Ikoyi, Lagos'},
            {lat: 6.4499287873765905, lng: 3.3889268554370497, name: 'Sea Coach Ferry Terminal', address: '12D Osbourne Foreshore Estate Phase II, Osborne Rd, Ikoyi, Lagos'},
            {lat: 6.4438191375501415, lng: 3.3986792261838046, name: 'Law School Jetty', address: 'Law School Jetty, Victoria Island'},
            {lat: 6.45872164943536, lng: 3.3083009437908752, name: 'Mile 2 Ferry Terminal', address: 'Lagos Badagry, Amuwo 102102, Lagos'},
            {lat: 6.464207017511994, lng: 3.4123205835099353, name: 'Phase 2 Jetty', address: 'Phase 2 Jetty, Festac Town'},
            {lat: 6.460526888982819, lng: 3.2165867621738857, name: 'Volkswagen Ferry Terminal', address: 'Ikemo St, Ojo 102113, Lagos'},
            {lat: 6.512167282767032, lng: 3.614864539522895, name: 'Badore Ferry Terminal', address: 'Badore Rd, Eti-Osa, Lagos'},
            {lat: 6.455148324587684, lng: 3.3714908413704454, name: 'Waziri Jetty', address: 'Waziri Jetty, Apapa, Lagos'},
            {lat: 6.4507315451113945, lng: 3.351480026085989, name: 'Tolu Ajegunle Jetty', address: 'Akinbo St, Apapa, Lagos'},
            {lat: 6.42829303093639, lng: 3.2588022125349068, name: 'Ijegun Egba Jetty', address: '134 Marwa St, Satellite Town, Lagos'},
            {lat: 6.441964702925013, lng: 3.404479372543046, name: 'Law School Jetty, Victoria Island', address: 'Eti-Osa, Lagos, Nigeria'},
            {lat: 6.628915553314373, lng: 3.550819188696813, name: 'Itegben Ferry Terminal, Egbon', address: 'Ijede Rd, Ikorodu, Nigeria'},
            {lat: 6.430593205431148, lng: 2.87809071147434, name: 'Badagry Jetty', address: 'Marina Rd, 103101, Badagry, Nigeria'}
        ];

        /*Add Markers*/
        locations.forEach(({lat, lng, name, address}) => {
            const infoWindow = new google.maps.InfoWindow({
                content: `<div class="map-info">
                            <div class="map-info__header">
                                <p>${name}</p>
                            </div>
                            
                            <div class="map-info__content">
                                <p>${address}</p>
                            </div>
                        </div>`
            });

            let icon = {
                url: 'img/ship.png', // url
                scaledSize: new google.maps.Size(30, 39), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            const marker = new google.maps.Marker({
                position: {lat, lng},
                map: jettiesMap,
                icon: icon,
                title: name,
                animation: google.maps.Animation.DROP
            });

            marker.addListener('mouseover', () => {
                infoWindow.open(jettiesMap, marker)
            })

            marker.addListener('mouseout', () => {
                infoWindow.close()
            })
        })

    }

})(jQuery);
