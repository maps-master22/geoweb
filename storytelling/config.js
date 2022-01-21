var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWFwcy1tYXN0ZXIyMiIsImEiOiJja3lpeGFwc3YxemRwMm5xaDh4NHVwZzN0In0.bP9IC90iMkZ7iZLLeF0Uig',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcanes',
    subtitle: 'Los principales volcanes activos del mundo',
    byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Eyjafjallajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-19.62, 63.63],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
               ]
        }, {
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Monte Vesubio, Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [14.42555555, 40.82138888],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, {
            id: 'volcan3',
            alignment: 'left',
            hidden:false,
            title: 'Kilauea, Hawaii',
            image:'https://commons.wikimedia.org/wiki/File:USGS_K%C4%ABlauea_multimediaFile-1955.jpg',
            description: "Es un volcán en escudo, el más reciente y activo de los cinco que conforman la isla de Hawái. Es uno de los volcanes más activos de la Tierra. Las coladas más antiguas, submarinas, han sido datadas con una antigüedad de cerca de 300 000 años.3​ Emergió sobre el mar hace unos 70 000 años. Es el segundo volcán más reciente formado sobre el punto caliente de Hawái y el actual centro eruptivo de la cadena de montes submarinos Hawái-Emperador. El más reciente es el monte submarino Lōʻihi situado a 35 km de la línea de la costa sureste. Forma una cuña entre la ladera este del Mauna Loa y el océano. Su ladera oriental desciende en pendiente acusada desde la línea de cráteres hasta la costa sureste de la isla. La ladera occidental es mucho más corta, y con escasa pendiente hasta el collado que separa ambos volcanes. Debido a su casi nula prominencia topográfica y a que su actividad eruptiva ha coincidido históricamente con la de Mauna Loa, Kilauea fue considerado un satélite de su vecino mucho más grande. Hoy se sabe que ambos volcanes son independientes, cada uno de ellos con su propio sistema de alimentación de magma." ,
            location: {
                center: [-155.29,19.42],
                zoom:15,
                pitch:60,
                bearing:-60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter:[],
            onChapterExit:[]
        }, {
            id: 'volcan4',
            alignment: 'right',
            hidden:false,
            title: 'Etna, Sicilia',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Etna_eruption_seen_from_the_International_Space_Station.jpg',
            description: "Es un volcán activo en la costa este de Sicilia, en el territorio de la Ciudad metropolitana de Catania, Italia. Tiene alrededor de 3357 metros de altura, aunque esta varía debido a las constantes erupciones. Es el volcán activo con mayor altura de la placa Euroasiática, el primero en referencia a la Europa geográfica y la montaña más alta de Italia al sur de los Alpes. El Etna cubre un área de 1190 km², con una circunferencia basal de 140 kilómetros. Hasta inicios del siglo XX, por lo menos, era frecuente que la población siciliana llamara Gibellu a este célebre volcán; tal denominación local deriva de la presencia árabe en el lugar durante la Edad Media. En efecto, Gibellu o Gibello deriva de la palabra árabe جبل ŷébel (monte, montaña). Aún hoy, se llama en Sicilia Gibello o Mongibelo a la montaña, quedando la denominación Etna para el cono volcánico. En la mitología griega, el Etna era el volcán en cuyo interior se situaban las fraguas de Hefesto, que trabajaba en compañía de cíclopes y gigantes. El monstruoso Tifón yacía debajo de esta montaña, lo que causaba frecuentes terremotos y erupciones de humo y lava. También es uno de los volcanes más activos del mundo." ,
            location: {
                center: [14.99,37.75],
                zoom:14,
                pitch:30,
                bearing:-85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter:[],
            onChapterExit:[]
        } 

    ]
};
