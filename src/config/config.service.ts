import * as dotenv from 'dotenv';
import * as fs from 'fs';

export type EnvConfig = Record<string, string>;

export class ConfigService {

  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath))
  }


  get(key: string): string {
    return this.envConfig[key];
  }
}
