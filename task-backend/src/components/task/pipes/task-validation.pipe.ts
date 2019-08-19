import { PipeTransform } from "@nestjs/common";

export class TaskValidationPipe implements PipeTransform {

    transform(value: any) {
        return value;
    }
}
