import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notification-repository';
import { Module } from "@nestjs/common";
import { NotificationRepository } from "@application/repositories/notifications-repositories";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository
    }
  ],
  exports: [
    NotificationRepository
  ]
})
export class DatabaseModule{}