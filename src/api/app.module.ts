import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AuthorModule } from './author/author.module';
import { GenreModule } from './genre/genre.module';
import { BookModule } from './book/book.module';
import { BasketModule } from './basket/basket.module';
import { ReviewModule } from './review/review.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AdminModule, AuthorModule, GenreModule, BookModule, BasketModule, ReviewModule, OrderModule, OrderItemModule, UserModule],
  providers: [AppService],
})
export class AppModule {}
