/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0vwm8kqkc6n47nn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mavkqhjt",
    "name": "adresse",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0vwm8kqkc6n47nn")

  // remove
  collection.schema.removeField("mavkqhjt")

  return dao.saveCollection(collection)
})
