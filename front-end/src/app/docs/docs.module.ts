import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { DocsComponent } from './docs.component';
import { LibraryComponent,DialogAddLibrary } from './library/library.component';
import { ItemComponent,DialogAddItem } from './library/item/item.component';
import { QuestionsComponent } from './library/item/questions/questions.component';
import { QuestionComponent } from './library/item/questions/question/question.component';
import { AnswersComponent } from './library/item/questions/question/answers/answers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DocsComponent,
    LibraryComponent, 
    ItemComponent, 
    QuestionsComponent, 
    QuestionComponent, 
    AnswersComponent,
    DialogAddLibrary,
    DialogAddItem
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  entryComponents: [DialogAddLibrary,DialogAddItem]
})
export class DocsModule { }
