import os
import json

def generate_json(folder_path):
    result = []

    for category in os.listdir(folder_path):
        category_path = os.path.join(folder_path, category)

        if os.path.isdir(category_path):
            books = []

            for book_folder in os.listdir(category_path):
                book_path = os.path.join(category_path, book_folder)
                if os.path.isdir(book_path):
                    chapters = {
                        "path": book_path + "/",
                        "file": sorted(os.listdir(book_path))
                    }
                    book = {
                        "titre": book_folder,
                        "imageCover": os.path.join("/", folder_path, category, book_folder, chapters["file"][0]),
                        "chapter": chapters
                    }

                    books.append(book)

            category_obj = {
                "titre": category,
                "imageCover": os.path.join(category, books[0]["titre"], books[0]["imageCover"]),
                "book": books
            }

            result.append(category_obj)

    return result

folder_path = "Dossier"

json_data = generate_json(folder_path)

with open("gestionDesImages.json", "w") as json_file:
    json.dump(json_data, json_file, indent=2)
