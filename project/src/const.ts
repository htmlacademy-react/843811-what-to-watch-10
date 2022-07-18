export enum AppRoute {
  Main = '/',
  SignIn = '/sign-in',
  MyList = '/my-list',
  Film = '/film/:id',
  AddReview = '/film/:id/review',
  Player = '/player'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
