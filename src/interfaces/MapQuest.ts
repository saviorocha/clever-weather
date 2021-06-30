export interface MapQuest {
  results: [
    {
      providedLocation: {
        location: number;
      };
      locations: [
        {
          adminArea5: string;
          adminArea1: string;
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
