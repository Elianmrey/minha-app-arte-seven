export  default function EnvironmentKey()
{
  const EnvKey = import.meta.env.VITE_APP_API_TMDB_KEY;
  return (EnvKey);
 }