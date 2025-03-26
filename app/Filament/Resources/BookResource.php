<?php
namespace App\Filament\Resources;

use App\Filament\Resources\BookResource\Pages;
use App\Filament\Resources\BookResource\RelationManagers;
use App\Models\Book;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class BookResource extends Resource
{
    protected static ?string $model = Book::class;

    protected static ?string $navigationIcon = 'heroicon-o-book-open';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Название')
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->label('Описание'),
                Forms\Components\TextInput::make('author')
                    ->label('Автор'),
                Forms\Components\TextInput::make('category')
                    ->label('Категория'),
                Forms\Components\Checkbox::make('available')
                    ->label('Доступность книги'),
                Forms\Components\FileUpload::make('cover_image')
                    ->label('Загрузка обложки')
                    ->directory('/img/covers/')

            ]);
    }

    public static function table(Table|Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->label('ID'),
                Tables\Columns\TextColumn::make('title')->label('Название'),
                Tables\Columns\TextColumn::make('description')->label('Описание'),
                Tables\Columns\CheckboxColumn::make('available')->label('Доступна'),
                Tables\Columns\TextColumn::make('category')->label('Категория'),
                Tables\Columns\TextColumn::make('author')->label('Автор'),
            ])
            ->filters([]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBooks::route('/'),
            'create' => Pages\CreateBook::route('/create'),
            'edit' => Pages\EditBook::route('/{record}/edit'),
        ];
    }
}
