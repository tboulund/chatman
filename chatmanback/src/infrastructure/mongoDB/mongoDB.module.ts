import { Module } from '@nestjs/common';
import { MongoDbProvider } from '../mongoDB/mongoDB.provider';

@Module({ providers: [MongoDbProvider], exports: [MongoDbProvider] })
export class MongoDbModule {}
