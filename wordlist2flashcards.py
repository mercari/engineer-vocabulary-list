from abc import ABCMeta, abstractclassmethod
import argparse
import csv
import os
import pandas as pd
import shutil
from typing import List, Union


AUDIO_DIR = 'media/audio'
IMAGE_DIR = 'media/image'
DECK_ID = 'engineer-vocabulary-list'

parser = argparse.ArgumentParser(description='word list to flashcards.')
parser.add_argument('import_file_path', help='import csv file\'s relative path')
parser.add_argument('export_file_version', help='version of export csv file')
args = parser.parse_args()


def main() -> None:
    flashcards: List[Flashcard] = []
    df = pd.read_csv(args.import_file_path)

    for index, row in df.iterrows():
        flashcard = Flashcard(
            fields = [
                ClozeText(source=row['ENGLISH SENTENCE WITH CLOZE'],
                          start_symbol='{{', end_symbol='}}'),
                HighlightText(source=row['JAPANESE SENTENCE'],
                              keyword=row['JAPANESE HIGHLIGHT'],
                              color=Color.BLUE),
                row['ENGLISH WORD'],
                row['PHONETICS'],
                row['JAPANESE WORD'],
                row['PART OF SPEECH'],
                Audio(filename=row['ENGLISH AUDIO FILE']),
                row['SYNONYM'],
            ]
        )
        flashcards.append(flashcard)

    Anki(deck_id=DECK_ID,
         deck_version=args.export_file_version,
         flashcards=flashcards).process_flashcards()


class Color:
    RED = '#ff0000'
    BLUE = '#0000ff'


class ClozeText():
    def __init__(self, source, start_symbol, end_symbol) -> None:
        self.source = source
        self.start_symbol = start_symbol
        self.end_symbol = end_symbol


class HighlightText():
    def __init__(self, source, keyword, color) -> None:
        self.source = source
        self.keyword = keyword
        self.color = color


class Media(metaclass=ABCMeta):
    def __init__(self) -> None:
        self.filename
        self.absolute_path
        raise NotImplementedError


class Image(Media):
    def __init__(self, filename: str) -> None:
        self.filename = filename
        self.absolute_path = os.path.join(IMAGE_DIR, filename)


class Audio(Media):
    def __init__(self, filename: str) -> None:
        self.filename = filename
        self.absolute_path = os.path.join(AUDIO_DIR, filename)


Field: type = Union[str, ClozeText, HighlightText, Media]


class Flashcard:
    def __init__(self, fields: List[Field]) -> None:
        self.fields = fields


class FlashcardsExporter(metaclass=ABCMeta):
    def __init__(self, deck_id: str, deck_version: int,
                 flashcards: List[Flashcard]) -> None:
        self.deck_id = deck_id
        self.deck_version = deck_version
        self.flashcards = flashcards

    @abstractclassmethod
    def process_flashcards(self) -> None:
        raise NotImplementedError

    @abstractclassmethod
    def export(self) -> None:
        raise NotImplementedError


class Anki(FlashcardsExporter):
    def __init__(self, deck_id: str, deck_version: int,
                 flashcards: List[Flashcard]) -> None:
        super().__init__(deck_id, deck_version, flashcards)
        self.line_break = '<br>'
        self.filed_separator = '\t'
        self.export_dir = 'anki'
        self.csv_filename = self.deck_id + str(self.deck_version) + '.csv'
        self.media_dir = os.path.join(self.export_dir, 'media')

    def process_flashcards(self) -> None:
        with open(os.path.join(self.export_dir, self.csv_filename), 'w') as f:
            writer = csv.writer(f, delimiter=self.filed_separator)
            for flashcard in self.flashcards:
                writer.writerow(list(map(lambda f: self.process_field(f), flashcard.fields)))

    def process_field(self, field: Field) -> str:
        if type(field) == str:
            field_string = field
        elif type(field) == ClozeText:
            field_string = self.formatClozeText(field)
        elif type(field) == HighlightText:
            field_string = self.formatHighlightText(field)
        elif issubclass(type(field), Media):
            copied_filename = self.deck_id + '_' + field.filename
            if type(field) == Image:
                src_path = os.path.join(IMAGE_DIR, field.filename)
            elif type(field) == Audio:
                src_path = os.path.join(AUDIO_DIR, field.filename)
            else:
                return None
            shutil.copy(src_path, self.media_dir)
            dst_path = os.path.join(self.media_dir, field.filename)
            renamed_dst_path = os.path.join(self.media_dir, copied_filename)
            os.rename(dst_path, renamed_dst_path)
            field_string = self.formatMediaString(type(field), copied_filename)
        else:
            return None
        return field_string

    def formatClozeText(self, cloze_text: ClozeText) -> str:
        formatted_text = cloze_text.source \
            .replace(cloze_text.start_symbol, '{{c1::') \
            .replace(cloze_text.end_symbol, '}}')
        return formatted_text

    def formatHighlightText(self, highlight_text: HighlightText) -> str:
        formatted_text = highlight_text.source \
            .replace(highlight_text.keyword,
                     '<font color="' + highlight_text.color + '">'
                     + highlight_text.keyword + '</font>')
        return formatted_text

    def formatMediaString(self, media_type: type, filename: str) -> str:
        if media_type == Image:
            formatted_text = '<img src=' + filename + '/>'
        elif media_type == Audio:
            formatted_text = '[sound:' + filename + ']'
        return formatted_text

    def export(self) -> None:
        pass


if __name__ == '__main__':
    main()
