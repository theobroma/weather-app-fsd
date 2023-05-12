import { z } from 'zod';

import { ConditionSchema } from './z.general';

export const LocationSchema = z.object({
  name: z.string(),
  region: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
  tzId: z.string(),
  localtimeEpoch: z.number(),
  localtime: z.string(),
});

export type LocationType = z.infer<typeof LocationSchema>;

export const CurrentWeatherSchema = z.object({
  lastUpdatedEpoch: z.number(),
  lastUpdated: z.string(),
  tempC: z.number(),
  tempF: z.number(),
  isDay: z.number(),
  condition: ConditionSchema,
  windMph: z.number(),
  windKph: z.number(),
  windDegree: z.number(),
  windDir: z.string(),
  pressureMb: z.number(),
  pressureIn: z.number(),
  precipMm: z.number(),
  precipIn: z.number(),
  humidity: z.number(),
  cloud: z.number(),
  feelslikeC: z.number(),
  feelslikeF: z.number(),
  visKm: z.number(),
  visMiles: z.number(),
  uv: z.number(),
  gustMph: z.number(),
  gustKph: z.number(),
});

export type CurrentWeatherType = z.infer<typeof CurrentWeatherSchema>;
