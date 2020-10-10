"""
A script to convert 'Engineer Vocabulary List.xlsx' into CSV files.
"""

import os
import re

import pandas as pd


def main():
    excel_path = "Engineer Vocabulary List.xlsx"
    out_dir = "csv"
    os.makedirs(out_dir, exist_ok=True)

    sheets = pd.read_excel(
        excel_path,
        sheet_name=None,
        skiprows=3,
        usecols="C:H",
    )

    for sheet_name, df in sheets.items():
        # The excel file contains two "English" columns and pandas automatically
        # converts the second one to "English.1". The line below reverts the conversion.
        df = df.rename(columns={"English.1": "English"})
        list_num = re.search(r"\d+", sheet_name).group(0)
        csv_path = os.path.join(out_dir, f"list_{list_num}.csv")
        df.to_csv(csv_path, index=False)


if __name__ == "__main__":
    main()
