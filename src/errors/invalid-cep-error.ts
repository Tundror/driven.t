import { ApplicationError } from '@/protocols';

export function invalidCepError(): ApplicationError {
  return {
    name: 'invalidCepError',
    message: 'Invalid CEP!',
  };
}