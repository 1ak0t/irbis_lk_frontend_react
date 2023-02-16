export enum AppRoute {
  Login= '/login',
  Profile = '/',
  ConfirmEmail = '/confirm-email',
  NoEmail = '/no-email',
  Registration = '/registration'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoutes {
  Orders = '/orders',
  Login = '/users/login',
  CheckEmail = '/users/check-user',
  Facades = '/facades'
}

export enum StatusCodes {
  Ok = 200,
  GetFrom1C = 203,
  NotFound = 404,
}