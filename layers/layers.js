var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1 = new ol.format.GeoJSON();
var features_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1 = format_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1.readFeatures(json_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1.addFeatures(features_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1);
var lyr_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1, 
                style: style_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1,
                popuplayertitle: "RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon",
                interactive: true,
                    title: '<img src="styles/legend/RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1.png" /> RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon'
                });

lyr_OpenStreetMap_0.setVisible(true);lyr_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1];
lyr_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1.set('fieldAliases', {'FEATUREID': 'FEATUREID', 'EID_OBCINA': 'EID_OBCINA', 'SIFRA': 'SIFRA', 'NAZIV': 'NAZIV', 'OZNAKA_MES': 'OZNAKA_MES', 'DATUM_SYS': 'DATUM_SYS', 'NAZIV_DJ': 'NAZIV_DJ', });
lyr_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1.set('fieldImages', {'FEATUREID': '', 'EID_OBCINA': '', 'SIFRA': '', 'NAZIV': '', 'OZNAKA_MES': '', 'DATUM_SYS': '', 'NAZIV_DJ': '', });
lyr_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1.set('fieldLabels', {'FEATUREID': 'no label', 'EID_OBCINA': 'no label', 'SIFRA': 'no label', 'NAZIV': 'no label', 'OZNAKA_MES': 'no label', 'DATUM_SYS': 'no label', 'NAZIV_DJ': 'no label', });
lyr_RPE_SLO_PROSTORSKE_ENOTE_OBCINE_poligon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});