from abc import ABCMeta, abstractclassmethod
import argparse
import csv
from enum import Enum
import os
import pandas as pd
import shutil
from typing import List, Union


AUDIO_DIR = 'media/audio'
IMAGE_DIR = 'media/image'
DECK_ID = 'engineer-vocabulary-list'
DECK_VERSION = 3

parser = argparse.ArgumentParser(description='word list to flashcards.')
parser.add_argument('wordlist', help='word list csv file')
args = parser.parse_args()


def main() -> None:
    flashcards: List[Flashcard] = []
    df = pd.read_csv(args.wordlist)

    for index, row in df.iterrows():
        flashcard = Flashcard(
            front=[
                ClozeText(source=row['ENGLISH SENTENCE WITH CLOZE'],
                          start_symbol='{{', end_symbol='}}'),
                HighlightText(source=row['JAPANESE SENTENCE'],
                              keyword=row['JAPANESE HIGHLIGHT'],
                              color=colors[Color.BLUE]),
            ],
            back=[
                row['ENGLISH WORD'],
                row['PHONETICS'],
                row['PART OF WORD'],
                row['JAPANESE WORD'],
                row['SYNONYM'],
                Audio(filename=row['ENGLISH AUDIO FILE'])
            ])
        flashcards.append(flashcard)

    Anki(deck_id=DECK_ID,
         deck_version=DECK_VERSION,
         flashcards=flashcards).process_flashcards()


class Color(Enum):
    RED = 1
    BLUE = 2


colors = {
    Color.RED: '#ff0000',
    Color.BLUE: '#0000ff'
}


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


Item: type = Union[str, ClozeText, HighlightText, Media]


class Flashcard:
    def __init__(self,
                 front: List[Item],
                 back: List[Item]):
        self.front = front
        self.back = back


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
                front_string = ''
                for i, item in enumerate(flashcard.front):
                    item_string = self.process_item(item)
                    if item_string is None:
                        continue
                    if i != 0:
                        front_string += self.line_break
                    front_string += item_string

                back_string = ''
                for i, item in enumerate(flashcard.back):
                    item_string = self.process_item(item)
                    if item_string is None:
                        continue
                    back_string += self.line_break
                    back_string += item_string

                writer.writerow([front_string, back_string])

    def process_item(self, item: Item) -> str:
        if type(item) == str:
            item_string = item
        elif type(item) == ClozeText:
            item_string = self.formatClozeText(item)
        elif type(item) == HighlightText:
            item_string = self.formatHighlightText(item)
        elif issubclass(type(item), Media):
            copied_filename = self.deck_id + '_' + item.filename
            if type(item) == Image:
                src_path = os.path.join(IMAGE_DIR, item.filename)
            elif type(item) == Audio:
                src_path = os.path.join(AUDIO_DIR, item.filename)
            else:
                return None
            shutil.copy(src_path, self.media_dir)
            dst_path = os.path.join(self.media_dir, item.filename)
            renamed_dst_path = os.path.join(self.media_dir, copied_filename)
            os.rename(dst_path, renamed_dst_path)
            item_string = self.formatMediaString(type(item), copied_filename)
        else:
            return None
        return item_string

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
