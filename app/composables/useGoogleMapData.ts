import { ref } from 'vue'
import type {
    AdvancedMarkerOptions,
    MapOptions,
    MarkerOptions,
} from '~/models/map-options'

export function useGoogleMapData() {

    const mapOptions = ref<MapOptions>({
        zoom: 10,
        center:
            {
                lat: 46.70255,
                lng: -96.7463833
            },
        mapTypeId: "roadmap",
        disableDefaultUI: true,
        scrollwheel: false,
        styles:
            [
                {
                    featureType:"landscape",
                    stylers:[
                        {
                            saturation:-100
                        },
                        {
                            lightness:65
                        },
                        {
                            visibility:"on"
                        }
                    ]
                },
                {
                    featureType:"poi",
                    stylers: [
                        {saturation:-100},
                        {lightness:51},
                        {visibility:"simplified"}
                    ]
                },
                {
                    featureType:"road.highway",
                    stylers:[
                        {saturation:-100},
                        {visibility:"simplified"}
                    ]
                },
                {
                    featureType:"road.arterial",
                    stylers:[
                        {saturation:-100},
                        {lightness:30},
                        {visibility: "on"}
                    ]
                },
                {
                    featureType:"road.local",
                    stylers:[
                        {saturation:-100},
                        {lightness:40},
                        {visibility: "on"}
                    ]
                },
                {
                    featureType:"transit",
                    stylers:[
                        {saturation:-100},
                        {visibility:"simplified"}
                    ]
                },
                {
                    featureType:"administrative.province",
                    stylers:[
                        {visibility:"off"}
                    ]
                },
                {
                    featureType:"administrative.locality",
                    stylers:[
                        {visibility:"off"}
                    ]
                },
                {
                    featureType:"administrative.neighborhood",
                    stylers:[
                        {visibility:"on"}
                    ]
                },
                {
                    featureType:"water",
                    elementType:"labels",
                    stylers:[
                        {visibility:"on"},
                        {lightness:-25},
                        {saturation:-100}
                    ]
                },
                {
                    featureType:"water",
                    elementType:"geometry",
                    stylers:[
                        {hue:"#ffff00"},
                        {lightness:-25},
                        {saturation:-97}
                    ]
                }
            ]
    });

    const advancedMarkerOptions = ref<AdvancedMarkerOptions>({
        position: {
            lat: 46.70255,
            lng: -96.7463833
        },
        title: "The Haunted Farm"
    });

    const markerOptions = ref<MarkerOptions>({
        position: {
            lat: 46.70255,
            lng: -96.7463833
        },
        anchorPoint: "BOTTOM_CENTER",
        label: "HF",
        title: "The Haunted Farm"
    });

    return {
        mapOptions,
        advancedMarkerOptions,
        markerOptions,
    };
}
