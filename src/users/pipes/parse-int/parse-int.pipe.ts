import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, 'inside pipe');
    console.log(metadata);

    const parseAgeInt = parseInt(value.age.toString());
    if (isNaN(parseAgeInt)) {
      console.log('Value is not a number');
      throw new HttpException(
        'Invalid data. Expected a number.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { ...value, age: parseAgeInt };
  }
}
