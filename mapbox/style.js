
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMWhiteBlack_0": {
            "type": "raster",
            "tiles": ["http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "blockfaces_1": {
            "type": "geojson",
            "data": json_blockfaces_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "OSMWhiteBlack_0",
            "type": "raster",
            "source": "OSMWhiteBlack_0"
        },
        {
            "id": "lyr_blockfaces_1_0",
            "type": "line",
            "source": "blockfaces_1",
            "layout": {},
            "paint": {'line-width': ['case', ['all', ['>=', ['get', 'blcksum18q4'], 0.0], ['<=', ['get', 'blcksum18q4'], 1235.65]], 4.006299212646, ['all', ['>', ['get', 'blcksum18q4'], 1235.65], ['<=', ['get', 'blcksum18q4'], 2683.4]], 4.006299212646, ['all', ['>', ['get', 'blcksum18q4'], 2683.4], ['<=', ['get', 'blcksum18q4'], 4373.95]], 4.006299212646, ['all', ['>', ['get', 'blcksum18q4'], 4373.95], ['<=', ['get', 'blcksum18q4'], 6543.0]], 4.006299212646, ['all', ['>', ['get', 'blcksum18q4'], 6543.0], ['<=', ['get', 'blcksum18q4'], 9960.05]], 4.006299212646, ['all', ['>', ['get', 'blcksum18q4'], 9960.05], ['<=', ['get', 'blcksum18q4'], 14650.7]], 4.006299212646, ['all', ['>', ['get', 'blcksum18q4'], 14650.7], ['<=', ['get', 'blcksum18q4'], 26366.5]], 4.006299212646, ['all', ['>', ['get', 'blcksum18q4'], 26366.5], ['<=', ['get', 'blcksum18q4'], 55814.28]], 4.006299212646, 1], 'line-opacity': ['case', ['all', ['>=', ['get', 'blcksum18q4'], 0.0], ['<=', ['get', 'blcksum18q4'], 1235.65]], 1.0, ['all', ['>', ['get', 'blcksum18q4'], 1235.65], ['<=', ['get', 'blcksum18q4'], 2683.4]], 1.0, ['all', ['>', ['get', 'blcksum18q4'], 2683.4], ['<=', ['get', 'blcksum18q4'], 4373.95]], 1.0, ['all', ['>', ['get', 'blcksum18q4'], 4373.95], ['<=', ['get', 'blcksum18q4'], 6543.0]], 1.0, ['all', ['>', ['get', 'blcksum18q4'], 6543.0], ['<=', ['get', 'blcksum18q4'], 9960.05]], 1.0, ['all', ['>', ['get', 'blcksum18q4'], 9960.05], ['<=', ['get', 'blcksum18q4'], 14650.7]], 1.0, ['all', ['>', ['get', 'blcksum18q4'], 14650.7], ['<=', ['get', 'blcksum18q4'], 26366.5]], 1.0, ['all', ['>', ['get', 'blcksum18q4'], 26366.5], ['<=', ['get', 'blcksum18q4'], 55814.28]], 1.0, 1], 'line-color': ['case', ['all', ['>=', ['get', 'blcksum18q4'], 0.0], ['<=', ['get', 'blcksum18q4'], 1235.65]], '#f7fcf5', ['all', ['>', ['get', 'blcksum18q4'], 1235.65], ['<=', ['get', 'blcksum18q4'], 2683.4]], '#e2f4dd', ['all', ['>', ['get', 'blcksum18q4'], 2683.4], ['<=', ['get', 'blcksum18q4'], 4373.95]], '#c0e6b9', ['all', ['>', ['get', 'blcksum18q4'], 4373.95], ['<=', ['get', 'blcksum18q4'], 6543.0]], '#94d390', ['all', ['>', ['get', 'blcksum18q4'], 6543.0], ['<=', ['get', 'blcksum18q4'], 9960.05]], '#60ba6c', ['all', ['>', ['get', 'blcksum18q4'], 9960.05], ['<=', ['get', 'blcksum18q4'], 14650.7]], '#329b51', ['all', ['>', ['get', 'blcksum18q4'], 14650.7], ['<=', ['get', 'blcksum18q4'], 26366.5]], '#0c7835', ['all', ['>', ['get', 'blcksum18q4'], 26366.5], ['<=', ['get', 'blcksum18q4'], 55814.28]], '#00441b', '#ffffff']}
        }
],
}