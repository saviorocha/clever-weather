export interface LatLng {
  results?: [
    {
      locations: [
        {
          latLng: {
            lat: number;
            lng: number;
          };
        }
      ];
    }
  ];
  user: {
    lat: number;
    lng: number;
  };
}
