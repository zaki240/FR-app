migrate((db) => {
  const collection = new Collection({
    "id": "5hc61bd8zlcwf5l",
    "created": "2023-04-10 03:10:11.455Z",
    "updated": "2023-04-10 03:10:11.455Z",
    "name": "restaurant",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ufmao17d",
        "name": "nama",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tchorzg7",
        "name": "gambar",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "oxutflti",
        "name": "alamat",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hpnkpyya",
        "name": "jam",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9serdtmw",
        "name": "tel",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "nq1amgsf",
        "name": "harga",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5hc61bd8zlcwf5l");

  return dao.deleteCollection(collection);
})
