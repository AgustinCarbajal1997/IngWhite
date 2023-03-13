export interface Alert {
  id: number;
  nivel: string;
  titulo: string;
  contenido: string;
  fecha_publicacion: string;
  fecha_fin: string;
}

export interface Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
  excerpt: {
    rendered: string;
  };
  link: string;
}

export interface Climate {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}
