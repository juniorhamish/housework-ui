// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type {
  GetAllError,
  GetAllResponse,
  CreateData,
  CreateError,
  CreateResponse,
  GetError,
  GetResponse,
  UpdateData,
  UpdateError,
  UpdateResponse,
} from './types.gen';

export const client = createClient(createConfig());

export class UsersService {
  public static getAll<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
    return (options?.client ?? client).get<GetAllResponse, GetAllError, ThrowOnError>({
      ...options,
      url: '/users',
    });
  }

  public static create<ThrowOnError extends boolean = false>(options: Options<CreateData, ThrowOnError>) {
    return (options?.client ?? client).post<CreateResponse, CreateError, ThrowOnError>({
      ...options,
      url: '/users',
    });
  }
}

export class UserInfoService {
  public static get<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
    return (options?.client ?? client).get<GetResponse, GetError, ThrowOnError>({
      ...options,
      url: '/userinfo',
    });
  }

  public static update<ThrowOnError extends boolean = false>(options: Options<UpdateData, ThrowOnError>) {
    return (options?.client ?? client).patch<UpdateResponse, UpdateError, ThrowOnError>({
      ...options,
      url: '/userinfo',
    });
  }
}
