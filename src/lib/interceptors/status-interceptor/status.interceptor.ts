import { HttpInterceptorFn } from '@angular/common/http';

export const statusInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
