## Airbnb API

The Airbnb API allows users to search for accommodations by location, place name, and geographic coordinates to find a place to rent. This API provides all the necessary functionalities for developers to create new applications with extended features.

### `GET /getLanguages`

Returns a list of languages supported by Airbnb.

```json
{
  "id": "String",
  "title": "String"
}
```

### `GET /getCategory`
Returns a list of categories available on Airbnb.

```json
{
  "id": "String",
  "title": "String",
  "image": "String"
}
```

### `GET /getCurrency`
Returns information about currencies supported by Airbnb.

```json
{
  "code": "String",
  "id": "String",
  "localized_full_name": "String",
  "name": "String",
  "symbol": "String",
  "unicode_symbol": "String",
  "is_eligible_for_guest": boolean,
  "is_eligible_for_lys": boolean
}
```
