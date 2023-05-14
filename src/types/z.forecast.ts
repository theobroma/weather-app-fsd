import { z } from 'zod';

import { CurrentWeatherSchema } from './z.current';
import { AstroSchema, DaySchema, HourSchema } from './z.general';
import { LocationSchema } from './z.location';

export const ForecastDaySchema = z.object({
  astro: AstroSchema,
  date: z.string(), // "2023-05-14"
  dateEpoch: z.number(), // 1684022400,
  day: DaySchema,
  hour: HourSchema,
});

// ================ Response ================

export const ForecastResponseSchema = z.object({
  current: CurrentWeatherSchema,
  forecast: z.object({
    forecastDay: z.array(ForecastDaySchema),
  }),

  location: LocationSchema,
});

export type ForecastResponseType = z.infer<typeof ForecastResponseSchema>;
