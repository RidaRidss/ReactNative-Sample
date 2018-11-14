import { Platform } from "react-native";
import { Alert } from "react-native";

import Util from "./index";

class LocationUtils {
  calculateDistance(lat2, lon2) {
    const { latitude: lat1, longitude: lon1 } = location;

    if (!lat1 || !lon1 || !lat2 || !lon2) {
      return "-";
    }

    const R = 6371;

    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = Math.round(R * c);

    return `${d} km`;
  }
}

export default new LocationUtils();
