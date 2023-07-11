const mapping: Record<string, string> = {
  churches: 'church',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
