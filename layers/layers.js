var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_parcours_1 = new ol.format.GeoJSON();
var features_parcours_1 = format_parcours_1.readFeatures(json_parcours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcours_1.addFeatures(features_parcours_1);
var lyr_parcours_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcours_1, 
                style: style_parcours_1,
                interactive: true,
                title: '<img src="styles/legend/parcours_1.png" /> parcours'
            });
var format_nom_oiseau_2 = new ol.format.GeoJSON();
var features_nom_oiseau_2 = format_nom_oiseau_2.readFeatures(json_nom_oiseau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nom_oiseau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nom_oiseau_2.addFeatures(features_nom_oiseau_2);
var lyr_nom_oiseau_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nom_oiseau_2, 
                style: style_nom_oiseau_2,
                interactive: true,
                title: '<img src="styles/legend/nom_oiseau_2.png" /> nom_oiseau'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_parcours_1.setVisible(true);lyr_nom_oiseau_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_parcours_1,lyr_nom_oiseau_2];
lyr_parcours_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_nom_oiseau_2.set('fieldAliases', {'nom_oiseau': 'nom_oiseau', 'nombre': 'nombre', 'type_conta': 'type_conta', 'certitude': 'certitude', });
lyr_parcours_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_nom_oiseau_2.set('fieldImages', {'nom_oiseau': '', 'nombre': '', 'type_conta': '', 'certitude': '', });
lyr_parcours_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'inline label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_nom_oiseau_2.set('fieldLabels', {'nom_oiseau': 'inline label', 'nombre': 'inline label', 'type_conta': 'inline label', 'certitude': 'inline label', });
lyr_nom_oiseau_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});