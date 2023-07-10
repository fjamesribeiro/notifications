import { IsString, IsUUID, } from "class-validator"

export class CreateNotificationBodyDto {

    @IsString()
    @IsUUID()
    recipientId: string

    @IsString()
    content: string

    @IsString()
    category: string
}