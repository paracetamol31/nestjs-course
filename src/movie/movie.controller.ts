import { Body, Controller, Get, Headers, Post, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('movies')
export class MovieController {
  @Get()
  findAll(@Query() query: any) {
    return `${JSON.stringify(query)}`;
  }

  @Post()
  create(@Body() body: { title: string; genre: string }) {
    return `Фильм "${body.title}" был добавлен в жанре ${body.genre}`
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return `${JSON.stringify(headers)}`;
  }

  @Get('request')
  getRequestDetails(@Req() req: Request) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers
    }
  }

  @Get('response')
  getResponse(@Res() res: Response) {
    res.status(200).json({ message: "Hello" })
  }
}
