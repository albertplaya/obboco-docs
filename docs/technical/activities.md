# Activities

## Get all activities by partner

**Request**

GET /api/v1/partners/:partner_id/activities

```json
{
   "partner_id": "1"
}
```

**Response**

```json
{
   "data": [
    {
        "activity_id": "1",
        "title": "Activity 1",
        "description": "Description 1",
        "price": 100,
        "currency": "EUR",
        "location": "Location 1",
        "partner_id": "1",
        "image_id": "1"
    }
  ]
}
```