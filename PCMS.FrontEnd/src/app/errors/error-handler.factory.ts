import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler';
import { environment } from '../../environments/environment';

export function errorHandlerFactory(globalErrorHandler: GlobalErrorHandler): ErrorHandler {
  return environment.useCustomErrorHandler ? globalErrorHandler : new ErrorHandler();
}