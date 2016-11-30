# gcf_chatwork
Cloud Functions http trigger chatwork integration

# config

- config/production.json

```config/production.json
{
  "Chatwork": {
    "room_id": "SEND CHATWORK ROOM_ID",
    "api_token": "API TOKEN"
  }
}

```

# deploy

```
gcloud alpha functions deploy FUNCTION_NAME --stage-bucket GS_BUCKET --trigger-http
```

# License
MIT


# Author

tknzk <tkm.knzk@gmail.com>
