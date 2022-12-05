import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'API online.'
    };
  }

  getSecureResource() {
    return {
      message:
        'Access to protected resources granted! This protected resource is displayed when the token is successfully provided.'
    };
  }
}
