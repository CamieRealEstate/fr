import { HttpInterceptorFn } from '@angular/common/http';

export const statusInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("🚀 ~ statusInterceptor works")
  console.log("🚀 ~ req:", req)
  
  return next(req);
};
