import { LocationQuery, RouteLocationNormalized, RouteParams } from 'vue-router';

function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function updateRouteOptions ({ 
  to,
  params,
  query
}: { 
  to: RouteLocationNormalized,
  params?: RouteParams,
  query?: LocationQuery
}) {
  // eslint-disable-next-line prefer-const
  let route = clone({ name: to.name as string, query: to.query, params: to.params });
  route.params = { ...route.params, ...params };
  route.query = { ...route.query, ...query };
  return route;
}